import { convertErrorObjectToString } from "../utility/util";

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

const publish = async (detail) => {
  try {
    let response = await fetch(
      detail.url,
      {
        method:detail.method,
        headers: {
          "Authorization":`Token ${detail.token}`,
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({article:detail.data})
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

export const publishToServer = async (data, token) => {
  let details = {
    url: `${serviceUrl}/articles`,
    method:"POST",
    data,
    token
  }
  return publish(details);
}

export const updateToServer = (data, token, slug) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}`,
    method:"PUT",
    data,
    token
  }
  return publish(details)
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