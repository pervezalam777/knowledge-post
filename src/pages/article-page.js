import React, { useEffect } from 'react';
import Article from '../components/article';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArticle } from '../actions/article-action';

function ArticlePage({dispatch, article}){
  let { slug } = useParams();
  console.log('article page..... ', slug)
  
  useEffect(() => {
    dispatch(getArticle(slug))
  }, [slug, dispatch])

  if(!article.slug){
    return <p>Loading....</p>
  }
  return (
    <section>
      <Article {...article} />
      <footer>
        <span>Comments component</span>
      </footer>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    article: {...state.singleArticle}
  }
}

export default connect(mapStateToProps)(ArticlePage)