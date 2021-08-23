import { useCallback, useEffect, useRef, useState } from 'react'
import { Tensor, InferenceSession } from 'onnxjs/dist/onnx.min.js'

import { PlaneAction } from './plane'
import { removeItem, lastOf, argmax, randint } from './utils'
import { preprocess } from './process'

export function useJetFighterUserController(leftKey, rightKey, fireKey) {
  const userActionsRef = useRef([PlaneAction.NOTHING])

  useEffect(() => {
    function setUserAction(event) {
      event.preventDefault()
      if (event.repeat) return

      const key = event.key.toLowerCase()
      let userActions = userActionsRef.current
      if (key === leftKey) {
        userActions.push(PlaneAction.ROTATE_LEFT)
      } else if (key === rightKey) {
        userActions.push(PlaneAction.ROTATE_RIGHT)
      } else if (key === fireKey) {
        userActions.push(PlaneAction.FIRE)
      }

      userActionsRef.current = userActions
    }

    function unsetUserAction(event) {
      const key = event.key.toLowerCase()
      let userActions = userActionsRef.current
      if (key === leftKey) {
        userActions = removeItem(userActions, PlaneAction.ROTATE_LEFT)
      } else if (key === rightKey) {
        userActions = removeItem(userActions, PlaneAction.ROTATE_RIGHT)
      } else if (key === fireKey) {
        userActions = removeItem(userActions, PlaneAction.FIRE)
      }

      userActionsRef.current = userActions
    }

    document.addEventListener('keydown', setUserAction)
    document.addEventListener('keyup', unsetUserAction)
    return () => {
      document.removeEventListener('keydown', setUserAction)
      document.removeEventListener('keyup', unsetUserAction)
    }
  }, [leftKey, rightKey, fireKey])

  const getAction = useCallback(() => {
    return lastOf(userActionsRef.current)
  }, [])

  return getAction
}

export function useJetFighterAIController(onnxModelURL, HEIGHT, WIDTH) {
  const [session, setSession] = useState(null)
  const aiActionRef = useRef(PlaneAction.NOTHING)
  const frameBufferRef = useRef([])
  const actionRepeatCounterRef = useRef(0)

  const loading = session === null

  useEffect(() => {
    let frameBuffer = []
    for (let index = 0; index < 4; index++) {
      const data = new Float32Array(1 * 3 * HEIGHT * WIDTH).fill(0.0)
      const tensor = new Tensor(data, 'float32', [1, 3, HEIGHT, WIDTH])
      frameBuffer.push(tensor)
    }
    frameBufferRef.current = frameBuffer
  }, [HEIGHT, WIDTH])

  useEffect(() => {
    let isMounted = true

    const session = new InferenceSession()

    session.loadModel(onnxModelURL).then(() => {
      if (!isMounted) return
      setSession(session)
    })

    return () => {
      isMounted = false
    }
  }, [onnxModelURL])

  const addFrameToBuffer = useCallback(
    (data) => {
      const floatData = preprocess(data, HEIGHT, WIDTH)
      const tensor = new Tensor(floatData, 'float32', [1, 3, HEIGHT, WIDTH])
      frameBufferRef.current.pop()
      frameBufferRef.current.push(tensor)
    },
    [HEIGHT, WIDTH]
  )

  const updateAction = useCallback(async () => {
    if (!loading) {
      const outputMap = await session.run(frameBufferRef.current)
      const output = outputMap.values().next().value.data
      const [qValue, action] = argmax(output)
      aiActionRef.current = action
    } else {
      aiActionRef.current = randint(0, 3)
    }
  }, [loading, session])

  const getAction = useCallback(
    async (data) => {
      addFrameToBuffer(data)

      if (actionRepeatCounterRef.current === 0) {
        await updateAction()
        actionRepeatCounterRef.current = randint(1, 4)
      }

      actionRepeatCounterRef.current--

      return aiActionRef.current
    },
    [addFrameToBuffer, updateAction]
  )

  return [getAction, loading]
}
