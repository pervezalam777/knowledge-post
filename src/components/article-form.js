import React from 'react';

const getErrorElement = (error) => {
  console.log('error', error)
  if(error.indexOf('\n')){
    return error
      .split('\n')
      .map((msg, i) => (<p className='error' key={i}>{msg}</p>))
  }
  return (<p className='error'>{error}</p>)
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
}){
  console.log("dirty", dirty)
  return (
    <form onSubmit={handleSubmit}>
       { 
        dirty && error 
        && getErrorElement(error)
      }
      {
        dirty && loading && <p>publishing.....</p> 
      }
      <label htmlFor="title" style={{display:'none'}} >Article Title</label>
      <input 
        id="title" 
        name="title" 
        type="text"
        value={title}
        onChange={handleChange}
        placeholder={`Article Title`} 
      />
      <br/>
      <label htmlFor="description" style={{display:'none'}}>Article description</label>
      <input 
        id="description" 
        name="description" 
        type="text"
        value={description}
        onChange={handleChange}
        placeholder={`What's this article about?`} 
      />
      <br />
      <label htmlFor="body" style={{display:'none'}}>Article body</label>
      <textarea 
        id="body" 
        name="body"
        value={body}
        onChange={handleChange}
        placeholder={`Write your article (in markdown)`} 
      />
      <br />
      <label htmlFor="tagList" style={{display:'none'}}>Article description</label>
      <input 
        id="tagList" 
        name="tagList" 
        type="text"
        value={tagList}
        onChange={handleChange}
        placeholder={`What's this article about?`} 
      />
      <br />
      <button type="submit" disabled={loading || !dirty}>Publish Article</button>
    </form>
  )
}

export default ArticleForm;