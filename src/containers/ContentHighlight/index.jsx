import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { transparentize as fade } from 'polished';
import PropTypes from 'prop-types';
// import { Spring } from 'react-spring';
// import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';
// import lodash from 'lodash';
import Blur from 'components/Blur';
import { highlightTypes, contentTypes } from 'actions/content';
import Section from 'components/Section';

import { ContentWrapper } from './components';
import ImageBox from './ImageBox';
import TextBox from './TextBox';
import mapState from './mapState';

class ContentHighlight extends Component {
  static propTypes = {
    content: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
    contentType: PropTypes.oneOf(contentTypes).isRequired,
    noFetch: PropTypes.bool,
    highlightType: PropTypes.oneOf(highlightTypes).isRequired,
    eyebrow: PropTypes.node,
    getContent: PropTypes.func.isRequired,
    actionTitle: PropTypes.node.isRequired,
    externalActionTitle: PropTypes.node,
    marginTop: PropTypes.bool,
    marginBottom: PropTypes.bool,
  };

  static defaultProps = {
    content: undefined,
    noFetch: false,
    eyebrow: undefined,
    externalActionTitle: undefined,
    marginTop: undefined,
    marginBottom: undefined,
  };

  componentDidMount() {
    const {
      getContent, contentType, highlightType, noFetch,
    } = this.props;
    if (!noFetch) getContent(contentType, highlightType);
  }

  setTheme = theme => ({
    ...theme,
    link: fade(0.3, theme.title),
  });

  render() {
    const {
      content,
      eyebrow,
      marginTop,
      marginBottom,
      externalActionTitle,
      contentType,
      actionTitle,
    } = this.props;
    const placeholder = content
      && ((content.imageCover && content.imageCover.placeholder)
        || (content.heroImage && content.heroImage.placeholder));
    return (
      <ThemeProvider theme={this.setTheme}>
        <Section marginTop={marginTop} marginBottom={marginBottom} position="relative" background>
          {placeholder && <Blur src={placeholder} opacity={0.6} />}
          <ContentWrapper
            marginLeft="auto"
            marginRight="auto"
            width="content"
            display="flex"
            position="relative"
          >
            <ImageBox
              contentType={contentType}
              eyebrow={eyebrow}
              image={
                content && { ...(content.imageCover || content.heroImage), alt: content.title }
              }
              to={content && `/${contentType}/${content.id}`}
            />
            <TextBox
              actionTitle={actionTitle}
              artist={content && content.artist}
              contentType={contentType}
              eyebrow={eyebrow}
              externalActionTitle={externalActionTitle}
              externalUrls={content && content.externalUrls}
              title={content && content.title}
              url={content && `/${contentType}/${content.id}`}
            />
          </ContentWrapper>
        </Section>
      </ThemeProvider>
    );
  }
}

export default mapState(ContentHighlight);
