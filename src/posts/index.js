import React from 'react'
import Helmet from 'react-helmet'

import Navigation from './navigation'
import TitleView from './title-view'
import Footer from '../shared/footer'
import StructuredData from '../shared/structured-data'

const Article = ({ title, description, date, children, genre }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={siteUrl + image.src} />
        <meta name="twitter:image" content={siteUrl + image.src} /> */}
      </Helmet>
      {/* <StructuredData>
        {{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'CURRENT URL',
          },
          headline: 'TITLE',
          description: 'description',
          image: 'BANNER',
          author: {
            '@type': 'Person',
            name: 'Mike Heddes',
          },
          datePublished: '2019-12-20',
          dateModified: '2019-12-06',
        }}
      </StructuredData> */}

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
