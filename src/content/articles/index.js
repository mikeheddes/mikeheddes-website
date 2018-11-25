import importAll from '../../utils/importAll'

const articles = importAll(require.context('./', true, /index.jsx?$/), [
  './index.js',
])

function getIdFromPath(path) {
  return path.split('/')[1].split('.')[0]
}

export default Object.keys(articles).reduce((acc, key) => {
  const id = getIdFromPath(key)
  const url = `/articles/${id}`
  return { ...acc, [id]: { ...articles[key].default, id, url } }
}, {})

// Apple iTunes categories
// https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12
// Technology, Art, Society & Culture, Science & Medicine
