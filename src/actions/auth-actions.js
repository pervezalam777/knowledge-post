import { signUp, signIn } from "../services/auth-service";

export const SIGN_UP = 'sign_up';
export const SING_IN = 'sign_in';

export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';

const authenticating = () => ({type:AUTHENTICATING});
const authError = (error) => ({type:AUTHENTICATION_ERROR, payload:error});
const authSuccess = (res) => ({type:AUTHENTICATION_SUCCESS, payload: res.user});

export const doAuthenticate = (credentials, authType = SING_IN) => {
  return async (dispatch) => {
    dispatch(authenticating())
    try {
      let response = authType === SIGN_UP 
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