import React from 'react'
import Helmet from 'react-helmet'

import Navigation from './Navigation'
import TitleView from './TitleView'
import Footer from '../../components/Footer'

const Article = ({ title, description, date, children, genre }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={homepage + image.src} />
        <meta name="twitter:image" content={homepage + image.src} /> */}
      </Helmet>

      <Navigation />
      <article>
        <TitleView title={title} date={date} genre={genre} />
        {children}
        {/* <figure>
          <CoverImage {...image} alt={imageMeta.title} shape="wide" />
          {imageMeta.credits && <FigCaption>{imageMeta.credits}</FigCaption>}
        </figure>
        <MDXRenderer>{post.body}</MDXRenderer> */}
      </article>
      <Footer />
    </>
  )
}

export default Article
