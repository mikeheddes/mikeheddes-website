export const SET_WARNING = 'SET_WARNING';
export const RESOLVE_WARNING = 'RESOLVE_WARNING';
export const SET_WARNING_HEIGHT = 'SET_WARNING_HEIGHT';

export const setWarning = message => {
  return {
    type: SET_WARNING,
    message,
  }
}

export const resolveWarning = () => {
  return {
    type: RESOLVE_WARNING,
  }
}

export const setWarningHeight = height => {
  return {
    type: SET_WARNING_HEIGHT,
    height,
  }
}
