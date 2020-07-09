import React, { useState, useEffect } from 'react';
import ArticleForm from '../components/article-form';
import { connect } from 'react-redux';
import { publishArticle, resetSuccess } from '../actions/article-action';
import { useParams } from 'react-router-dom';

const initialState = {
  title: '',
  description: '',
  body:'',
  tagList:'',
  dirty:false
}

const getInitialState = (slug, article) => {
  if(slug && article.body){
    console.log('working.......', slug, article)
    const {
      tagList,
      title,
      body,
      description
    } = article;
    return {
      title,
      body,
      description,
      tagList: tagList && tagList.length > 0 ? tagList.join('') : '',
      dirty:false
    }
  }
  return initialState;
}

function ArticleFormContainer({dispatch, article}) {
  const {slug} = useParams();
  const [state, setState] = useState(getInitialState(slug, article));

  let {success, loading, error} = article;

  useEffect(() => {
    if(success && state.dirty) {
      setState(initialState)
    }
    dispatch(resetSuccess())
  }, [state.dirty, success, dispatch])

  const handleChange = (e) => {
    setState({...state, [e.target.id]:e.target.value, dirty:true});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let stateClone = {...state}
    delete stateClone.dirty;
    dispatch(publishArticle(stateClone, slug));
  }
  console.log('State:::::', state)
  return (
    <ArticleForm 
      {...state}
      loading={loading}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

const mapStateToProps = ({ singleArticle }) => {
  return {
    article:singleArticle
  }
}

export default connect(mapStateToProps)(ArticleFormContainer)