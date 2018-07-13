import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Markdown from 'components/Markdown';
import Section from 'components/Section';

const Wrapper = Section.extend`
  min-height: calc(100vh - 100px);
`;

const NoMatch = ({ location }) => (
  <Wrapper>
    <Markdown textAlign="center" width="text" marginLeft="auto" marginRight="auto" overflow="auto">
      {`# 404\n*${
        location.pathname
      }* is not available. Try something else.\n\nOr go to the [home page](/)\n\n<script>alert('hi');</script>`}
    </Markdown>
  </Wrapper>
);

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(NoMatch);
