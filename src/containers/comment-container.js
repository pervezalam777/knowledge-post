import React, { useState } from 'react';
import CommentForm from '../components/comment-form';
import Comment from '../components/comment';
import { useParams } from 'react-router-dom';
import { postComment, deleteComment } from '../actions/comment-action';

function CommentContainer(props) {
  const { slug } = useParams();
  const [comment, setComment] = useState(props.body || '');
  const [edit, setEdit] = useState(props.edit || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: code for update comment
    //once api is available
    props.dispatch(postComment(slug, {body:comment}));
  }

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handleEdit = () => {
    setEdit(true);
  }

  const handleDelete = () => {
    props.dispatch(deleteComment(slug, props.id));
  }

  if(edit){
    return <CommentForm 
      comment={comment}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  }
  return <Comment 
    comment={comment}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
}

export default CommentContainer;