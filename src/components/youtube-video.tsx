import { useState, useRef, useEffect } from "react";
import YouTubePlayer from "youtube-player";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";

import { screen } from "../styles/breakpoints";
import Play from "../icons/Play/fill";
import { fluidFont, absoluteSize } from "../styles";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--surface-subtle);
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 1px 1.4px rgba(0, 0, 0, 0.02),
    0px 2.5px 3.3px rgba(0, 0, 0, 0.028), 0px 4.6px 6.3px rgba(0, 0, 0, 0.035),
    0px 8.3px 11.2px rgba(0, 0, 0, 0.042), 0px 15.5px 20.9px rgba(0, 0, 0, 0.05),
    0px 37px 50px rgba(0, 0, 0, 0.07);
`;

const IconWrapper = styled.div`
  ${absoluteSize};
  display: flex;
  align-items: center;
  justify-content: center;
  ${fluidFont(22, 24)};
  color: white;
`;

const IconCircle = styled.div`
  border-radius: 100%;
  backdrop-filter: blur(24px) brightness(0.92) saturate(1.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  @media ${screen.sm} {
    width: 62px;
    height: 62px;
  }

  @media ${screen.md} {
    width: 64px;
    height: 64px;
  }
`;

const Filler = styled.div<{ ratio: number }>`
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio * 100}%;
`;

const Player = styled.div`
  ${absoluteSize};
  border: none;
`;

const Thumbnail = styled.img`
  ${absoluteSize};
  object-fit: cover;
  object-position: 50% 50%;
`;

const Video = ({
  src: videoId,
  controls,
  mute,
  width = 16,
  height = 10,
  ...restProps
}) => {
  const playerElement = useRef<HTMLDivElement>(null);
  const player = useRef<YouTubePlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [{ scale }, setSpring] = useSpring(() => ({
    scale: 1,
    config: { response: 200 },
  }));

  useEffect(() => {
    player.current = YouTubePlayer(playerElement.current, {
      videoId,
      playerVars: {
        modestbranding: 1,
        controls: controls ? 1 : 0,
        mute: mute ? 1 : 0,
      },
    });
  }, [controls, mute, videoId]);

  const handleClick = () => {
    if (!playing) {
      setPlaying(true);
      player.current?.playVideo();
    }
  };

  const handleActive = () => setSpring.start({ scale: 0.92 });
  const handleInActive = () => setSpring.start({ scale: 1 });
  const transform = scale.to((v) => `scale(${v})`);

  return (
    <Wrapper {...restProps}>
      <Filler ratio={height / width} />
      <Player ref={playerElement} />
      {!playing && (
        <>
          <Thumbnail
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            srcSet={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg, https://img.youtube.com/vi/${videoId}/maxresdefault.jpg 2x`}
          />
          <IconWrapper
            onClick={handleClick}
            onMouseDown={handleActive}
            onTouchStart={handleActive}
            onMouseUp={handleInActive}
            onTouchEnd={handleInActive}
            onMouseLeave={handleInActive}
          >
            <IconCircle>
              <animated.span style={{ transform }}>
                <Play />
              </animated.span>
            </IconCircle>
          </IconWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Video;
