import React from 'react';

function CommentForm(props) {
  return (
    <section className="d-block card" style={{ margin: "2rem 1rem", minWidth: '20rem', maxWidth: '40rem' }} >
      <form onSubmit={props.handleSubmit}>


          <label htmlFor="comments" style={{ display: 'none' }}>Write a comment</label>
          <textarea 
            className="card-body form-control"
            style={{width:"100%", border:'none', marginBottom:"-6px"}}
            id="comments"
            placeholder="Write a comment"
            value={props.comment}
            onChange={props.handleChange}
          />

        <div className="card-footer d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-primary">Post Comments</button>
        </div>
      </form>
    </section>
  )
}

export default CommentForm;