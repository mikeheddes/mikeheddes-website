import { useCallback, useEffect, useMemo, useRef } from "react";
import { Tensor, InferenceSession } from "onnxruntime-web";

import { PlaneAction } from "./plane";
import { removeItem, lastOf, argmax, randint } from "./utils";
import { preprocess } from "./process";

export function useJetFighterUserController(
  leftKey: string,
  rightKey: string,
  fireKey: string
): () => PlaneAction {
  const userActionsRef = useRef<PlaneAction[]>([PlaneAction.NOTHING]);

  useEffect(() => {
    function setUserAction(event: KeyboardEvent) {
      event.preventDefault();
      if (event.repeat) return;

      const key = event.key.toLowerCase();

      let userActions = userActionsRef.current;
      if (key === leftKey) {
        userActions.push(PlaneAction.ROTATE_LEFT);
      } else if (key === rightKey) {
        userActions.push(PlaneAction.ROTATE_RIGHT);
      } else if (key === fireKey) {
        userActions.push(PlaneAction.FIRE);
      }

      userActionsRef.current = userActions;
    }

    function unsetUserAction(event: KeyboardEvent) {
      const key = event.key.toLowerCase();

      let userActions = userActionsRef.current;
      if (key === leftKey) {
        userActions = removeItem(userActions, PlaneAction.ROTATE_LEFT);
      } else if (key === rightKey) {
        userActions = removeItem(userActions, PlaneAction.ROTATE_RIGHT);
      } else if (key === fireKey) {
        userActions = removeItem(userActions, PlaneAction.FIRE);
      }

      userActionsRef.current = userActions;
    }

    document.addEventListener("keydown", setUserAction);
    document.addEventListener("keyup", unsetUserAction);
    return () => {
      document.removeEventListener("keydown", setUserAction);
      document.removeEventListener("keyup", unsetUserAction);
    };
  }, [leftKey, rightKey, fireKey]);

  const getAction = useCallback(() => {
    return lastOf(userActionsRef.current);
  }, []);

  return getAction;
}

export function useJetFighterAIController(
  onnxModelURL: string,
  HEIGHT: number,
  WIDTH: number
) {
  const sessionRef = useRef<InferenceSession>(null);
  const aiActionRef = useRef(PlaneAction.NOTHING);
  const frameBufferRef = useRef<Tensor[]>([]);
  const actionRepeatCounterRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    InferenceSession.create(onnxModelURL, {
      executionProviders: ["webgl"],
    }).then((session) => {
      if (!isMounted) return;
      sessionRef.current = session;
    });

    return () => {
      isMounted = false;
    };
  }, [onnxModelURL]);

  useEffect(() => {
    let frameBuffer = [];

    for (let index = 0; index < 4; index++) {
      const data = new Float32Array(1 * 3 * HEIGHT * WIDTH).fill(0.0);
      const tensor = new Tensor("float32", data, [1, 3, HEIGHT, WIDTH]);
      frameBuffer.push(tensor);
    }

    frameBufferRef.current = frameBuffer;
  }, [HEIGHT, WIDTH]);

  const addFrameToBuffer = useCallback(
    (data: Uint8ClampedArray) => {
      const floatData = preprocess(data, HEIGHT, WIDTH);
      const tensor = new Tensor("float32", floatData, [1, 3, HEIGHT, WIDTH]);

      frameBufferRef.current.pop();
      frameBufferRef.current.push(tensor);
    },
    [HEIGHT, WIDTH]
  );

  const updateAction = useCallback(async () => {
    if (sessionRef.current) {
      const session = sessionRef.current;
      const outputMap = await session.run({
        frame_data_0: frameBufferRef.current[0],
        frame_data_1: frameBufferRef.current[1],
        frame_data_2: frameBufferRef.current[2],
        frame_data_3: frameBufferRef.current[3],
      });

      let qValues = outputMap.q_values.data as Float32Array;
      const { value: qValue, index: action } = argmax(qValues);

      aiActionRef.current = action;
    } else {
      aiActionRef.current = randint(0, 4);
    }
  }, []);

  const getAction = useCallback(
    async (data: Uint8ClampedArray) => {
      addFrameToBuffer(data);

      if (actionRepeatCounterRef.current === 0) {
        await updateAction();
        actionRepeatCounterRef.current = randint(1, 5);
      }

      actionRepeatCounterRef.current--;
      return aiActionRef.current;
    },
    [addFrameToBuffer, updateAction]
  );

  return getAction;
}
