import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { transparentize as fade } from 'polished';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';
import lodash from 'lodash';
import mapState from './mapState';

import TextWrapper from './TextWrapper';
import {
  BackgroundImage,
  ImageWrapper,
  CompWrapper,
  ContWrapper,
} from './components';
import Blur from 'containers/Blur';
import Badge from 'components/Badge';
import Image from 'components/Image';
import Link from 'components/Link';
import { highlightTypes } from 'actions/highlightContent';
import { contentTypes } from 'actions/utils';
import { grays } from 'utils/colors';
import { spaces } from 'utils/sizes';


class ContentHighlight extends Component {

  static propTypes = {
    content: PropTypes.object,
    contentType: PropTypes.oneOf(contentTypes).isRequired,
    highlightType: PropTypes.oneOf(highlightTypes).isRequired,
    eyebrow: PropTypes.node,
    getContentIfNeeded: PropTypes.func.isRequired,
    actionTitle: PropTypes.node.isRequired,
    externalActionTitle: PropTypes.node,
    marginTop: PropTypes.bool,
    marginBottom: PropTypes.bool,
  }

  static defaultProps = {

  }

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired
    }).isRequired
  };

  state = {
    toggle: false,
  }

  componentWillMount() {
    const { getContentIfNeeded, contentType, highlightType } = this.props;
    getContentIfNeeded(contentType, highlightType);
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(prevState => ({...prevState, toggle: !prevState.toggle}))
  //   }, 5000);
  // }

  onImageClick = (to) => {
    this.context.router.history.push(to)
  }

  setTheme = theme => ({
    ...theme,
    link: fade(.3, theme.title),
  });

  render() {
    const { content, eyebrow, marginTop, marginBottom, externalActionTitle, contentType } = this.props;
    return (
      <ThemeProvider theme={this.setTheme}>
        <CompWrapper
          marginTop={marginTop}
          marginBottom={marginBottom}
        >
          {content && content.heroImage.placeholder &&
            <Blur src={content.heroImage.placeholder}/>
          }
          {/* {content && content.heroImage.placeholder &&
            <Spring
              impl={TimingAnimation}
              config={{ duration: 1000, easing: Easing.ease }}
              to={{ radius: this.state.toggle ? 1 : 100 }}
            >
              {lodash.throttle(styles => <Blur radius={styles.radius} src={content.heroImage.src}/>, 5)}
            </Spring>
          } */}
          <ContWrapper
            marginLeft="auto"
            marginRight="auto"
            width="content"
            display="flex"
          >
            <ImageWrapper>
              <Badge
                fillType="fade"
                size="l"
                marginRight="auto"
                marginBottom="m"
              >{eyebrow}</Badge>
              <Image
                {...content ? content.heroImage : {}}
                rounded
                zDepth={6}
                onClick={content && (() => this.onImageClick(content.url))}
              />
            </ImageWrapper>
            <TextWrapper contentType={contentType}>
              <Badge
                fillType="fade"
                size="l"
                marginRight="auto"
                marginBottom="m"
              >{eyebrow}</Badge>
              <h1>{content && content.title}</h1>
              {contentType == 'music' && content && <h2>{content.artist}</h2>}
              <Link to={content ? content.url : '#'}>
                {this.props.actionTitle}
              </Link>
              {content && content.externalUrls && content.externalUrls.length > 0 &&
                <Link to={content.externalUrls[0].url}>
                  {externalActionTitle}{content.externalUrls[0].service}
                </Link>
              }
            </TextWrapper>
          </ContWrapper>
        </CompWrapper>
      </ThemeProvider>
    )
  }
}

export default mapState(ContentHighlight);
