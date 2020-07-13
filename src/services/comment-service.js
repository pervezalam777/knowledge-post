import { 
  processPublicRequest, 
  processProtectedRequest 
} from "./base-service";

export const fetchComments = (slug) => {
  let details = {
    url: `/articles/${slug}/comments`,
    method:"GET",
  }
  return processPublicRequest(details);
}

export const postCommentToServer = (slug, token, data) => {
  let details = {
    url: `/articles/${slug}/comments`,
    method:"POST",
    token,
    body: JSON.stringify({comment:data})
  }
  return processProtectedRequest(details);
} 

export const deleteCommentToServer = (slug, token, id) => {
  let details = {
    url: `/articles/${slug}/comments/${id}`,
    method:"DELETE",
    token,
  }
  return processProtectedRequest(details);
}
