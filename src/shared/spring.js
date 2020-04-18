const defaultSpringConfig = {
  mass: 1,
  response: 1000,
  damping: 1,
}

/**
 *
 * @param {Object} options
 * @param {number} [options.mass=1]
 * @param {number} [options.response=1000] in ms
 * @param {number} [options.damping=1]
 *
 * https://en.wikipedia.org/wiki/Damping_ratio
 * https://en.wikipedia.org/wiki/Harmonic_oscillator
 */
export const makeSpringConfig = (options = {}) => {
  const { response, damping, mass, ...restOptions } = {
    ...defaultSpringConfig,
    ...options,
  }

  const responseInSec = response / 1000
  const naturalFrequency = (2 * Math.PI) / responseInSec
  const criticalDamping = 2 * mass * naturalFrequency

  const tension = Math.pow(naturalFrequency, 2) * mass
  const friction = criticalDamping * damping

  return { mass, tension, friction, ...restOptions }
}

export const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time))
