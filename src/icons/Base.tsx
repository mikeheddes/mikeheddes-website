import styled from "styled-components";

const Svg = styled.svg.attrs<{ $boxWidth: number }>(({ $boxWidth }) => ({
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: `0 -410 ${$boxWidth} 2458`,
}))`
  fill: currentColor;
  color: inherit;
  user-select: none;
  height: 1.25em;
  vertical-align: text-bottom;
  transform-origin: center;
`;

export default function Base({ children, ...restProps }) {
  return (
    <Svg {...restProps}>
      <g transform="scale(1, -1) translate(0, -1638)">{children}</g>
    </Svg>
  );
}
