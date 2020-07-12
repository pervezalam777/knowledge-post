import React from 'react';
import User from './user';

function Comment({comment, author, handleDelete}) {
  return (
    <section className="d-block card" style={{margin:"2rem 1rem", minWidth:'20rem', maxWidth:'40rem'}} >
      <p className="card-body">{comment}</p>
      <div className="card-footer d-flex bd-highlight">
        <div className="mr-auto bd-highlight">
          <User {...author} />
        </div>
        <button onClick={handleDelete} className="btn btn-outline-danger bd-highlight">delete</button>
      </div>
    </section>
  )
}

export default Comment;