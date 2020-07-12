import React, { useState } from 'react';
import CommentForm from '../components/comment-form';
import Comment from '../components/comment';
import { useParams } from 'react-router-dom';
import { postComment, deleteComment } from '../actions/comment-action';

function CommentContainer(props) {
  const { slug } = useParams();
  const [comment, setComment] = useState(props.body || '');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(postComment(slug, {body:comment}));
  }

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handleDelete = () => {
    props.dispatch(deleteComment(slug, props.id));
  }

  if(props.edit){
    return <CommentForm 
      comment={comment}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  }
  return <Comment 
    comment={comment}
    author={props.author}
    handleDelete={handleDelete}
    owner={props.owner}
  />
}

export default CommentContainer;