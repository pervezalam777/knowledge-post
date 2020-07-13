import { convertErrorObjectToString } from "../utility/util";

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

const getRequestOption = (detail) => {
  let req = {
    method:detail.method,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };

  if(detail.body){
    req.body = detail.body
  }
  return req;
}

const processRequest = async (endPoint, options) => {
  try {
    let response = await fetch(
      `${serviceUrl}${endPoint}`,
      options
    );

    if(response.ok) {
      response = await response.json();
      return Promise.resolve(response);
    }

    let status = parseInt(response.status) 
    if(status === 401 || status === 403){
      return Promise.reject({errorMessage:'You are not authorized'})
    }
    response = await response.json();
    let error = {errorMessage: convertErrorObjectToString(response.errors)}
    return Promise.reject(error);

  } catch (error) {
    return Promise.reject({errorMessage:error.message})
  }
}

export const processProtectedRequest = (detail) => {
  let options = getRequestOption(detail);
  options.headers["Authorization"] = `Token ${detail.token}`;

  return processRequest(detail.url, options); 
}

export const processPublicRequest = (detail) => {
  let options =  getRequestOption(detail)

  return processRequest(detail.url, options);
}


