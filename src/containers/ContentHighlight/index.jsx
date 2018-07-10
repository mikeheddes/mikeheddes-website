import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { transparentize as fade } from 'polished';
import PropTypes from 'prop-types';
// import { Spring } from 'react-spring';
// import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';
// import lodash from 'lodash';
import Blur from 'components/Blur';
import { highlightTypes } from 'actions/highlightContent';
import { contentTypes } from 'actions/utils';

import {
  ComponentWrapper,
  ContentWrapper,
} from './components';
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
    dontFetch: PropTypes.bool,
    highlightType: PropTypes.oneOf(highlightTypes).isRequired,
    eyebrow: PropTypes.node,
    getContentIfNeeded: PropTypes.func.isRequired,
    actionTitle: PropTypes.node.isRequired,
    externalActionTitle: PropTypes.node,
    marginTop: PropTypes.bool,
    marginBottom: PropTypes.bool,
  }

  static defaultProps = {
    content: undefined,
    dontFetch: false,
    eyebrow: undefined,
    externalActionTitle: undefined,
    marginTop: undefined,
    marginBottom: undefined,
  }

  componentDidMount() {
    const {
      getContentIfNeeded, contentType, highlightType, dontFetch,
    } = this.props;
    if (!dontFetch) getContentIfNeeded(contentType, highlightType);
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
    return (
      <ThemeProvider theme={this.setTheme}>
        <ComponentWrapper
          marginTop={marginTop}
          marginBottom={marginBottom}
        >
          {content && content.heroImage && content.heroImage.placeholder
            && <Blur src={content.heroImage.placeholder} />
          }
          {/* {content && content.heroImage.placeholder &&
            <Spring
              impl={TimingAnimation}
              config={{ duration: 1000, easing: Easing.ease }}
              to={{ radius: this.state.toggle ? 1 : 100 }}
            >
              {lodash.throttle(styles => <Blur
              radius={styles.radius}
              src={content.heroImage.src}
            />, 5)}
            </Spring>
          } */}
          <ContentWrapper
            marginLeft="auto"
            marginRight="auto"
            width="content"
            display="flex"
          >
            <ImageBox
              contentType={contentType}
              eyebrow={eyebrow}
              image={content && { ...content.heroImage, alt: content.title }}
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
        </ComponentWrapper>
      </ThemeProvider>
    );
  }
}

export default mapState(ContentHighlight);
