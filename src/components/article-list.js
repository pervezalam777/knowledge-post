import React from 'react';
import ArticleItem from './article-item';

const dummyList = [{id:"1"},{id:"2"},{id:"3"},{id:"4"}];

function ArticleList({articles}){
  return (
    <section>
      <h1>Articles</h1>
      {
        articles &&
        articles.map(article => (
          <ArticleItem key={article.slug} {...article} />
        ))
      }
    </section>
  )
}

export default ArticleList