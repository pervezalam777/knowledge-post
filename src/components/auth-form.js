import React from 'react';
import { Link } from 'react-router-dom'
import { getErrorElement } from './component-util';

function AuthForm({
  heading,
  linkTo,
  linkToLabel, 
  formItems,
  handleChange,
  handleSubmit,
  errorMessage
}) {
  return <form onSubmit={handleSubmit} className='d-flex justify-content-center card auth-form'>
    <div className='card-body'>
      <h1 className='d-flex justify-content-center card-title'>{heading}</h1>
      <Link className='card-subtitle mb-2 d-flex justify-content-center' to={`/${linkTo}`}>{linkToLabel}</Link>
      {
        errorMessage
        && getErrorElement(errorMessage)
      }
      {
        Object.entries(formItems).map(([key, item]) => (
          <div className='form-group' key={item.id}>
            <label htmlFor={item.id} className='hidden'>{item.label}</label>
            <input
              type={item.type}
              id={item.id}
              placeholder={item.placeholder}
              value={item.value}
              className='form-control'
              name={item.id}
              onChange={handleChange}
            />
          </div>
        ))
      }
      <div className='d-flex justify-content-end'>
        <button type='submit' className='btn btn-primary'>{heading}</button>
      </div>
    </div>
  </form>

}

export default AuthForm;