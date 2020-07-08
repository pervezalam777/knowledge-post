import React from 'react';
import Article from '../components/article';

function ArticlePage(props){
  return (
    <section>
      <Article 
        title={`Somebody`}
        id={`id`}
        body={`# story\n\nThis is a paragraph`}
      />
      <footer>
        <span>Comments component</span>
      </footer>
    </section>
  )
}

export default ArticlePage