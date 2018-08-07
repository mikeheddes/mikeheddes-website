// Template file that the server will use to inject the React markup and
// initial state before sending it to the client

const addScriptTag = src =>
  `<script type="text/javascript" src="${src}"></script>`;

export default opts => {
  const {
    helmet,
    body,
    clientBundle,
    sheet,
    chunkBundles,
    dllBundle,
    vendorBundle,
    runtimeBundle,
  } = opts;
  return `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.base.toString()}
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
      ${helmet.style.toString()}
      ${sheet.getStyleTags()}
      <script>
        window.INITIAL_STATE = ${JSON.stringify(opts.initialState)};
      </script>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      ${helmet.noscript.toString() || ''}
      <div id="root">${body}</div>
    </body>
    ${chunkBundles
      .filter(
        bundle =>
          !bundle.file.endsWith('.map') &&
          !bundle.file.endsWith('hot-update.js')
      )
      .map(bundle => addScriptTag(bundle.publicPath))
      .join('\n')}
    ${dllBundle ? addScriptTag(dllBundle) : ''}
    ${vendorBundle ? addScriptTag(vendorBundle) : ''}
    ${runtimeBundle ? addScriptTag(runtimeBundle) : ''}
    ${addScriptTag(clientBundle)}
  </html>
  `;
};
