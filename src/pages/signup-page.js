import React, { useState } from 'react';
import AuthForm from '../components/auth-form';

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

function SignUpPage(){
  const [state, setState] = useState(formItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted...")
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

export default SignUpPage;