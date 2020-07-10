import { processServiceRequest } from "./base-service";

//NOTE: There should a base service for common code.

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

export const publishToServer = (data, token) => {
  let details = {
    url: `${serviceUrl}/articles`,
    method:"POST",
    body:JSON.stringify({article:data}),
    token
  }
  return processServiceRequest(details);
}

export const updateToServer = (data, token, slug) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}`,
    method:"PUT",
    body:JSON.stringify({article:data}),
    token
  }
  return processServiceRequest(details);
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


export const deleteArticleOnServer = async (slug, token) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}`,
    method:"DELETE",
    token
  }
  return processServiceRequest(details);
}