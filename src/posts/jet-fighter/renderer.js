import React, { useMemo, useRef, useEffect, useCallback } from 'react'

import { JetFighter, GameState } from './jet-fighter'
import {
  useJetFighterAIController,
  useJetFighterUserController,
} from './jet-fighter/controls'

const WIDTH = 240
const HEIGHT = 180

export default function JetFighterRenderer({
  dqnFileURL,
  gameState,
  setGameState,
}) {
  const game = useMemo(() => new JetFighter(WIDTH, HEIGHT), [])
  game.state = gameState

  const canvasRef = useRef(null)
  const getUser1Action = useJetFighterUserController('a', 'd', 'w')
  const getUser2Action = useJetFighterUserController(
    'arrowleft',
    'arrowright',
    'arrowup'
  )
  const getAIAction = useJetFighterAIController(dqnFileURL, HEIGHT, WIDTH)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    window.canvas = canvas
    canvas.width = WIDTH
    canvas.height = HEIGHT

    let animationRequest

    game.reset()

    async function gameLoop() {
      if (gameState === GameState.START_SCREEN) {
        game.draw(ctx)
      } else {
        const { data } = game.draw(ctx)

        const user2Action = getUser2Action()

        let actions
        if (gameState === GameState.MULTI_PLAYER) {
          const user1Action = getUser1Action()
          actions = [user1Action, user2Action]
        } else {
          const agentAction = await getAIAction(data)
          actions = [agentAction, user2Action]
        }

        game.step(actions)
      }

      animationRequest = window.requestAnimationFrame(gameLoop)
    }

    animationRequest = window.requestAnimationFrame(gameLoop)

    return () => {
      window.cancelAnimationFrame(animationRequest)
    }
  }, [game, getUser1Action, getUser2Action, getAIAction, gameState])

  const exitGame = useCallback(() => {
    game.reset()
    setGameState(GameState.START_SCREEN)
  }, [game, setGameState])

  const startAIGame = useCallback(() => {
    setGameState(GameState.AI_PLAYER)
  }, [setGameState])

  const startDualGame = useCallback(() => {
    setGameState(GameState.MULTI_PLAYER)
  }, [setGameState])

  return (
    <div style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: '#000000',
          width: '100%',
          imageRendering: 'pixelated',
          display: 'block',
        }}
      />
      {gameState !== GameState.START_SCREEN && (
        <div
          onClick={exitGame}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 100,
            height: 50,
            cursor: 'pointer',
          }}
        ></div>
      )}
      {gameState === GameState.START_SCREEN && (
        <>
          <div
            onClick={startAIGame}
            style={{
              position: 'absolute',
              top: 170,
              left: 80,
              height: 50,
              width: 160,
              cursor: 'pointer',
            }}
          ></div>
          <div
            onClick={startDualGame}
            style={{
              position: 'absolute',
              top: 170,
              left: 240,
              height: 50,
              width: 160,
              cursor: 'pointer',
            }}
          ></div>
        </>
      )}
    </div>
  )
}
