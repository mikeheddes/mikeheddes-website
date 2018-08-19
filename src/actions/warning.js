export const SET_WARNING = 'SET_WARNING';
export const RESOLVE_WARNING = 'RESOLVE_WARNING';
export const SET_WARNING_HEIGHT = 'SET_WARNING_HEIGHT';

export const setWarning = message => ({
  type: SET_WARNING,
  message,
});

export const resolveWarning = () => ({
  type: RESOLVE_WARNING,
});

export const setWarningHeight = height => ({
  type: SET_WARNING_HEIGHT,
  height,
});
