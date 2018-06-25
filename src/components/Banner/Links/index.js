import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { dayColors } from 'utils/colors';
import Wrapper from './Wrapper';
import HorizontalScrol from 'components/HorizontalScrol';
import Link from 'components/Link';

class Links extends Component {
  render() {
    const { links } = this.props;
    return (
      <HorizontalScrol media="phoneOnly">
        <Wrapper>
          {
            links && links.map(link => (
              <li key={link.name}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))
          }
        </Wrapper>
      </HorizontalScrol>
    )
  }
}

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
}

export default Links
