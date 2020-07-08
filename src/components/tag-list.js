import React from 'react';

function TagList(props) {
  
  const handleClick = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <nav>
      {
        props.tags.map((tag) => (
          <button className='tag' onClick={handleClick} key={tag}>{tag}</button>
        ))
      }
    </nav>
  )
}

export default TagList;