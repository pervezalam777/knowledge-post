import { 
  AUTHENTICATION_ERROR, 
  AUTHENTICATION_SUCCESS, 
  LOGOUT 
} from '../actions/auth-actions';

const initialState = {
  serverError:null,
  isAuthenticated:false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case AUTHENTICATION_ERROR:
      return { ...state, serverError:action.payload };
    case AUTHENTICATION_SUCCESS:
      return {
        ...initialState,
        ...action.payload,
        isAuthenticated: true
      }
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default authReducer;
