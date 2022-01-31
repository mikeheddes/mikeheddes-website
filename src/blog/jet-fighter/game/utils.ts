export type FrameSize = { width: number; height: number };

export function getInEdgeArea(
  x: number,
  y: number,
  boundingDistance: number,
  frameSize: FrameSize
): {
  top: boolean;
  left: boolean;
  right: boolean;
  bottom: boolean;
} {
  const top = y <= 0 + boundingDistance;
  const left = x <= 0 + boundingDistance;
  const right = x >= frameSize.width - boundingDistance;
  const bottom = y >= frameSize.height - boundingDistance;

  return { top, left, right, bottom };
}

export function removeItem<T>(arr: T[], value: T): T[] {
  const index = arr.indexOf(value);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}

export function lastOf<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

export function argmax(values: number[] | Float32Array): {
  index: number;
  value: number;
} {
  let maxIndex = 0;
  let maxValue = values[0];

  for (let index = 1; index < values.length; index++) {
    if (maxValue < values[index]) {
      maxValue = values[index];
      maxIndex = index;
    }
  }

  return { value: maxValue, index: maxIndex };
}

export function randint(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
