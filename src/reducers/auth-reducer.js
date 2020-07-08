
const initialState = {
  serverError:"",
  isAuthenticated:false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
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
  "bio": "I work at statefarm",
  "image": null,
  "serverError":"",
  "isAuthenticated":false
}
*/