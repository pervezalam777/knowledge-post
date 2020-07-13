export const convertErrorObjectToString = (error) => {
  let message = Object
    .entries(error)
    .reduce((msg, val) => {
      msg += `${val[0]} ${val[1].join('\n')}\n`
      return msg;
    }, '')
  return message.substring(0, message.length - 1)
}

const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateFormat = (dateString) => {
  let date = new Date(dateString);
  let month = monthName[date.getMonth()];
  let formattedDateString = `${month} ${date.getDate()}, ${date.getFullYear()}`
  return formattedDateString;
} 