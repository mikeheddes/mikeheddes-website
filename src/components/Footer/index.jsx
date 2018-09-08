import React from 'react'

import Wrapper from './Wrapper'
import Copyright from './Copyright'

export default () => (
  <Wrapper>
    <Copyright>
      <p>
        Copyright © {`${new Date().getFullYear()} `}
        Mike Heddes. All rights reserved.
      </p>
    </Copyright>
  </Wrapper>
)
