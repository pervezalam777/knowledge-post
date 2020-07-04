import React from 'react';
import ArticleItem from './article-item';

const dummyList = [{},{},{},{}];

function ArticleList(props){
  return (
    <section>
      <h1>List of articles</h1>
      {
        dummyList.map(item => (
          <ArticleItem />
        ))
      }
    </section>
  )
}

export default ArticleList