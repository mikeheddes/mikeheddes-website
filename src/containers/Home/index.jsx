import React from 'react';
import ContentHighlight from 'containers/ContentHighlight/Loadable';
import Box from 'components/Box';
import Section from 'components/Section';

import Hero from './Hero';
import Description from './Description';


const description = 'This site is the place where I showcase and host my projects. I try to make the content fun and educational so it becomes less of a boring portfolio. The projects are mostly coding, design and music related but not limited to them.';

export default () => (
  <React.Fragment>
    <Hero />
    <Section
      noBackground
      borderTop
    >
      <Box
        marginLeft="auto"
        marginRight="auto"
        width="content"
      >
        <Description>
          {description}
        </Description>
      </Box>
    </Section>
    <ContentHighlight
      eyebrow="Latest article"
      highlightType="latest"
      contentType="articles"
      actionTitle="Read more"
      marginBottom
    />
    <ContentHighlight
      eyebrow="Latest music"
      highlightType="latest"
      contentType="music"
      actionTitle="More info"
      externalActionTitle="Listen on"
      marginBottom
    />
  </React.Fragment>
);
