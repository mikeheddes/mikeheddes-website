// Template file that the server will use to inject the React markup and
// initial state before sending it to the client

function addScriptTag(src) {
  return `<script type="text/javascript" src="${src}"></script>`
}

function unique(accum, current) {
  if (accum.indexOf(current) < 0) {
    accum.push(current)
  }
  return accum
}

const addChunks = chunkBundles =>
  chunkBundles
    .filter(
      bundle =>
        !bundle.file.endsWith('.map') && !bundle.file.endsWith('hot-update.js')
    )
    .reduce(unique, [])
    .map(bundle => addScriptTag(bundle.publicPath))
    .join('\n')

export default opts => {
  const {
    helmet,
    clientBundle,
    chunkBundles,
    dllBundle,
    vendorBundle,
    runtimeBundle,
  } = opts
  return [
    `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.base.toString()}
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
      ${helmet.style.toString()}
      <script>
        window.INITIAL_STATE = ${JSON.stringify(opts.initialState)};
      </script>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      ${helmet.noscript.toString() || ''}
      <div id="root">
`,
    `</div>
    </body>
    ${chunkBundles ? addChunks(chunkBundles) : ''}
    ${dllBundle ? addScriptTag(dllBundle) : ''}
    ${vendorBundle ? addScriptTag(vendorBundle) : ''}
    ${runtimeBundle ? addScriptTag(runtimeBundle) : ''}
    ${addScriptTag(clientBundle)}
  </html>
  `,
  ]
}
