import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'

import Section from '../components/Section'
import Link from '../components/Link'
import Banner from '../views/Banner'
import Box from '../components/Box'
import Divider from '../components/Divider'
import Image from '../components/Image'
import P from '../components/Paragraph'
import H from '../components/Heading'
import { wrapper as TextWrapper } from '../components/MarkdownDefaults'

const color = 'purple'
const bannerLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/mikeheddes',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/mikeheddes',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mike-heddes-6b5021167/',
  },
]

const setTheme = theme => {
  return {
    ...theme,
    link: theme[color],
    surface: theme.surfaceColors[color],
  }
}

const About = ({
  data: {
    profilePicture: {
      childImageSharp: { fluid: profilePicture },
    },
    resume: { publicURL: resume },
  },
}) => (
  <ThemeProvider theme={setTheme}>
    <React.Fragment>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Banner actions={bannerLinks} eyebrow="About">
        Mike Heddes.
        <br />
        Artist. Engineer.
      </Banner>
      <Section>
        <Box width="text" marginLeft="auto" marginRight="auto">
          <Box
            display="flex"
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
          >
            <Box
              marginRight={{ xs: 0, md: 'xm' }}
              marginBottom={{ xs: 'xm', md: 0 }}
              width={130}
              height={130}
              overflow="hidden"
              flex="none"
              shape="circle"
            >
              <Image fluid={profilePicture} shape="square" />
            </Box>
            <Box>
              <P size="md">
                I'm interested in IT, sciences and mathematics. My goals are to
                use my creativity to make things exciting and to stay curious.
              </P>
              <P size="md" marginTop="re">
                <Link to={resume} target="self" icon>
                  View my resume
                </Link>
              </P>
            </Box>
          </Box>
          <Divider
            marginTop={{ xs: 'lg', md: 'xl' }}
            marginBottom={{ xs: 'lg', md: 'xl' }}
          />
          <TextWrapper>
            <H as="h2" marginBottom="re">
              Projects
            </H>
            <P size="md">
              My projects can be found on{' '}
              <Link to="/articles">the articles page</Link> or on{' '}
              <Link to="https://github.com/mikeheddes?tab=repositories">
                my GitHub
              </Link>
              . If you have an idea for a project or you would like to help me
              with one of my current projects feel free to reach out on{' '}
              <Link to="https://twitter.com/mikeheddes">Twitter</Link> or create
              a pull request on{' '}
              <Link to="https://github.com/mikeheddes">GitHub</Link>.
            </P>
          </TextWrapper>
        </Box>
      </Section>
    </React.Fragment>
  </ThemeProvider>
)

export default About

export const pageQuery = graphql`
  query aboutPage {
    profilePicture: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "mike_heddes.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 900, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    resume: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "resume.pdf" }
    ) {
      publicURL
    }
  }
`
