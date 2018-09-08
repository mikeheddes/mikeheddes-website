import { LOCATION_CHANGE } from 'connected-react-router'
import { setMenuVisibility } from 'actions/menu'
import { setCurtainVisibility } from 'actions/curtain'

export const onLocationChange = ({ dispatch }) => next => action => {
  if (action.type === LOCATION_CHANGE) {
    next(action)
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0)
    dispatch(setMenuVisibility(false))
    dispatch(setCurtainVisibility(false))
  } else {
    next(action)
  }
}

export default [onLocationChange]
