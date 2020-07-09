import React from 'react';
import {Link} from 'react-router-dom'

//TODO: Error Message display format 

function AuthForm({
  heading,
  linkTo,
  linkToLabel,
  formItems,
  handleChange,
  handleSubmit,
  errorMessage
}){
  return <form onSubmit={handleSubmit}>
    <h1>{heading}</h1>
    <Link to={`/${linkTo}`}>{linkToLabel}</Link>
    { 
      errorMessage 
      && errorMessage
        .split('\n')
        .map(msg => (<p className='error'>{msg}</p>))
    }
    <br />
    {
      Object.entries(formItems).map(([key, item]) => (
        <React.Fragment key={item.id}>
        <label htmlFor={item.id}>{item.label}</label>
        <input 
          type={item.type} id={item.id}
          placeholder={item.placeholder}
          value={item.value}
          name={item.id} onChange={handleChange}
        />
        <br/>
        </React.Fragment>
      ))
    }
    <button type="submit">{heading}</button>
  </form>

}

export default AuthForm;