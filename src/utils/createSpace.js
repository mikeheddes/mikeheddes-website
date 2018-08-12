import space from 'style/space';
import width, { widthUnits } from 'style/width';

export const createMargin = (top, right, bottom, left) => {
  let topPx = true;
  let rightPx = true;
  let bottomPx = true;
  let leftPx = true;
  if (typeof top === 'string') {
    if (top === 'auto') topPx = false;
    else top = space[top];
  }
  if (typeof right === 'string') {
    if (right === 'auto') rightPx = false;
    else right = space[right];
  }
  if (typeof bottom === 'string') {
    if (bottom === 'auto') bottomPx = false;
    else bottom = space[bottom];
  }
  if (typeof left === 'string') {
    if (left === 'auto') leftPx = false;
    else left = space[left];
  }
  return `${top}${topPx ? 'px' : ''} ${right}${rightPx ? 'px' : ''} ${bottom}${
    bottomPx ? 'px' : ''
  } ${left}${leftPx ? 'px' : ''}`;
};

export const createPadding = (y, x) => {
  if (typeof y === 'string') {
    y = space[y];
  }
  if (typeof x === 'string') {
    x = space[x];
  }
  return `${y}px ${x}px`;
};

export const createWidth = w => {
  if (typeof w === 'string') {
    return `${width[w]}${widthUnits[w]}`;
  }
  return `${w}px`;
};
