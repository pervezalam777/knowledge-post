export const convertErrorObjectToString = (error) => {
  let message = Object
    .entries(error)
    .reduce((msg, val) => {
      msg += `${val[0]} ${val[1].join('\n')}\n`
      return msg;
    }, '')
  return message.substring(0, message.length - 1)
}