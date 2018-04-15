import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Hero from 'components/Hero';
import MDCompiler from 'utils/MarkDownSetup';
import BackgroundImg from './HeroBackgroundImg';
import GridWrapper from './GridWrapper';
import GridItem from './GridItem';
import GridImg from './GridImg';
import PageWrapper from './indexWrapper';
import config from './config';
import API from 'API';
import ForwardSVG from 'svg/Forward';
import ButtonA from './Button';
import Description from './Description';
import PreloadImg from './PreloadImg';

import banner from 'img/homeBanner.jpg';
import { NIGHT } from 'utils/colors';

const Button = ButtonA.withComponent(Link).extend`
  display: inline-block;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
`

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {article: undefined, music: undefined};
  }
  componentDidMount() {
    // API.getArticle().then(article => this.setState(pre => ({...pre, article: article})));
    // API.getMusic().then(article => this.setState(pre => ({...pre, music: article})));
  }
  render = () => {
    const { article, music } = this.state;
    return (
      <PageWrapper>
        <Hero extended img={banner.placeholder} theme={NIGHT}>
          <BackgroundImg srcSet={banner.srcSet} src={banner.src} onLoad={console.log("LOADED")} />
          <h2>{config.hero.eyebrow}</h2>
          <h1>{config.hero.title}</h1>
          <ButtonWrapper>
            <Button to="/about">More about me<ForwardSVG/></Button>
          </ButtonWrapper>
        </Hero>
        <Description>{config.description}</Description>
        <GridWrapper>
          { article ?
            [<GridImg key={1} url={article.heroImageUrl} gridOrder={1}/>,
            <GridItem article key={2} hColor={article.color.value} gridOrder={2}>
              <h3>Latest article</h3>
              <h1>{article.title}</h1>
              <h2>{article.description}</h2>
            </GridItem>] : null
          }
          { music ?
            [<GridImg key={4} url={music.heroImageUrl} gridOrder={4}/>,
            <GridItem music key={3} hColor={music.color.value} gridOrder={3}>
              <h3>Latest music</h3>
              <h1>{music.title}</h1>
              <h2>{music.artist}</h2>
            </GridItem>] : null
          }
        </GridWrapper>
      </PageWrapper>
    )
  }
}

export default HomePage
