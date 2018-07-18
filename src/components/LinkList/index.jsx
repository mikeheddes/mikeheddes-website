import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'components/Link';
import Wrapper, { Link } from './Wrapper';

const LinkList = (props) => {
  const { links, onSurface } = props;
  return (
    <Wrapper onSurface={onSurface}>
      {
        links && links.map(link => (
          <Link key={link.name} to={link.url} noInner noFontSize onSurface={onSurface}>
            <li>
              {link.name}
            </li>
          </Link>
        ))
      }
    </Wrapper>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  onSurface: PropTypes.bool,
};

LinkList.defaultProps = {
  onSurface: false,
};

export default LinkList;
