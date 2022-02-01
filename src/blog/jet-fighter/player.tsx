import { ReactNode, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styled, { css } from "styled-components";
import { darken, lighten, transparentize as fade } from "polished";

import { screen } from "../../styles/breakpoints";
import { GameState } from "./game";
import {
  grays,
  darkTheme,
  lightTheme,
  themeSelector,
} from "../../styles/colors";
import { absoluteSize } from "../../styles";

const ClientSideOnlyJetFighter = dynamic(() => import("./renderer"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "relative",
        backgroundColor: "#000000",
        width: "100%",
        paddingBottom: "75%",
        display: "block",
        borderRadius: 4,
      }}
    />
  ),
});

const BaseColor = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  max-width: calc(480px + 40px);
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.4) inset,
    0 2px 2px rgba(255, 255, 255, 0.4) inset,
    0 8px 40px ${fade(0.8, darken(0.5, lightTheme.red))};
  background-color: var(--red);
  background: ${`linear-gradient(${lighten(0.01, lightTheme.red)}, ${darken(
    0.01,
    lightTheme.red
  )})`};

  @media ${screen.sm} {
    max-width: calc(480px + 60px);
    padding: 30px;
    border-radius: 30px;
  }

  @media ${themeSelector.dark} {
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.4) inset,
      0 2px 2px rgba(255, 255, 255, 0.4) inset,
      0 8px 40px ${fade(0.8, darken(0.5, darkTheme.red))};
    background: ${`linear-gradient(${lighten(0.01, darkTheme.red)}, ${darken(
      0.01,
      darkTheme.red
    )})`};
  }
`;

const Texture = styled.div`
  ${absoluteSize};
  border-radius: 20px;
  /* Noise background from: https://grainy-gradients.vercel.app/ */
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='8.27' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  filter: saturate(0) brightness(0.7);
  mix-blend-mode: luminosity;
  opacity: 0.8;

  @media ${screen.sm} {
    border-radius: 30px;
  }
`;

function ConsoleSkin({ children }: { children: ReactNode }) {
  return (
    <BaseColor>
      <Texture />
      {children}
    </BaseColor>
  );
}

const KeyWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 8px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${screen.sm} {
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const Key = styled.div<{ lower?: boolean }>`
  border-radius: 400px;
  color: var(--gray-200);
  width: 48px;
  height: 48px;
  font-size: 17px;
  font-weight: 500;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  user-select: none;
  box-shadow: 0 -2px 2px ${() => darken(0.2, grays["700"])} inset,
    0px 2px 2px ${() => lighten(0.2, grays["700"])} inset,
    0 3px 6px rgba(0, 0, 0, 0.4);
  background-color: var(--gray-700);
  background: ${() =>
    `linear-gradient(${lighten(0.1, grays["700"])}, ${darken(
      0.1,
      grays["700"]
    )})`};
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  ${({ lower = false }) => lower && `margin-top: 42px;`}

  :active {
    background: ${() =>
      `linear-gradient(${lighten(0.15, grays["700"])}, ${darken(
        0.05,
        grays["700"]
      )})`};
  }
`;

const GameWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--tint-red);
  overflow: auto;

  @media ${screen.sm} {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media ${screen.md} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

function GamePlayer() {
  const [gameState, setGameState] = useState(GameState.START_SCREEN);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const fireRef = useRef<HTMLDivElement>(null);

  return (
    <GameWrapper>
      <ConsoleSkin>
        <ClientSideOnlyJetFighter
          setGameState={setGameState}
          gameState={gameState}
          controlElements={{
            left: leftRef,
            right: rightRef,
            fire: fireRef,
          }}
        />
        <KeyWrapper>
          <Key ref={leftRef} lower>
            ←
          </Key>
          <Key ref={fireRef}>↑</Key>
          <Key ref={rightRef} lower>
            →
          </Key>
        </KeyWrapper>
      </ConsoleSkin>
    </GameWrapper>
  );
}

export default GamePlayer;
