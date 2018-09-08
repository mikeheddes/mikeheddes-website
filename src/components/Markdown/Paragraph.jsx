import { marginPropType } from 'utils/PropTypes'
import Paragraph from 'components/Paragraph'

Paragraph.propTypes = {
  ...Paragraph.propTypes,
  marginBottom: marginPropType,
}

Paragraph.defaultProps = {
  ...Paragraph.defaultProps,
  marginBottom: 'xr',
}

export default Paragraph
