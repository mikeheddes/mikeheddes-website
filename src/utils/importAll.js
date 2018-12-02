function importAll(r, exeptions = []) {
  const cache = {}

  r.keys().forEach(key => {
    if (exeptions.indexOf(key) === -1) {
      cache[key] = r(key)
    }
  })

  return cache
}

export default importAll
