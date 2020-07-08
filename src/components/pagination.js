import React from 'react';

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
    console.log(e.target.innerText);
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