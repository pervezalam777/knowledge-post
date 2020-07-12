import React from 'react';
import User from './user';

function Comment({comment, author, handleDelete}) {
  return (
    <section className="d-block card comment-section">
      <p className="card-body">{comment}</p>
      <div className="card-footer d-flex bd-highlight">
        <div className="mr-auto bd-highlight user-profile user-comment-image">
          <User {...author} />
        </div>
        <button onClick={handleDelete} className="btn btn-outline-danger bd-highlight">Delete</button>
      </div>
    </section>
  )
}

export default Comment;