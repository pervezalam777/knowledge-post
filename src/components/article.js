import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactMarkdown from "react-markdown"

import User from './user';
import { dateFormat } from '../utility/util';

const getErrorElement = (error) => {
  console.log('error', error)
  if(error.indexOf('\n')){
    return error
      .split('\n')
      .map((msg, i) => (<p className='text-danger' key={i}>{msg}</p>))
  }
  return (<p className='text-danger'>{error}</p>)
}

const articleMeta = ({createdAt, author, owner}, handleEdit, handleDelete) => {
  return (
    <div style={{margin:"0rem 1rem"}}>
      <User {...author}>
        { dateFormat(createdAt)}
      </User>
      {
        owner &&  <div>
          <button className="btn btn-outline-primary mr-2" onClick={handleEdit}>Edit Article</button>
          <button className="btn btn-outline-danger" onClick={handleEdit}>delete Article</button>
        </div>
      }
    </div>
  )
}

function Article(props) {
  const history = useHistory();
  
  let {
    title,
    slug,
    createdAt,
    author,
    handleDelete,
    body,
    owner,
    error
  } = props;

  const handleEdit = () => {
    history.push(`/articles/${slug}/edit`)
  }

  let meta = articleMeta({createdAt, author, owner}, handleEdit, handleDelete)
 
  return (
    <>
      <header className="d-block p-2 bg-dark text-white" >
        <h1 style={{margin:"2rem 1rem"}}>{title}</h1>
        {meta}
        {props.error && getErrorElement(error)}
      </header>
      <main style={{margin:"2rem 2rem"}}>
        <ReactMarkdown source={body}/>
      </main>
      <hr />
      <div className="d-flex justify-content-center">
        {meta}
      </div>
    </>
  )
}

export default Article;