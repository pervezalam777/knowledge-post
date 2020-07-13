import React from 'react';

export const getErrorElement = (error) => {
  if (error.indexOf('\n')) {
    return error
      .split('\n')
      .map((msg, i) => (<p className='text-danger' key={i}>{msg}</p>))
  }
  return (<p className='text-danger'>{error}</p>)
}