// Only keeps the first 3 of the 4 channel dimensions
export function preprocess(
  data: Uint8ClampedArray,
  H: number,
  W: number,
): Float32Array {
  const floatData = new Float32Array(3 * H * W);

  for (let c = 0; c < 3; c++) {
    for (let h = 0; h < H; h++) {
      for (let w = 0; w < W; w++) {
        const inIndex = c + h * 4 + w * H * 4;
        const outIndex = w + h * W + c * H * W;
        floatData[outIndex] = data[inIndex];
      }
    }
  }

  return floatData;
}
