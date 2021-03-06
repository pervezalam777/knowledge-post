import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CommentContainer from './comment-container';
import { useParams } from 'react-router-dom';
import { loadComments } from '../actions/comment-action';

const isUserOwner = (author, user) => {
  return author.username === user.username;
}

function CommentList({dispatch, articleComments:{comments}, user}) {
  const { slug } = useParams();

  useEffect(() => {
    if(slug){
      dispatch(loadComments(slug))
    }
  }, [slug, dispatch])

  return (
    <>
      {
        user.isAuthenticated && 
        <CommentContainer dispatch={dispatch} edit /> 
      }
      {
        comments &&
        comments.map(comment => (
          <CommentContainer 
            key={comment.id} 
            {...comment}
            dispatch={dispatch}
            owner={isUserOwner(comment.author, user)}
          />
        ))
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user:state.user,
    articleComments: state.articleComments
  }
}

export default connect(mapStateToProps)(CommentList);