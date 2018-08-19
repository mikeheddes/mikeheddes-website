import space from 'style/space';
import width, { widthUnits } from 'style/width';

export const createMargin = (top, right, bottom, left) => {
  let topPx = true;
  let rightPx = true;
  let bottomPx = true;
  let leftPx = true;
  let t = top;
  let r = right;
  let b = bottom;
  let l = left;
  if (typeof top === 'string') {
    if (top === 'auto') topPx = false;
    else t = space[top];
  }
  if (typeof right === 'string') {
    if (right === 'auto') rightPx = false;
    else r = space[right];
  }
  if (typeof bottom === 'string') {
    if (bottom === 'auto') bottomPx = false;
    else b = space[bottom];
  }
  if (typeof left === 'string') {
    if (left === 'auto') leftPx = false;
    else l = space[left];
  }
  return `${t}${topPx ? 'px' : ''} ${r}${rightPx ? 'px' : ''} ${b}${
    bottomPx ? 'px' : ''
  } ${l}${leftPx ? 'px' : ''}`;
};

export const createPadding = (y, x) => {
  let yi = y;
  let xi = x;
  if (typeof y === 'string') yi = space[y];
  if (typeof x === 'string') xi = space[x];
  return `${yi}px ${xi}px`;
};

export const createWidth = w => {
  if (typeof w === 'string') {
    return `${width[w]}${widthUnits[w]}`;
  }
  return `${w}px`;
};
