import React from 'react'
import PropTypes from 'prop-types'

const Document = ({ Html, Head, Body, children, renderMeta }) => {
  const isProd = process.env.REACT_STATIC_ENV === 'production'
  const { helmet } = renderMeta

  return (
    <Html lang="en" {...(isProd ? helmet.htmlAttributes.toComponent() : {})}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {isProd && (
          <React.Fragment>
            {helmet.title.toComponent()}
            {helmet.meta.toComponent()}
            {helmet.link.toComponent()}
            {renderMeta.styleTags}
          </React.Fragment>
        )}
      </Head>
      <Body
        onTouchStart=""
        {...(isProd ? helmet.bodyAttributes.toComponent() : {})}
      >
        {children}
        <div id="curtain-root" />
      </Body>
    </Html>
  )
}

Document.propTypes = {
  Html: PropTypes.func.isRequired,
  Head: PropTypes.func.isRequired,
  Body: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  renderMeta: PropTypes.shape({
    styleTags: PropTypes.object,
    helmet: PropTypes.object,
  }).isRequired,
}

export default Document
