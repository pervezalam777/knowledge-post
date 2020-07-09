import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from "react-markdown"

import User from './user';

const articleMeta = (id, createdAt, author) => {
  return (
    <div>
      <User {...author}>
        {new Date(createdAt).toLocaleString()}
      </User>
      <ul>
        <NavLink to={`/articles/${id}/edit`}>Edit Article</NavLink>
        <button>delete Article</button>
      </ul>
    </div>
  )
}

function Article(props) {
  return (
    <>
      <header>
        <h1>{props.title}</h1>
        {articleMeta(props.slug, props.createdAt, props.author)}
      </header>
      <main>
        <ReactMarkdown source={props.body}/>
      </main>
      {articleMeta(props.slug, props.createdAt, props.author)}
    </>
  )
}

export default Article;