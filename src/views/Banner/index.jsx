import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  Eyebrow,
  Header,
  Link,
  LinkWrapper,
  ListItem,
} from './components'

const Banner = ({ children, eyebrow, actions }) => (
  <Wrapper>
    <Eyebrow>{eyebrow}</Eyebrow>
    <Header>{children}</Header>
    {actions && (
      <LinkWrapper>
        {actions.map(link => (
          <ListItem key={link.name}>
            <Link to={link.url} icon>
              {link.name}
            </Link>
          </ListItem>
        ))}
      </LinkWrapper>
    )}
  </Wrapper>
)

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  eyebrow: PropTypes.node.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

Banner.defaultProps = {
  actions: undefined,
}

export default Banner
