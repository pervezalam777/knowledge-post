import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ArticleList from '../components/article-list';
import Pagination from '../components/pagination';
import { getArticles } from '../actions/articles-action';

function Articles(props) {

  let { offset, requestedOffset, dispatch } = props;

  //NOTE: It should also reload if new post published.
  useEffect(() => {
    dispatch(getArticles());
  }, [requestedOffset, dispatch])

  return (
    <>
      <ArticleList articles={props.articles} />
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
  let { articles: { offset, total, countPerPage, requestedOffset } } = state;
  let articles = state.articles[`${countPerPage}-${offset}`]
  return {
    offset,
    total,
    countPerPage,
    articles,
    requestedOffset
  }
}

export default connect(mapStateToProps)(Articles);