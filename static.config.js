import Document from './src/Document'
import * as config from './config'

export default {
  ...config,
  Document,
  // Some static html files were not created properly without this setting.
  outputFileRate: 1, // IMPORTANT!!
}
