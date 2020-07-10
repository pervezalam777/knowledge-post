import React from 'react';

function Comment({comment, handleEdit, handleDelete}) {
  return (
    <section>
      <p>{comment}</p>
      <div>
        {/* Current API Does not support edit comment */}
        {/* <button onClick={handleEdit}>edit</button> */}
        <button onClick={handleDelete}>delete</button>
      </div>
    </section>
  )
}

export default Comment;