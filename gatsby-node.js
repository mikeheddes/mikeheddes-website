const path = require(`path`)
const slash = require(`slash`)

const articlesDir = path.resolve('src', 'content', 'articles')
const musicDir = path.resolve('src', 'content', 'music')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)
  const musicTemplate = path.resolve(`src/templates/music.js`)

  return graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                theme
              }
            }
          }
        }
        allMusicYaml(limit: 1000) {
          edges {
            node {
              theme
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
      return result
    })
    .then(result => {
      // Create article pages.
      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: slash(articleTemplate),
          context: {
            slug: edge.node.fields.slug,
            theme: edge.node.frontmatter.theme,
          },
        })
      })
      return result
    })
    .then(result => {
      // Create music pages.
      result.data.allMusicYaml.edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: slash(musicTemplate),
          context: {
            slug: edge.node.fields.slug,
            theme: edge.node.theme,
          },
        })
      })
      return result
    })
}

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `File`) {
    const parsedFilePath = path.parse(node.absolutePath)

    if (path.dirname(parsedFilePath.dir) === articlesDir) {
      const articleId = parsedFilePath.dir.split(path.sep).pop()
      const slug = `articles/${articleId}`

      createNodeField({ node, name: `slug`, value: slug })
    }
    if (parsedFilePath.dir === musicDir) {
      const musicId = parsedFilePath.name
      const slug = `music/${musicId}`

      createNodeField({ node, name: `slug`, value: slug })
    }
  } else if (
    (node.internal.type === `MarkdownRemark` ||
      node.internal.type === `MusicYaml`) &&
    typeof node.slug === `undefined`
  ) {
    const fileNode = getNode(node.parent)

    createNodeField({
      node,
      name: `slug`,
      value: fileNode.fields.slug,
    })
  }
}
