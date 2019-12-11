import React from 'react'
import styled from 'styled-components'

import Navigation from './navigation'
import TitleView from './title-view'
import Footer from '../shared/footer'
import MetaTags from './meta-tags'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { contentWrapper, fluidFont } from '../styles'

const Link = styled(OutboundLink)`
  ${fluidFont(18, 18)};
  display: inline-block;
  background: var(--tint-blue);
  text-decoration: none;
  color: var(--blue);
  font-weight: 500;
  padding: 12px 22px;
  border-radius: 6px;
`

const Header = styled.h3`
  ${fluidFont(21, 24)};
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
