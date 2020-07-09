import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from '../components/auth-form';
import { doAuthenticate } from '../actions/auth-actions';

//TODO: Client side validation as well
//NOTE: There is lot of duplication in Sign In and Sign Up

const formStaticData = {
  heading:"Sign in",
  linkTo:"register",
  linkToLabel:"Need an account?",
}

const formItems = {
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

function LoginPage({dispatch, errorMessage, isAuthenticated}){
  const [state, setState] = useState(formItems);

  if(isAuthenticated){
    return (<Redirect to="/" />)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let {
      password:{value:password},
      email:{value:email}
    } = state;
    dispatch(doAuthenticate({password, email}));
  }

  const handleChange = (e) => {
    const newState = {...state};
    const element = {...newState[e.target.id]};
    element.value = e.target.value;
    newState[e.target.id] = element;
    setState(newState);
  }

  const data = {...formStaticData, formItems:state, handleSubmit, handleChange}
  return <AuthForm {...data} />
}

const mapStateToProps = (state) => {
  let {
    user:{
      serverError,
      isAuthenticated,
      token
    }
  } = state;
  return {
    isAuthenticated: (token && isAuthenticated),
    errorMessage: serverError ? serverError.errorMessage : null
  }
}

export default connect(mapStateToProps)(LoginPage);