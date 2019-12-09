import React from 'react'

import Navigation from './navigation'
import TitleView from './title-view'
import Footer from '../shared/footer'
import MetaTags from './meta-tags'

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
      <Footer />
    </>
  )
}

export default Article
