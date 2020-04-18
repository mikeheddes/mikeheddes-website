// Star format
// [R, i, Omega, Phi]
// n is equation 6 from GTOC X, The 10th Global Trajectory Optimisation Competition:
// https://gtocx.jpl.nasa.gov/media/gtocX_problem_stmt.pdf

export const VALUES_PER_STAR = 4
export const BYTES_PER_STAR = Float32Array.BYTES_PER_ELEMENT * VALUES_PER_STAR
export const NUMBER_OF_STARS = 100001

export const KPC = 30856775814671900 // in km
export const MYR = 1e6 // in yr
export const YR = 31557600 // in s
export const R_MIN = 2 // in kpc
export const R_MAX = 32 // in kpc
export const S_R = 1.0 // in kpc
export const S_PHI = (2 * Math.PI) / 32 // in rad
export const T_FINAL = 90 // in Myr

export const KMS_TO_KPCMYR = (YR * MYR) / KPC
export const KPCMYR_TO_KMS = 1.0 / KMS_TO_KPCMYR
export const DEG_TO_RAD = Math.PI / 180
export const RAD_TO_DEG = 1 / DEG_TO_RAD

export const k8 = -1.94316e-12 // (km/s)^-1 / KPC^8
export const k7 = 3.7516e-10 // (km/s)^-1 / KPC^7
export const k6 = -2.70559e-8 // (km/s)^-1 / KPC^6
export const k5 = 9.70521e-7 // (km/s)^-1 / KPC^5
export const k4 = -1.88428e-5 // (km/s)^-1 / KPC^4
export const k3 = 0.000198502 // (km/s)^-1 / KPC^3
export const k2 = -0.0010625 // (km/s)^-1 / KPC^2
export const k1 = 0.0023821 // (km/s)^-1 / KPC
export const k0 = 0.00287729 // (km/s)^-1

export const getAngularVelocity = (radius) => {
  const circular_velocity =
    1 /
    (k0 +
      k1 * radius +
      k2 * radius ** 2 +
      k3 * radius ** 3 +
      k4 * radius ** 4 +
      k5 * radius ** 5 +
      k6 * radius ** 6 +
      k7 * radius ** 7 +
      k8 * radius ** 8)

  return (circular_velocity / radius) * KMS_TO_KPCMYR
}

export const getPositionsAtTime = (time) => (star) => {
  const nt = star[4] * time
  const comega = Math.cos(star[2])
  const cnti = Math.cos(nt + star[3])
  const somega = Math.sin(star[2])
  const snti = Math.sin(nt + star[3])
  const ci = Math.cos(star[1])
  const si = Math.sin(star[1])

  const x = star[0] * (cnti * comega - snti * ci * somega)
  const y = star[0] * (cnti * somega + snti * ci * comega)
  const z = star[0] * (snti * si)

  return new Float32Array([x, y, z])
}

function streamAsyncIterator(stream) {
  // Get a lock on the stream:
  const reader = stream.getReader()

  return {
    next() {
      // Stream reads already resolve with {done, value}, so
      // we can just call read:
      return reader.read()
    },
    return() {
      // Release the lock if the iterator terminates.
      reader.releaseLock()

      if (stream.cancel) {
        stream.cancel()
      }

      return
    },
    // for-await calls this on whatever it's passed, so
    // iterators tend to return themselves.
    [Symbol.asyncIterator]() {
      return this
    },
  }
}

export default async function* starsAsyncIterator(starsURL) {
  const response = await fetch(starsURL)

  let queue = new Uint8Array(0)

  for await (const chunk of streamAsyncIterator(response.body)) {
    const combinedChunk = new Uint8Array(queue.length + chunk.length)
    combinedChunk.set(queue)
    combinedChunk.set(chunk, queue.length)

    const leftover = combinedChunk.byteLength % BYTES_PER_STAR
    const num_stars = (combinedChunk.byteLength - leftover) / BYTES_PER_STAR

    const combinedChunkF32 = new Float32Array(
      combinedChunk.buffer,
      0,
      num_stars * Float32Array.BYTES_PER_ELEMENT
    )

    for (let index = 0; index < num_stars; index++) {
      const starView = combinedChunkF32.subarray(
        index * VALUES_PER_STAR,
        (index + 1) * VALUES_PER_STAR
      )

      const star = new Float32Array(starView)
      yield star
    }

    queue = combinedChunk.slice(combinedChunk.length - leftover)
  }
}
