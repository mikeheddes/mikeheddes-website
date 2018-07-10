import React from 'react';
import PropTypes from 'prop-types';
import HorizontalScroll from 'components/HorizontalScroll';
// import Link from 'components/Link';
import Wrapper, { Link } from './Wrapper';

const Links = (props) => {
  const { links } = props;
  return (
    <HorizontalScroll media="phoneOnly">
      <Wrapper>
        {
          links && links.map(link => (
            <Link key={link.name} to={link.href} noInner>
              <li>
                {link.name}
              </li>
            </Link>
          ))
        }
      </Wrapper>
    </HorizontalScroll>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
};

export default Links;
