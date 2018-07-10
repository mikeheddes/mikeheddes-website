import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { contentTypes } from 'actions/utils';


export default class MusicItem extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        contentType: PropTypes.oneOf(contentTypes).isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {

  };

  componentDidMount() {

  }

  render() {
    const { match } = this.props;
    return (
      <h1 style={{ paddingTop: 100, textAlign: 'center' }}>{match.params.id}</h1>
    );
  }
}
