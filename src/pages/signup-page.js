import React, { useState } from 'react';
import AuthForm from '../components/auth-form';
import { connect } from 'react-redux';
import { doAuthenticate, SIGN_UP } from '../actions/auth-actions';
import { Redirect } from 'react-router-dom';

//TODO: Client side validation as well
//NOTE: There is lot of duplication in Sign In and Sign Up

const formStaticData = {
  heading:"Sign up",
  linkTo:"login",
  linkToLabel:"Have an account?",
}

const formItems = {
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

function SignUpPage({dispatch, errorMessage, isAuthenticated}){
  const [state, setState] = useState(formItems);

  if(isAuthenticated){
    return (<Redirect to="/" />)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted...", state)
    let {
      email:{value:email},
      password:{value:password},
      username:{value:username}
    } = state;
    dispatch(doAuthenticate({email, password, username}, SIGN_UP));
  }

  const handleChange = (e) => {
    const newState = {...state};
    const element = {...newState[e.target.id]};
    element.value = e.target.value;
    newState[e.target.id] = element;
    setState(newState);
  }

  const data = {
    ...formStaticData, 
    formItems:state, 
    handleSubmit, 
    handleChange,
    errorMessage
  }
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

export default connect(mapStateToProps)(SignUpPage);