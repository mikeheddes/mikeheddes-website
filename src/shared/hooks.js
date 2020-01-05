import polyfill from '@juggle/resize-observer'
import { useState, useRef, useEffect, useMemo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import useMeasureNoPolyfill from 'react-use-measure'

/**
 * Hook to remember and provide the previous value.
 *
 * @param {any} value Value to remember.
 * @returns {any} The previous value of `value` starting with `undefined`.
 */
export function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

/**
 * Hook to get the size and position of a DOM element.
 *
 * @typedef bounds
 * @type {object}
 * @property {number} left The x position of the left side of the element.
 * @property {number} top The y position of the top side of the element.
 * @property {number} width The width of the element.
 * @property {number} height The height of the element.
 *
 * @typedef ref
 * @type React.MutableRefObject<any>
 *
 * @returns {[{ ref }, bounds]}
 */
export const useMeasure = (options = {}) =>
  useMeasureNoPolyfill({ ...options, polyfill })

/**
 * Hook to see if a media query matches the current environment. If window is not defined it returns undefined.
 *
 * @function useMediaQuery
 * @param {string} query The CSS media query to evaluate.
 * @returns {boolean} Whether the media query matches the current environment.
 */
export const useMediaQuery = query => {
  const queryList = useMemo(() => {
    if (typeof window === 'undefined') return

    return window.matchMedia(query)
  }, [query])

  const [matches, setMatches] = useState(queryList && queryList.matches)

  useEffect(() => {
    if (!queryList) return

    const handleMatchesChange = event => {
      setMatches(event.matches)
    }

    queryList.addListener(handleMatchesChange)
    return () => {
      queryList.removeListener(handleMatchesChange)
    }
  }, [queryList])

  return queryList ? matches : undefined
}

export const useTheme = () => useContext(ThemeContext)

export const useResize = eventHandler => {
  const handlerRef = useRef(eventHandler)
  handlerRef.current = eventHandler

  useEffect(() => {
    let animationFrameId

    const onFrame = () => {
      if (handlerRef.current) handlerRef.current()
      animationFrameId = undefined
    }

    const onResize = () => {
      if (animationFrameId) return
      animationFrameId = requestAnimationFrame(onFrame)
    }

    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', onResize)
    }
  }, [])
}

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize())

  useResize(() => {
    setSize(getWindowSize())
  })

  return size
}
