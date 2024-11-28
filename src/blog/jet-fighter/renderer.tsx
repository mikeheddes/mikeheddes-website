import { useMemo, useRef, useEffect, useCallback, RefObject } from "react";
import { contentWrapper } from "../../styles";

import { JetFighter, GameState, PlaneAction } from "./game";
import {
  useJetFighterAIController,
  useJetFighterUserController,
} from "./game/controls";

const WIDTH = 240;
const HEIGHT = 180;

type Props = {
  gameState: GameState;
  setGameState: (gameState: GameState) => void;
  controlElements: {
    left: RefObject<HTMLElement>;
    right: RefObject<HTMLElement>;
    fire: RefObject<HTMLElement>;
  };
};

export default function JetFighterRenderer({
  gameState,
  setGameState,
  controlElements,
}: Props) {
  const game = useMemo(() => new JetFighter(WIDTH, HEIGHT), []);
  game.state = gameState;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getUserAction = useJetFighterUserController(
    "arrowleft",
    "arrowright",
    "arrowup",
    controlElements.left,
    controlElements.right,
    controlElements.fire,
  );
  const getAIAction = useJetFighterAIController("/dqn.onnx", HEIGHT, WIDTH);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationRequest;
    game.reset();

    async function gameLoop() {
      if (gameState === GameState.START_SCREEN) {
        game.draw(ctx);
      } else {
        const { data } = game.draw(ctx);

        const userAction = getUserAction();
        const agentAction = await getAIAction(data);
        const actions: [PlaneAction, PlaneAction] = [agentAction, userAction];
        game.step(actions);
      }

      animationRequest = window.requestAnimationFrame(gameLoop);
    }

    animationRequest = window.requestAnimationFrame(gameLoop);

    return () => {
      window.cancelAnimationFrame(animationRequest);
    };
  }, [game, getUserAction, getAIAction, gameState]);

  const exit = useCallback(() => {
    game.reset();
    setGameState(GameState.START_SCREEN);
  }, [game, setGameState]);

  const start = useCallback(() => {
    setGameState(GameState.AI_PLAYER);
  }, [setGameState]);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        width={WIDTH}
        height={HEIGHT}
        ref={canvasRef}
        style={{
          backgroundColor: "#000000",
          width: "100%",
          imageRendering: "pixelated",
          display: "block",
          borderRadius: 4,
        }}
      />
      {gameState !== GameState.START_SCREEN && (
        <div
          onClick={exit}
          style={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: "50%",
            height: "20%",
            cursor: "pointer",
          }}
        ></div>
      )}
      {gameState === GameState.START_SCREEN && (
        <div
          onClick={start}
          style={{
            position: "absolute",
            top: "40%",
            left: "10%",
            height: "30%",
            width: "80%",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}
