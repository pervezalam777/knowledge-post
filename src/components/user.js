import React from 'react';

function User(props){
  return (
    <div>
      <img 
        src={props.image? props.image : `${process.env.PUBLIC_URL}/placeholder.jpg`} 
        alt={props.username}
        style={{borderRadius:'100%', width:'2.5rem'}} 
      />
      <h4>{`props.username`}</h4>
      {props.children}
    </div>
  )
}

export default User;