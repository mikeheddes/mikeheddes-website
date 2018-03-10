import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import faker from 'faker';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Hero from 'components/Hero';
import MDCompiler from 'utils/MarkDownSetup';
import GridWrapper from './GridWrapper';
import GridItem from './GridItem';
import GridImg from './GridImg';
import PageWrapper from './PageWrapper';
import config from './config';
import API from 'API';

import colorBanner from 'img/color-banner.png';

const Description = styled.p`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.42;
  padding: 80px 180px;
`

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {article: undefined, music: undefined};
  }
  componentDidMount() {
    API.getArticle().then(article => this.setState(pre => ({...pre, article: article})));
    API.getMusic().then(article => this.setState(pre => ({...pre, music: article})));
  }
  render() {
    const { article, music } = this.state;
    return (
      <PageWrapper>
        <Hero extended img={colorBanner}>
          <h2>{config.heroEyebrow}</h2>
          <h1>{config.heroTitle}</h1>
        </Hero>
        <Description>{config.description}</Description>
        <GridWrapper>
          { article ?
            [<GridImg key={1} url={article.heroImageUrl} order={1}/>,
            <GridItem key={2} hColor={article.color.value} order={2}>
              <h1>{article.title}</h1>
              <h2>{article.description}</h2>
            </GridItem>] : null
          }
          { music ?
            [<GridImg key={4} url={music.heroImageUrl} order={4}/>,
            <GridItem key={3} hColor={music.color.value} order={3}>
              <h1>{music.title}</h1>
              <h2>{music.description}</h2>
            </GridItem>] : null
          }
        </GridWrapper>
      </PageWrapper>
    )
  }
}

export default HomePage
