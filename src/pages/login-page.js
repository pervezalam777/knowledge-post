import React from 'react';
import AuthFormContainer from '../containers/auth-form-container';
import { SIGN_IN } from '../actions/auth-actions';

//TODO: Client side validation as well

const staticData = {
  heading:'Sign in',
  linkTo:'register',
  linkToLabel:'Need an account?',
}

const elements = {
  'email': {
    id:'email',
    type:'text',
    placeholder:'Email',
    label:'Email: ',
    value:''
  },
  'password':{
    id:'password',
    type:'password',
    placeholder:'Password',
    label:'Password: ',
    value:''
  }
}

function LoginPage(){
  return <AuthFormContainer 
    formStaticData={staticData} 
    formItems={elements}
    type={SIGN_IN}
  />
}

export default LoginPage;