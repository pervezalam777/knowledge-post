import React, {  } from 'react';
import AuthFormContainer from '../containers/auth-form-container';
import { SIGN_UP } from '../actions/auth-actions';

const staticData = {
  heading:"Sign up",
  linkTo:"login",
  linkToLabel:"Have an account?",
}

const elements = {
  "username": {
    id:"username",
    type:"text",
    placeholder:"Username",
    label:"Username: ",
    value:''
  },
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

function SignUpPage(){
  return <AuthFormContainer 
    formStaticData={staticData} 
    formItems={elements}
    type={SIGN_UP}
  />
}

export default SignUpPage;