const slugify = require('slugify')
const path = require(`path`)
const slash = require(`slash`)

const createSlug = text =>
  slugify(text, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  })

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const musicTemplate = path.resolve(`src/music/index.js`)

  const { data, errors } = await graphql(`
    query loadPagesQuery {
      allPostYaml {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            component {
              absolutePath
            }
          }
        }
      }
      allMusicYaml {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  // Create post pages.
  data.allPostYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug, // required
      component: slash(node.component.absolutePath),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  // Create music pages.
  data.allMusicYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug, // required
      component: slash(musicTemplate),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'PostYaml') {
    const slug = `/post/${createSlug(node.title)}`

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }

  if (node.internal.type === 'MusicYaml') {
    const slug = `/music/${createSlug(node.album)}`

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
