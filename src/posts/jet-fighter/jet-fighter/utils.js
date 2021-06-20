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
