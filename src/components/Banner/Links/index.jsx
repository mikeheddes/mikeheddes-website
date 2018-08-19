import React from 'react';
import PropTypes from 'prop-types';
import Wrapper, { Link } from './Wrapper';

const Links = props => {
  const { links } = props;
  return (
    <Wrapper>
      {links &&
        links.map(link => (
          <Link key={link.name} to={link.href} noInner>
            <li>{link.name}</li>
          </Link>
        ))}
    </Wrapper>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Links;
