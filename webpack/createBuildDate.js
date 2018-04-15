const months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.'
]

module.exports = function() {
  const date = new Date();
  const month = date.getMonth(); //months from 0-11
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day} ${months[month]} ${year}`;
};
