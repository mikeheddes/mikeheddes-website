import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import Box from 'components/Box';
import { contentTypes } from 'actions/content';
import GridBox from 'components/GridBox';

import TitleRow from './TitleRow';
import mapState from './mapState';

class ContentGrid extends Component {
  static propTypes = {
    visibleContent: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ),
    children: PropTypes.func.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    contentType: PropTypes.oneOf(contentTypes).isRequired,
    setVisibility: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
    getContentIfNeeded: PropTypes.func.isRequired,
    title: PropTypes.string,
    phoneColumns: PropTypes.number.isRequired,
    tabletPortraitColumns: PropTypes.number.isRequired,
    tabletLandscapeColumns: PropTypes.number.isRequired,
    desktopColumns: PropTypes.number.isRequired,
  };

  static defaultProps = {
    visibleContent: [],
    filters: [],
    title: 'All',
  };

  componentDidMount() {
    const { getContentIfNeeded } = this.props;
    getContentIfNeeded();
  }

  render() {
    const {
      visibleContent,
      children,
      title,
      filters,
      setVisibility,
      activeFilter,
      phoneColumns,
      tabletPortraitColumns,
      tabletLandscapeColumns,
      desktopColumns,
    } = this.props;
    return (
      <Section noBackground>
        <Box width="content" marginLeft="auto" marginRight="auto">
          <TitleRow
            title={title}
            filters={filters}
            setVisibility={setVisibility}
            activeFilter={activeFilter}
          />
          <GridBox
            phoneColumns={phoneColumns}
            tabletPortraitColumns={tabletPortraitColumns}
            tabletLandscapeColumns={tabletLandscapeColumns}
            desktopColumns={desktopColumns}
          >
            {children(visibleContent)}
          </GridBox>
        </Box>
      </Section>
    );
  }
}

export default mapState(ContentGrid);
