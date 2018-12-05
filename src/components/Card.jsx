import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from './Image'
import Link from './Link'
import space from '../styles/space'
import { fluidFont, ellipsis } from '../styles/mixins'
import { media } from '../styles/breakpoints'

const Title = styled.h2`
  ${({ size }) => size === 're' && fluidFont(16, 18)};
  ${({ size }) => size === 'md' && fluidFont(20, 22)};
  font-weight: 600;
  text-align: left;
  color: ${({ theme }) => theme.heading};
  margin-top: ${space.sm};
  ${ellipsis};

  ${media.sm`
    margin-top: ${space.re};
    font-weight: 700;
  `};
`

const Description = styled.p`
  ${({ size }) => size === 're' && `font-size: 15px;`};
  margin-top: ${space.xs};
  text-align: left;
  ${({ size }) => size === 'md' && fluidFont(16, 17)};
  color: ${({ theme }) => theme.textSubtle};
  ${ellipsis};

  ${media.sm`
    margin-top: ${space.sm};
  `};
`

const Card = ({
  title,
  image,
  children,
  shape,
  size,
  maxTitleLines,
  maxDescriptionLines,
  url,
}) => (
  <div>
    <Link to={url} variant="none">
      <Image fluid={image} shape={shape} />
      <Title size={size} maxlines={maxTitleLines}>
        {title}
      </Title>
    </Link>
    <Description size={size} maxlines={maxDescriptionLines}>
      {children}
    </Description>
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  maxTitleLines: PropTypes.number,
  maxDescriptionLines: PropTypes.number,
  image: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['re', 'md']),
  children: PropTypes.node,
  url: PropTypes.string.isRequired,
  shape: PropTypes.string,
}

Card.defaultProps = {
  maxTitleLines: 2,
  maxDescriptionLines: 3,
  children: null,
  size: 're',
  shape: 'screen',
}

export default Card
