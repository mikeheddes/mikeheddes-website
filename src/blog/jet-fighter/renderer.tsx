import { useMemo, useRef, useEffect, useCallback } from "react";

import { JetFighter, GameState, PlaneAction } from "./game";
import {
  useJetFighterAIController,
  useJetFighterUserController,
} from "./game/controls";

const WIDTH = 240;
const HEIGHT = 180;

export default function JetFighterRenderer({ gameState, setGameState }) {
  const game = useMemo(() => new JetFighter(WIDTH, HEIGHT), []);
  game.state = gameState;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getUserAction = useJetFighterUserController(
    "arrowleft",
    "arrowright",
    "arrowup"
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
            left: 190,
            width: 100,
            height: 50,
            cursor: "pointer",
          }}
        ></div>
      )}
      {gameState === GameState.START_SCREEN && (
        <div
          onClick={start}
          style={{
            position: "absolute",
            top: 165,
            left: 80,
            height: 50,
            width: 320,
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}