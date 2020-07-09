import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../components/article-list';
import Pagination from '../components/pagination';
import TagList from '../components/tag-list';
import { getArticles } from '../actions/articles-action';

function Articles(props) {

  let {offset, requestedOffset, dispatch, isLoggedIn} = props;
  
  //NOTE: It should also reload if new post publishe\.
  useEffect(() => {  
    dispatch(getArticles());
  }, [requestedOffset, dispatch])

  return (
    <>
      <nav>
        {isLoggedIn && <button>Personal Posts</button>}
        <button>Global Posts</button>
      </nav>
      <ArticleList articles={props.articles} />
      <section>
        <TagList tags={['react', 'angular', 'vue', 'ember', 'lit']} />
      </section>
      <Pagination 
        totalPosts={props.total}
        countPerPage={props.countPerPage}
        currentPage={offset + 1}
        dispatch={props.dispatch}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  let {articles:{offset, total, countPerPage, requestedOffset}} = state;
  let articles = state.articles[`${countPerPage}-${offset}`]
  return {
    isLoggedIn: state.user.isAuthenticated,
    offset,
    total,
    countPerPage,
    articles,
    requestedOffset
  }
}

export default connect(mapStateToProps)(Articles);