import React from 'react';
import { Link } from 'react-router-dom'

//TODO: Error Message display format 

function AuthForm({
  heading,
  linkTo,
  linkToLabel,
  formItems,
  handleChange,
  handleSubmit,
  errorMessage
}) {
  return <form onSubmit={handleSubmit} className="d-flex justify-content-center card" style={{minWidth:'20rem', maxWidth:'30rem'}}>
    <div className="card-body">
      <h1 className="d-flex justify-content-center card-title">{heading}</h1>
      <Link className="card-subtitle mb-2 d-flex justify-content-center" to={`/${linkTo}`}>{linkToLabel}</Link>
      {
        errorMessage
        && errorMessage
          .split('\n')
          .map(msg => (<p className='text-danger'>{msg}</p>))
      }
      {
        Object.entries(formItems).map(([key, item]) => (
          <div className="form-group" key={item.id}>
            <label htmlFor={item.id} style={{display:'none'}}>{item.label}</label>
            <input
              type={item.type}
              id={item.id}
              placeholder={item.placeholder}
              value={item.value}
              className="form-control"
              name={item.id}
              onChange={handleChange}
            />
          </div>
        ))
      }
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-primary ">{heading}</button>
      </div>
    </div>
  </form>

}

export default AuthForm;