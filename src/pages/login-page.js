import React from 'react';
import AuthFormContainer from '../containers/auth-form-container';

//TODO: Client side validation as well
//NOTE: There is lot of duplication in Sign In and Sign Up

const staticData = {
  heading:"Sign in",
  linkTo:"register",
  linkToLabel:"Need an account?",
}

const elements = {
  "email": {
    id:"email",
    type:"text",
    placeholder:"Email",
    label:"Email: ",
    value:''
  },
  "password":{
    id:"password",
    type:"password",
    placeholder:"Password",
    label:"Password: ",
    value:''
  }
}

function LoginPage(){
  return <AuthFormContainer 
    formStaticData={staticData} 
    formItems={elements} 
  />
}

export default LoginPage;