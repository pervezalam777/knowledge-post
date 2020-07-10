import React from 'react';

function CommentForm(props) {
    return (
      <section>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="comments" style={{display:'none'}}>Write a comment</label>
          <textarea 
            id="comments"
            placeholder="Write a comment"
            value={props.comment} 
            onChange={props.handleChange} 
          />
          <div>
            <button type="submit">Post Comments</button>
          </div>
        </form>
      </section>
    )
}

export default CommentForm;