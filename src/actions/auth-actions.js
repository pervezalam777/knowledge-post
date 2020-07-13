import { signUp, signIn, validateUserOnServer } from '../services/auth-service';

export const SIGN_UP = 'sign_up';
export const SIGN_IN = 'sign_in';

export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const LOGOUT = 'LOGOUT';

const authenticating = () => ({type:AUTHENTICATING});
const authError = (error) => ({type:AUTHENTICATION_ERROR, payload:error});
const authSuccess = (res) => ({type:AUTHENTICATION_SUCCESS, payload: res.user});


export const autoLogin = () => {
  return async (dispatch) => {
    try {
      if(localStorage){
        const token = localStorage.getItem('token');
        const response = await validateUserOnServer(token);
        dispatch(authSuccess(response));
      }
    } catch(error) {
      //NOTE: No action required.
    }
  }
}

export const doAuthenticate = (credentials, authType = SIGN_IN) => {
  return async (dispatch) => {
    dispatch(authenticating())
    try {
      const response = authType === SIGN_UP 
        ? await signUp(credentials)
        : await signIn(credentials);
     
      if(localStorage){
        localStorage.setItem('token', response.user.token);
      }
      dispatch(authSuccess(response));
    } catch(error) {
      dispatch(authError(error))
    }
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {type:LOGOUT}
}