import styled from 'styled-components';

export default styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ radius }) => radius}px;
  object-fit: cover;
  object-position: center center;
  filter: blur(20px);
  opacity: ${({ isVisible }) => Number(isVisible)};
  transition: opacity 1.25s ease-in 0.2s;
`;
