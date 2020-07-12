import { convertErrorObjectToString } from "../utility/util";

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

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
      let error = {errorMessage: convertErrorObjectToString(response.errors)}
      return Promise.reject(error);
    }
    response = await response.json();
    return Promise.resolve(response);

  } catch (error) {
    return Promise.reject({errorMessage:error.message})
  }
}

export const signUp = (userDetails) => {
  return authenticate(`${serviceUrl}/users`, userDetails);
}

export const signIn = (userDetails) => {
  return authenticate(`${serviceUrl}/users/login`, userDetails);
}

export const validateUserOnServer = async (token) => {
  try {
    let response = await fetch(
      `${serviceUrl}/user`,
      {
        method:"GET",
        headers: {
          "Authorization": `Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    );
    if(response.ok){
      response = await response.json();
      return Promise.resolve(response);
    }
    return Promise.reject({errorMessage:"Not logged in"});
  } catch(error){
    return Promise.reject({errorMessage:"Not logged in"});
  }
}