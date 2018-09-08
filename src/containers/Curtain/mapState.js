import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    ...state.ui.curtain,
  }
}

export default Component => connect(mapStateToProps)(Component)
