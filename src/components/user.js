import React from 'react';

//TODO: even on loading of image it should show
// placeholder image.
function User(props){
  return (
    <div className="d-flex flex-row bd-highlight align-items-center mb-3">
      <img 
        className="mr-1"
        src={props.image? props.image : `${process.env.PUBLIC_URL}/placeholder.jpg`} 
        alt={props.username}
        style={{borderRadius:'100%', width:'2rem', height:'2rem'}} 
      />
      <div className="">
        <h6 className="mb-0 h6">{props.username}</h6>
        {props.children}
      </div>
    </div>
  )
}

export default User;