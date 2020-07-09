
const serviceUrl = process.env.REACT_APP_SERVICE_URL;

const convertErrorObjectToString = (error) => {
  let message = Object
    .entries(error)
    .reduce((msg, val) => {
      msg += `${val[0]} ${val[1].join('\n')}\n`
      return msg;
    }, '')
  return {errorMessage:message.substring(0, message.length - 1)}
}

const authenticate = async (url, userDetails) => {
  try {
    let response = await fetch(
      url,
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({user:userDetails})
      }
    );
    if(!response.ok){
      response = await response.json();
      return Promise.reject(convertErrorObjectToString(response.errors));
    }
    response = await response.json();
    return Promise.resolve(response);

  } catch (error) {
    return Promise.reject({errorMessage:error.message})
  }
}

export const signup = (userDetails) => {
  return authenticate(`${serviceUrl}/users`, userDetails);
}

export const signin = (userDetails) => {
  return authenticate(`${serviceUrl}/users/login`, userDetails);
}