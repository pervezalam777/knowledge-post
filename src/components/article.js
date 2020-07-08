import React from 'react';
import { NavLink } from 'react-router-dom';

function Article(props) {
  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <div>
          {/** user component */}
          <ul>
            <NavLink to={`/articles/${props.id}/edit`}>Edit Article</NavLink>
            <button>delete Article</button>
          </ul>
        </div>
      </header>
      <main>{props.body}</main>
    </>
  )
}

export default Article;