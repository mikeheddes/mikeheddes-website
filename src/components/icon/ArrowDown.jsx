import React from 'react'

import SVG from './SVG'

export default () => (
  <SVG viewBox="0 0 60 100">
    <g>
      <path
        d="M53,52.5 L30,77 L7,52.5"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      <line x1="30" y1="10" x2="30" y2="77" />
    </g>
  </SVG>
)
