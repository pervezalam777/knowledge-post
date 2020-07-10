import { processServiceRequest } from "./base-service";

//NOTE: There should a base service for common code.

const serviceUrl = process.env.REACT_APP_SERVICE_URL;

export const fetchComments = (slug) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}/comments`,
    method:"GET",
  }
  return processServiceRequest(details);
}

export const postCommentToServer = (slug, token, data) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}/comments`,
    method:"POST",
    token,
    body: JSON.stringify({comment:data})
  }
  return processServiceRequest(details);
} 

export const deleteCommentToServer = (slug, token, id) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}/comments/${id}`,
    method:"DELETE",
    token,
  }
  return processServiceRequest(details);
}

export const updateCommentToServer = (slug, token, id, body) => {
  let details = {
    url: `${serviceUrl}/articles/${slug}/comments/${id}`,
    method:"PUT",
    token,
    body: JSON.stringify({comment:body})
  }
  return processServiceRequest(details);
}