import React, { useMemo, useRef, useEffect } from 'react'

import { JetFighter } from './jet-fighter'
import {
  useJetFighterAIController,
  useJetFighterUserController,
} from './jet-fighter/controls'

const WIDTH = 240
const HEIGHT = 180

export default function JetFighterRenderer({ dqnFileURL, isMultiplayer }) {
  const game = useMemo(() => new JetFighter(WIDTH, HEIGHT), [])
  const canvasRef = useRef(null)
  const getUser1Action = useJetFighterUserController('a', 'd', 'w')
  const getUser2Action = useJetFighterUserController(
    'arrowleft',
    'arrowright',
    'arrowup'
  )
  const [getAIAction, isAILoading] = useJetFighterAIController(
    dqnFileURL,
    HEIGHT,
    WIDTH
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    window.canvas = canvas
    canvas.width = WIDTH
    canvas.height = HEIGHT

    let animationRequest

    game.reset()

    async function gameLoop() {
      const { data } = game.draw(ctx)

      const user2Action = getUser2Action()

      let actions
      if (isMultiplayer) {
        const user1Action = getUser1Action()
        actions = [user1Action, user2Action]
      } else {
        const agentAction = await getAIAction(data)
        actions = [agentAction, user2Action]
      }

      game.step(actions)

      animationRequest = window.requestAnimationFrame(gameLoop)
    }

    animationRequest = window.requestAnimationFrame(gameLoop)

    return () => {
      window.cancelAnimationFrame(animationRequest)
    }
  }, [game, getUser1Action, getUser2Action, getAIAction, isMultiplayer])

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: '#000000',
        width: '100%',
        imageRendering: 'pixelated',
      }}
    />
  )
}
