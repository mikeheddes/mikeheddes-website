import React, { useEffect, useCallback } from "react";
import styled, { css } from "styled-components";
import { useSpring, animated } from "react-spring";
import { darken, transparentize as fade } from "polished";

import { springConfig } from "../shared/spring";
import ProgressiveImage from "../shared/progressive-image";
import { screen } from "../styles/breakpoints";
import { absoluteSize } from "../styles";

const MAX_TILT = 5;
const SHADOW_ACCENT_DARKENING = 0.5;

const Wrapper = styled(animated.div)`
  position: relative;
  width: calc(100% - 30px);
  margin: 0 15px;
  border-radius: 4px;

  @media ${screen.sm} {
    width: 100%;
    margin: 0;
  }
`;

const SmallShadow = styled(animated.div)`
  ${absoluteSize};
  border-radius: 4px;
  ${(props) => {
    const shadowColor = darken(SHADOW_ACCENT_DARKENING, props.accent ?? "#000");
    return css`
      box-shadow: 0 0.2px 0.4px -2px ${fade(0.893, shadowColor)},
        0 0.5px 1px -2px ${fade(0.846, shadowColor)},
        0 1.2px 2.4px -2px ${fade(0.799, shadowColor)},
        0 4px 8px -2px ${fade(0.7, shadowColor)};
    `;
  }}
`;

const BigShadow = styled(animated.div)`
  ${absoluteSize};
  border-radius: 4px;
  ${(props) => {
    const shadowColor = darken(SHADOW_ACCENT_DARKENING, props.accent ?? "#000");
    return css`
      box-shadow: 0 1.1px 1.1px -12px ${fade(0.943, shadowColor)},
        0 2.7px 2.7px -12px ${fade(0.917, shadowColor)},
        0 5px 5px -12px ${fade(0.897, shadowColor)},
        0 8.9px 8.9px -12px ${fade(0.877, shadowColor)},
        0 16.7px 16.7px -12px ${fade(0.853, shadowColor)},
        0 40px 40px -12px ${fade(0.8, shadowColor)};
    `;
  }}
`;

const sharedClassName = css`
  border-radius: 4px;
`;

const trans = (x, y) =>
  `perspective(500px) rotateX(${-y * MAX_TILT}deg) rotateY(${x * MAX_TILT}deg)`;

export default function CoverImage({ isPlaying, ...restProps }) {
  const { transform, opacity } = useSpring({
    transform: isPlaying ? "scale(1)" : "scale(0.88)",
    opacity: isPlaying ? 1 : 0,
    immediate: false,
    config: springConfig({ response: 400 }),
  });

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: springConfig({ response: 500, damping: 0.5, mass: 1.5 }),
  }));

  const resetTilt = useCallback(() => set({ xy: [0, 0] }), [set]);
  const handleMouseOver = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      const box = event.target.getBoundingClientRect();

      const centerX = box.x + box.width / 2;
      const centerY = box.y + box.height / 2;

      const unitX = (clientX - centerX) / box.width;
      const unitY = (clientY - centerY) / box.height;

      set({ xy: [unitX, unitY] });
    },
    [set]
  );

  useEffect(() => {
    if (!isPlaying) {
      resetTilt();
    }
  }, [isPlaying, resetTilt]);

  const shadowAccentColor = restProps.image.colors?.lightMuted;

  return (
    <Wrapper
      style={{ transform }}
      onMouseMove={isPlaying ? handleMouseOver : undefined}
      onMouseLeave={resetTilt}
    >
      <animated.div style={{ transform: props.xy.to(trans) }}>
        <SmallShadow
          accent={shadowAccentColor}
          style={{ opacity: opacity.to((v) => 1 - v) }}
        />
        <BigShadow accent={shadowAccentColor} style={{ opacity }} />
        <ProgressiveImage css={sharedClassName} {...restProps} shape="square" />
      </animated.div>
    </Wrapper>
  );
}
