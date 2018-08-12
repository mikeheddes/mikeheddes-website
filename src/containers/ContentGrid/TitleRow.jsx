import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

import { TabRow, Tab, HorizontalScroll, Title } from './Components';

const TitleRow = props => {
  const { activeFilter, filters, title, setVisibility } = props;
  return (
    <Box position="relative">
      <Title>{title}</Title>
      {filters.length > 0 && (
        <HorizontalScroll media="phoneOnly">
          <TabRow withScroll>
            {filters.map(f => (
              <Tab
                key={f.name}
                onClick={() => setVisibility(f.action)}
                active={f.action === activeFilter}
              >
                {f.name}
              </Tab>
            ))}
          </TabRow>
        </HorizontalScroll>
      )}
    </Box>
  );
};

TitleRow.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
    })
  ).isRequired,
  setVisibility: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
};

export default TitleRow;
