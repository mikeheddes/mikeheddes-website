import React, { useCallback, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import { fluidFont } from '../../styles/mixins'
import PlayIcon from '../../icons/Play/fill'
import PauseIcon from '../../icons/Pause/fill'
import { makeSpringConfig } from '../../utils/spring'
import { useMeasure } from '../../hooks'

const PlayPauseButtonWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${fluidFont(32, 38)};
  color: var(--foreground);
  cursor: pointer;
  outline: none;
`

const ProgressIndicatorWrapper = styled.div`
  user-select: none;
  padding: 0 20px;

  ${up('sm')} {
    padding: 0 30px;
  }

  ${up('md')} {
    padding: 0 50px;
  }
`

const Timestamp = styled(animated.div)`
  ${fluidFont(12, 14)};
  font-weight: 500;
  color: hsla(0, 0%, var(--foreground-lightness), 0.5);
  font-feature-settings: 'liga' 1, 'case' 1, 'calt' 1, 'tnum' 1;
`

const LineClickArea = styled.div`
  position: absolute;
  width: 100%;
  height: 24px;
  top: -10px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ShadowLine = styled.div`
  position: relative;
  height: 4px;
  width: 100%;
  background-color: hsla(0, 0%, var(--foreground-lightness), 0.2);
  border-radius: 100px;
  overflow: hidden;
`

const ProgressLine = styled(animated.div)`
  background-color: var(--foreground);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: 0% 50%;
`

const Dragger = styled(animated.div)`
  position: absolute;
  top: -22px;
  left: -22px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  touch-action: none;

  :active {
    cursor: grabbing;
  }

  div {
    background-color: var(--foreground);
    border-radius: 100%;
    width: 12px;
    height: 12px;
  }
`

export const usePlayer = src => {
  const ref = useRef()
  const [durationMs, setDurationMs] = useState()
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [{ fraction }, setSpring] = useSpring(() => ({
    fraction: 0,
    immediate: true,
  }))

  useEffect(() => {
    const audioElement = ref.current

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleCanPlayThrough = () => setLoading(false)
    const handleDurationChange = () =>
      setDurationMs(ref.current.duration * 1000)
    const handleTimeUpdate = () => {
      const fraction = ref.current.currentTime / ref.current.duration
      if (isNaN(fraction)) return
      setSpring({ fraction })
    }
    window.audio = ref.current

    audioElement.addEventListener('play', handlePlay)
    audioElement.addEventListener('pause', handlePause)
    audioElement.addEventListener('canplaythrough', handleCanPlayThrough)
    audioElement.addEventListener('durationchange', handleDurationChange)
    audioElement.addEventListener('timeupdate', handleTimeUpdate)

    audioElement.src = src

    return () => {
      audioElement.removeEventListener('play', handlePlay)
      audioElement.removeEventListener('pause', handlePause)
      audioElement.removeEventListener('canplaythrough', handleCanPlayThrough)
      audioElement.removeEventListener('durationchange', handleDurationChange)
      audioElement.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [setSpring, src])

  const seekFraction = useCallback(
    fraction => {
      ref.current.currentTime = (fraction * durationMs) / 1000
      setSpring({ fraction })
    },
    [durationMs, setSpring]
  )

  const play = useCallback(() => ref.current.play(), [])
  const pause = useCallback(() => ref.current.pause(), [])

  return {
    bind: { ref },
    durationMs,
    fraction,
    play,
    isPlaying,
    pause,
    seekFraction,
    loading,
  }
}

export const PlayPauseButton = ({ isPlaying, play, pause, ...restProps }) => {
  const [{ scale }, set] = useSpring(() => ({
    scale: 1,
    config: makeSpringConfig({ response: 200 }),
  }))

  const handleActive = () => set({ scale: 0.9 })
  const handleInActive = () => set({ scale: 1 })
  const transform = scale.interpolate(v => `scale(${v})`)

  return (
    <PlayPauseButtonWrapper
      {...restProps}
      role="button"
      aria-pressed={isPlaying}
      onClick={isPlaying ? pause : play}
      onMouseDown={handleActive}
      onTouchStart={handleActive}
      onMouseUp={handleInActive}
      onTouchEnd={handleInActive}
      onMouseLeave={handleInActive}
    >
      <animated.div style={{ transform }}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </animated.div>
    </PlayPauseButtonWrapper>
  )
}

const timeFormat = new Intl.DateTimeFormat('en-US', {
  minute: '2-digit',
  second: '2-digit',
})

export const ProgressIndicator = ({
  fraction,
  durationMs = 0,
  seekFraction,
  isPlaying,
  play,
}) => {
  const [{ ref: shadowLineRef }, { left, width }] = useMeasure()
  const bindDrag = useDrag(({ xy: [x], active, memo = isPlaying }) => {
    let newFraction = (x - left) / width
    // clamp fraction between 0 and 1
    newFraction = Math.max(newFraction, 0)
    newFraction = Math.min(newFraction, 1)

    seekFraction(newFraction)

    if (!active && memo) play()

    return memo
  })

  const handleClickSeek = e => {
    const x = e.pageX

    let newFraction = (x - left) / width
    // clamp fraction between 0 and 1
    newFraction = Math.max(newFraction, 0)
    newFraction = Math.min(newFraction, 1)

    seekFraction(newFraction)
  }

  const timeIn = fraction.interpolate(f =>
    timeFormat.format(new Date(f * durationMs))
  )
  const timeTillEnd = fraction.interpolate(
    f => `-${timeFormat.format(new Date((1 - f) * durationMs))}`
  )

  const scale = fraction.interpolate(f => `scaleX(${f})`)
  const translate = fraction.interpolate(f => `translateX(${f * width}px)`)

  return (
    <ProgressIndicatorWrapper>
      <animated.div
        css="position: relative; margin-bottom: 12px; height: 4px;"
        role="progressbar"
        aria-valuenow={fraction.interpolate(f => Math.round(f * 100))}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <LineClickArea onClick={handleClickSeek}>
          <ShadowLine ref={shadowLineRef}>
            <ProgressLine style={{ transform: scale }} />
          </ShadowLine>
        </LineClickArea>
        <Dragger {...bindDrag()} style={{ transform: translate }}>
          <div />
        </Dragger>
      </animated.div>
      <div css="display: flex;">
        <Timestamp>{timeIn}</Timestamp>
        <div css="flex-grow: 1;" />
        <Timestamp>{timeTillEnd}</Timestamp>
      </div>
    </ProgressIndicatorWrapper>
  )
}
