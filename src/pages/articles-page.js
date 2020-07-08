import React from 'react';
import ArticleList from '../components/article-list';
import Pagination from '../components/pagination';
import TagList from '../components/tag-list';

function Articles() {
  return (
    <>
      <nav>
        <button>Personal Posts</button>
        <button>Global Posts</button>
      </nav>
      <ArticleList />
      <section>
        <TagList tags={['react', 'angular', 'vue', 'ember', 'lit']} />
      </section>
      <Pagination 
        totalPosts={113}
        countPerPage={10}
        currentPage={3}
      />
    </>
  )
}

export default Articles;