import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { position } from 'polished'

const BackgroundImg = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  will-change: filter;
  transform-origin: center;
  transition: filter 1s ease .4s,
              opacity 1s ease 0s;

  ${props => props.isLoaded ?
    css`
      filter: blur(0px);
      opacity: 1;
    `:
    css`
      filter: blur(20px);
      opacity: 0;
    `
  }
`

BackgroundImg.propTypes = {
  srcSet: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default BackgroundImg
