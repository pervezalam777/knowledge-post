import React from 'react';
import ArticleItem from './article-item';

const dummyList = [{id:"1"},{id:"2"},{id:"3"},{id:"4"}];

function ArticleList(props){
  return (
    <section>
      <h1>List of articles</h1>
      {
        dummyList.map(item => (
          <ArticleItem key={item.id} />
        ))
      }
    </section>
  )
}

export default ArticleList