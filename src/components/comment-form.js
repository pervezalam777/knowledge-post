import React from 'react';

function CommentForm(props) {
  return (
    <section className='d-block card comment-form' >
      <form onSubmit={props.handleSubmit}>


          <label htmlFor='comments' className='hidden'>Write a comment</label>
          <textarea 
            className='card-body form-control comments-area'
            id='comments'
            placeholder='Write a comment'
            value={props.comment}
            onChange={props.handleChange}
          />

        <div className='card-footer d-flex justify-content-end'>
          <button type='submit' className='btn btn-outline-primary'>Post Comments</button>
        </div>
      </form>
    </section>
  )
}

export default CommentForm;