import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from './components';

const LinkList = props => {
  const { width, children, textAlign, ...other } = props;
  return (
    <List textAlign={textAlign} {...other}>
      {children.map(component => (
        <Item key={component.key} width={width}>
          {component}
        </Item>
      ))}
    </List>
  );
};

LinkList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  textAlign: PropTypes.oneOf(['right', 'left', 'center']),
  width: PropTypes.oneOf(['dynamic', 'fixed']),
};

LinkList.defaultProps = {
  textAlign: 'left',
  width: 'dynamic',
};

export default LinkList;
