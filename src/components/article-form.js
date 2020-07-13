import React from 'react';


const getErrorElement = (error) => {
  console.log('error', error)
  if (error.indexOf('\n')) {
    return error
      .split('\n')
      .map((msg, i) => (<p className='text-danger' key={i}>{msg}</p>))
  }
  return (<p className='text-danger'>{error}</p>)
}

function ArticleForm({
  title,
  description,
  body,
  tagList,
  error,
  loading,
  dirty,
  handleChange,
  handleSubmit
}) {
  console.log('dirty', dirty)
  return (
    <form onSubmit={handleSubmit} className='card article-form'>
      <div className='card-body'>
        {
          dirty && error
          && getErrorElement(error)
        }
        {
          dirty && loading && <p className='text-primary'>publishing.....</p>
        }
        <div className='form-group'>
          <label htmlFor='title' className='hidden' >Article Title</label>
          <input
            id='title'
            name='title'
            type='text'
            className='form-control'
            value={title}
            onChange={handleChange}
            placeholder={`Article Title`}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description' className='hidden'>Article description</label>
          <input
            id='description'
            name='description'
            type='text'
            className='form-control'
            value={description}
            onChange={handleChange}
            placeholder={`What's this article about?`}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='body' className='hidden'>Article body</label>
          <textarea
            id='body'
            name='body'
            className='form-control'
            value={body}
            onChange={handleChange}
            placeholder={`Write your article (in markdown)`}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='tagList' className='hidden'>Article description</label>
          <input
            id='tagList'
            name='tagList'
            type='text'
            className='form-control'
            value={tagList}
            onChange={handleChange}
            placeholder={`What's this article about?`}
          />
        </div>
        <div className='d-flex justify-content-end'>
          <button type='submit' className='btn btn-primary' disabled={loading || !dirty}>Publish Article</button>
        </div>
      </div>
    </form>
  )
}

export default ArticleForm;