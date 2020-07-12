import React, { useEffect } from 'react';
import ArticleItem from './article-item';

function ArticleList({articles}){
  useEffect(() => {
    window.scrollTo(0,0)
  }, [articles]) 

  return (
    <section>
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