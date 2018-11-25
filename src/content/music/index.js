import importAll from '../../utils/importAll'

const music = importAll(require.context('./', true, /.jsx?$/), ['./index.js'])

function getId(str) {
  return str.split('/')[1].split('.')[0]
}

export default Object.entries(music).reduce((acc, cur) => {
  const id = getId(cur[0])
  const url = `/music/${id}`
  return { ...acc, [id]: { ...cur[1].default, id, url } }
}, {})

// Apple iTunes categories
// https://affiliate.itunes.apple.com/resources/documentation/genre-mapping/
//
