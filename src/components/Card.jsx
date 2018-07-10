import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'components/Image';
import space from 'style/space';
import { media, fluidText } from 'utils/mixins';
import Link from 'components/Link';

const Title = styled.h2`
  ${({ size }) => size === 'r' && fluidText(16, 18)};
  ${({ size }) => size === 'm' && fluidText(20, 22)};
  font-weight: 700;
  color: ${({ theme }) => theme.heading};
  margin-top: ${space.r}px;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.phoneOnly(css`
    margin-top: ${space.s}px;
    font-weight: 600;
  `)};
`;

const Description = styled.p`
  ${({ size }) => size === 'r'
    && css`
      font-size: 15px;
    `};
  ${({ size }) => size === 'm' && fluidText(16, 17)};
  margin-top: ${space.s}px;
  color: ${({ theme }) => theme.textSubtle};
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.phoneOnly(css`
    margin-top: ${space.xs}px;
  `)};
`;

const Card = (props) => {
  const {
    title,
    image,
    children,
    badge,
    square,
    wide,
    tall,
    size,
    maxTitleLines,
    maxDescriptionLines,
    to,
  } = props;
  const LinkWrapper = to ? Link : React.Fragment;
  return (
    <div>
      <LinkWrapper
        {...to && {
          noInner: true,
          noIcon: true,
          to,
          noTheme: true,
        }}
      >
        <Image {...image} rounded square={square} wide={wide} tall={tall} badge={badge} />
        <Title size={size} maxLines={maxTitleLines}>
          {title}
        </Title>
      </LinkWrapper>
      <Description size={size} maxLines={maxDescriptionLines}>
        {children}
      </Description>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  badge: PropTypes.string,
  maxTitleLines: PropTypes.number,
  maxDescriptionLines: PropTypes.number,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  square: PropTypes.bool,
  size: PropTypes.oneOf(['r', 'm']),
  children: PropTypes.node,
  wide: PropTypes.bool,
  tall: PropTypes.bool,
  to: PropTypes.string,
};

Card.defaultProps = {
  maxTitleLines: 2,
  badge: undefined,
  maxDescriptionLines: 3,
  children: null,
  square: false,
  size: 'r',
  wide: false,
  tall: false,
  to: undefined,
};

export default Card;
