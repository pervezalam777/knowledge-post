import React, { useEffect, useState } from 'react';
import Article from '../components/article';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getArticle, deleteArticle, resetSuccess } from '../actions/article-action';
import CommentList from '../containers/comment-list';

const isOwner = ({author:{username}}, authUser) => (username && authUser && username === authUser)

function ArticlePage({dispatch, article, loggedInUsername}){
  let { slug } = useParams();
  let history = useHistory();
  let [deleted, setDeleted] = useState(false);
  
  useEffect(() => {
    dispatch(getArticle(slug))
  }, [slug, dispatch])

  useEffect(() => {
    if(deleted && article.success){
      history.replace('/');
    }
  }, [article.success, deleted, history])

  const handleDelete = () => {
    dispatch(resetSuccess());
    setDeleted(true);
    dispatch(deleteArticle(slug));
  }

  if(!article.slug){
    return <p>Loading....</p>
  }

  return (
    <section>
      <Article 
        {...article} 
        handleDelete={handleDelete} 
        owner={isOwner(article, loggedInUsername)} 
      />
      <footer className='flex-row'>
        <div className='flex-column'>
          <CommentList />
        </div>
      </footer>
    </section>
  )
}



const mapStateToProps = (state) => {
  return {
    loggedInUsername: state.user.username,
    article: {...state.singleArticle}
  }
}

export default connect(mapStateToProps)(ArticlePage)