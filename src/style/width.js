import { objectValuesToStrings } from '../util'

export const widthNumbers = {
  content: 1180,
  text: 745,
}

const width = objectValuesToStrings(widthNumbers, {
  suffix: 'px',
  initialObj: {
    full: '100%',
  },
})

export default width
