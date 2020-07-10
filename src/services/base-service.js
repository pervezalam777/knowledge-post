
import { convertErrorObjectToString } from "../utility/util";

//TODO: service url should be kept here
//const serviceUrl = process.env.REACT_APP_SERVICE_URL;

const getRequestOption = (detail) => {
  let req = {
    method:detail.method,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };
  if(detail.token){
    req.headers["Authorization"] = `Token ${detail.token}`
  }
  
  if(detail.body){
    req.body = detail.body
  }
  return req;
} 

export const processServiceRequest = async (detail) => {
  try {
    let response = await fetch(
      detail.url,
      getRequestOption(detail)
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