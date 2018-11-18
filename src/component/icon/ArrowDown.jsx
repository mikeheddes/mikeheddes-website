import React from 'react'

import SVG from './SVG'

export default () => (
  <SVG viewBox="0 0 60 100">
    <g>
      <path
        d="M53,60.5 L30,85 L7,60.5"
        style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
      <line x1="30" y1="18" x2="30" y2="85" />
    </g>
  </SVG>
)
