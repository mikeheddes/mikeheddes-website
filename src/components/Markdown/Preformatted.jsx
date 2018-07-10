import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'components/HighlightCode';


const Preformatted = (props) => {
  const { children, ...other } = props;
  return (
    <Highlight className={children.props.className} {...other}>
      {children.props.children}
    </Highlight>
  );
};

Preformatted.propTypes = {
  children: PropTypes.node.isRequired,
  // className: PropTypes.string,
};

Preformatted.defaultProps = {
  // className: '',
};

export default Preformatted;
