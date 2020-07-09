import React, { useState, useEffect } from 'react';
import ArticleForm from '../components/article-form';
import { connect } from 'react-redux';
import { publishArticle } from '../actions/article-action';

const initialState = {
  title: '',
  description: '',
  body:'',
  tagList:'',
  dirty:false
}

function ArticleFormContainer({dispatch, publishing, publishError, published}) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if(published && state.dirty) {
      setState(initialState)
    }
  }, [state.dirty, published])

  const handleChange = (e) => {
    setState({...state, [e.target.id]:e.target.value, dirty:true});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let stateClone = {...state}
    delete stateClone.dirty;
    dispatch(publishArticle(stateClone));
  }

  return (
    <ArticleForm 
      {...state}
      publishing={publishing}
      publishError={publishError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

const mapStateToProps = ({
  singleArticle:{
    publishError,
    publishing,
    published
  }
}) => {
  return {
    publishError,
    publishing,
    published 
  }
}

export default connect(mapStateToProps)(ArticleFormContainer)