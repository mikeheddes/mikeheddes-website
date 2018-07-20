import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'components/Link';
import List, { Item } from './components';

const LinkList = (props) => {
  const { width, children, textAlign } = props;
  return (
    <List textAlign={textAlign}>
      {
        children.map(component => (
          <Item key={component.key} width={width}>
            {component}
          </Item>
        ))
      }
    </List>
  );
};

LinkList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
  })).isRequired,
  textAlign: PropTypes.oneOf(['right', 'left', 'center']),
  width: PropTypes.oneOf(['dynamic', 'fixed']),
};

LinkList.defaultProps = {
  textAlign: 'left',
  width: 'dynamic',
};

export default LinkList;
