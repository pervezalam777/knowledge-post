import React from 'react';
import ArticleItem from './article-item';

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