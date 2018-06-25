import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { space, spaces } from 'utils/sizes'
import { grays, gradient } from 'utils/colors'
import { media, fluidText } from 'utils/mixins'

const Video = styled.video`
  position: absolute;
  object-fit: contain;
  object-position: center;
  top: -20px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 95%;
  filter: blur(30px) saturate(1.15);

  ${media.tabletPortrait(css`
    filter: blur(50px) saturate(1.15);
  `)}

`

export default Video
