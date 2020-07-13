import { processProtectedRequest, processPublicRequest } from "./base-service";

export const publishToServer = (data, token) => {
  let details = {
    url: `/articles`,
    method:"POST",
    body:JSON.stringify({article:data}),
    token
  }
  return processProtectedRequest(details);
}

export const updateToServer = (data, token, slug) => {
  let details = {
    url: `/articles/${slug}`,
    method:"PUT",
    body:JSON.stringify({article:data}),
    token
  }
  return processProtectedRequest(details);
}

export const fetchArticleBySlug = async (slug) => {
  let details = {
    url: `/articles/${slug}`,
    method:"GET"
  }
  return processPublicRequest(details);
}

export const deleteArticleOnServer = async (slug, token) => {
  let details = {
    url: `/articles/${slug}`,
    method:"DELETE",
    token
  }
  return processProtectedRequest(details);
}