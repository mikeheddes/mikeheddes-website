export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export const durationFormatter = new Intl.DateTimeFormat('en-US', {
  minute: '2-digit',
  second: '2-digit',
})
