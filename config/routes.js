const fs = require('fs')
const path = require('path')

const baseDir = path.resolve(__dirname, '..', 'src', 'content')
const articlesDir = path.join(baseDir, 'articles')
const musicDir = path.join(baseDir, 'music')

const removeIndex = fileName => !fileName.match(/index.jsx?$/)

const getBasenameWithoutExtention = fileName =>
  path.basename(fileName, path.extname(fileName))

export default async () => {
  let articles = await fs.promises.readdir(articlesDir)
  articles = articles.filter(removeIndex)

  let music = await fs.promises.readdir(musicDir)
  music = music.filter(removeIndex).map(getBasenameWithoutExtention)

  return [
    {
      path: '/music',
      children: music.map(musicId => ({
        path: musicId,
      })),
    },
    {
      path: '/',
    },
    {
      path: '/about',
    },
    {
      path: '/articles',
      children: articles.map(articleId => ({
        path: articleId,
      })),
    },
  ]
}
