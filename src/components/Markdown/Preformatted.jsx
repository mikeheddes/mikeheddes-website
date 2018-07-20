import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'components/HighlightCode';

const Preformatted = ({ children, className, ...other }) => (
  <Highlight language={className} {...other}>
    {children}
  </Highlight>
);

Preformatted.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Preformatted.defaultProps = {
  className: '',
};

export default Preformatted;
