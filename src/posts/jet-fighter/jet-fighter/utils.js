export function getInEdgeArea(x, y, boundingDistance, frameSize) {
  const top = y <= 0 + boundingDistance
  const left = x <= 0 + boundingDistance
  const right = x >= frameSize.width - boundingDistance
  const bottom = y >= frameSize.height - boundingDistance
  return { top, left, right, bottom }
}

export function removeItem(arr, value) {
  const index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

export function lastOf(arr) {
  return arr[arr.length - 1]
}

export function argmax(values) {
  let maxIndex = 0
  let maxValue = values[0]

  for (let index = 1; index < values.length; index++) {
    if (maxValue < values[index]) {
      maxValue = values[index]
      maxIndex = index
    }
  }

  return [maxValue, maxIndex]
}

export function randint(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
