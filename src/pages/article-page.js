import React from 'react';
import Article from '../components/article';

function ArticlePage(props){
  return (
    <section>
      <Article 
        title={`Somebody`}
        id={`id`}
        body={`This is the body`}
      />
      <footer>
        <span>Comments component</span>
      </footer>
    </section>
  )
}

export default ArticlePage