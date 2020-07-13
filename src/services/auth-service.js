import { 
  processPublicRequest, 
  processProtectedRequest 
} from "./base-service";

export const signUp = (userDetails) => {
  let details = {
    url: `/users`,
    method:"POST",
    body:JSON.stringify({user:userDetails}),
  }
  return processPublicRequest(details);
}

export const signIn = (userDetails) => {
  let details = {
    url: `/users/login`,
    method:"POST",
    body:JSON.stringify({user:userDetails}),
  }
  return processPublicRequest(details);
}

export const validateUserOnServer = (token) => {
  let details = {
    url: `/user`,
    method:"GET",
    token,
  }
  return processProtectedRequest(details);
}