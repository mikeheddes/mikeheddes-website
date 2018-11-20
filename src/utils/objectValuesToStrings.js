export default function objectValuesToStrings(obj, options = {}) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = `${options.prefix || ''}${obj[key]}${options.suffix || ''}`
    return acc
  }, options.initialObj || {})
}
