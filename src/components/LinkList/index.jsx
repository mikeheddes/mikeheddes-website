import React from 'react'
import PropTypes from 'prop-types'

import List, { Item } from './components'

const LinkList = ({ width, children, textAlign, links, ...restProps }) => (
  <List textAlign={textAlign} {...restProps}>
    {links.map(link => (
      <Item key={link.name || link.service} width={width}>
        {children(link)}
      </Item>
    ))}
  </List>
)

LinkList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  textAlign: PropTypes.oneOf(['right', 'left', 'center']),
  width: PropTypes.oneOf(['dynamic', 'fixed']),
}

LinkList.defaultProps = {
  textAlign: 'left',
  width: 'dynamic',
}

export default LinkList
