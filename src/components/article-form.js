import React from 'react';

function ArticleForm(pops){

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted...')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{pops.heading}</h1>
      
      <label htmlFor="title" style={{display:'none'}} >Article Title</label>
      <input 
        id="title" 
        name="title" 
        type="text"
        placeholder={`Article Title`} 
      />
      <br/>
      <label htmlFor="description" style={{display:'none'}}>Article description</label>
      <input 
        id="description" 
        name="title" 
        type="text"
        placeholder={`What's this article about?`} 
      />
      <br />
      <label htmlFor="body" style={{display:'none'}}>Article body</label>
      <textarea 
        id="body" 
        name="body"
        placeholder={`Write your article (in markdown)`} 
      />
      <br />
      <button type="submit">Publish Article</button>
    </form>
  )
}

export default ArticleForm;