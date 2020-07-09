import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from '../components/auth-form';
import { doAuthenticate } from '../actions/auth-actions';

function AuthFormContainer({
  dispatch, 
  errorMessage, 
  isAuthenticated, 
  formItems, 
  formStaticData
}){
  const [state, setState] = useState(formItems);

  if(isAuthenticated){
    return (<Redirect to="/" />)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let credential = Object
      .entries(state)
      .reduce((data, entry) => {
        data[entry[0]] = entry[1].value
        return data;
      }, {});

    dispatch(doAuthenticate(credential));
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

export default connect(mapStateToProps)(AuthFormContainer);