import { css } from 'styled-components';

export const spaces = {
  xs: 2,
  s: 5,
  r: 10,
  xr: 15,
  m: 20,
  xm: 30,
  l: 50,
  xl: 80,
  M: 130,
  xM: 210,
  G: 340,
  xG: 550,
}

export const space = (type, top, right=null, bottom=null, left=null) => {
  if (typeof top == 'string') top = spaces[top];
  if (typeof right == 'string') right = spaces[right];
  if (typeof bottom == 'string') bottom = spaces[bottom];
  if (typeof left == 'string') left = spaces[left];
  return css`
    ${type}: ${top}px ${right}${right ? 'px' : null} ${bottom}${bottom ? 'px' : null} ${left}${left ? 'px' : null};
  `
}

export const radius = {
  xs: 2,
  s: 4,
  r: 6,
  xr: 8,
  m: 12,
  app: 26, //in procent
}

export const footerHeight = 50;
