import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

import User from './user';
import { dateFormat } from '../utility/util';
import { getErrorElement } from './component-util';

const getArticleMeta = ({createdAt, author, owner}, handleEdit, handleDelete) => {
  return (
    <div className='article-container user-profile'>
      <User {...author}>
        <small>{ dateFormat(createdAt)}</small>
      </User>
      {
        owner &&  <div className='article-actions-btn'>
          <button className='btn btn-outline-primary mr-2' onClick={handleEdit}>Edit Article</button>
          <button className='btn btn-outline-danger' onClick={handleDelete}>Delete Article</button>
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

  let articleMeta = getArticleMeta({createdAt, author, owner}, handleEdit, handleDelete)
 
  return (
    <>
      <header className='d-block bg-dark text-white user-profile user-black-profile' >
        <h1 className='article-title'>{title}</h1>
        {articleMeta}
        {props.error && getErrorElement(error)}
      </header>
      <main className='article-area'>
        <ReactMarkdown source={body}/>
      </main>
      <hr />
      <div className='d-flex justify-content-center'>
        {articleMeta}
      </div>
    </>
  )
}

export default Article;