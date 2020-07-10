import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from "react-markdown"

import User from './user';

const getErrorElement = (error) => {
  console.log('error', error)
  if(error.indexOf('\n')){
    return error
      .split('\n')
      .map((msg, i) => (<p className='error' key={i}>{msg}</p>))
  }
  return (<p className='error'>{error}</p>)
}

const articleMeta = ({id, createdAt, author, owner}, handleDelete) => {
  return (
    <div>
      <User {...author}>
        {new Date(createdAt).toLocaleString()}
      </User>
      {
        owner &&  <ul>
          <NavLink to={`/articles/${id}/edit`}>Edit Article</NavLink>
          <button onClick={handleDelete}>delete Article</button>
        </ul>
      }
    </div>
  )
}

function Article(props) {
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
  let meta = articleMeta({slug, createdAt, author, owner}, handleDelete)
  return (
    <>
      <header>
        <h1>{title}</h1>
        {meta}
        {props.error && getErrorElement(error)}
      </header>
      <main>
        <ReactMarkdown source={body}/>
      </main>
      {meta}
    </>
  )
}

export default Article;