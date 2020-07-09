import { AUTHENTICATION_ERROR, AUTHENTICATION_SUCCESS } from "../actions/auth-actions";

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
    default:
      return state;
  }
}

export default authReducer;


/* 
state:{
  "email": "jake@jake.jake",
  "token": "jwt.token.here",
  "username": "jake",
  "createdAt": "2020-07-09T06:31:38.579Z",
  "updatedAt": "2020-07-09T06:31:38.584Z",
  "bio": "I work at state farm",
  "image": null,
  "serverError":"",
  "isAuthenticated":false
}
*/