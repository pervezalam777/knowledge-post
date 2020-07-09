import { convertErrorObjectToString } from "../utility/util";

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

export const publishToServer = async (data, token) => {
  try {
    let response = await fetch(
      `${serviceUrl}/articles`,
      {
        method:"POST",
        headers: {
          "Authorization":`Token ${token}`,
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({article:data})
      }
    );
    if(response.ok) {
      response = await response.json();
      return Promise.resolve(response);
    }

    if(parseInt(response.status) === 401){
      return Promise.reject({errorMessage:'You are not authorized'})
    }
    response = await response.json();
    let error = {errorMessage: convertErrorObjectToString(response.errors)}
    return Promise.reject(error);

  } catch (error) {
    return Promise.reject({errorMessage:error.message})
  }
}

export const fetchArticleBySlug = async (slug) => {
  try {
    let response = await fetch(`${serviceUrl}/articles/${slug}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });

    if(response.ok){
      response = await response.json();
      return Promise.resolve(response);
    }
    response = await response.json();
    return Promise.reject({errorMessage: response.error});

  } catch (error) {
    return Promise.reject({errorMessage:error.message})
  }
}