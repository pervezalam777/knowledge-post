import React from 'react';
import { updateRequestedOffset } from '../actions/articles-action';

const getTotalPageCount = (totalPosts, countPerPage) => {
  return Math.ceil(totalPosts/countPerPage);
}

const generatePagination = (pageCount, handleClick,  currentPage = 1) => {
  const pagesButton = []
  for(let i = 1; i <= pageCount; i++){
    pagesButton.push(
      <button 
        className={i === currentPage ? 'active':''}
        disabled={i === currentPage}
        onClick={handleClick} 
        key={i}
      >{i}</button>
    )
  }
  return pagesButton;
}

function Pagination(props){

  const handleClick = (e) => {
    e.target.disabled = true;
    props.dispatch(updateRequestedOffset(parseInt(e.target.innerText)-1));
  }

  return (
    <nav>
      {generatePagination(
        getTotalPageCount(props.totalPosts, props.countPerPage),
        handleClick,
        props.currentPage
      )}
    </nav>
  )
}

export default Pagination;