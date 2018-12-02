import React from 'react'

import SVG from './SVG'

export default () => (
  <SVG viewBox="0 0 60 100">
    <g>
      <path
        d="M7,42 L30,18 L53,42"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      <line x1="30" y1="85" x2="30" y2="18" />
    </g>
  </SVG>
)
