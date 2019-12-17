import React from 'react'
import styled from 'styled-components'

import Navigation from './navigation'
import TitleView from './title-view'
import Footer from '../shared/footer'
import MetaTags from './meta-tags'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { contentWrapper, fluidFont } from '../styles'

const Link = styled(OutboundLink)`
  ${fluidFont(18, 20)};
  display: inline-block;
  text-decoration: none;
  color: var(--blue);
  font-weight: 500;
  transition: opacity 100ms ease-out;

  :active {
    opacity: 0.5;
  }
`

const Header = styled.h3`
  ${fluidFont(21, 25)};
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--heading);
`

const Article = ({
  title,
  description,
  date,
  children,
  genre,
  siteUrl,
  slug,
  imageSquare,
  imageWide,
}) => {
  return (
    <>
      <MetaTags
        siteUrl={siteUrl}
        title={title}
        genre={genre}
        date={date}
        description={description}
        imageSquare={imageSquare}
        imageWide={imageWide}
        slug={slug}
      />
      <Navigation />
      <article>
        <TitleView title={title} date={date} genre={genre} />
        {children}
      </article>
      <div css="margin: 80px 0; text-align: center;">
        <div css={contentWrapper}>
          <Header>Want to discuss something about this post?</Header>
          <Link href="https://github.com/mikeheddes/mikeheddes-website/issues/new">
            Open an issue on GitHub
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Article
