import React from 'react';

//TODO: even on loading of image it should show
// placeholder image.
function User(props){
  return (
    <React.Fragment>
    <div className="user-image">
      <img 
        src={props.image? props.image : `${process.env.PUBLIC_URL}/placeholder.jpg`} 
        alt={props.username}
      />
      </div>
      <div className="user-details">
        <h6 className="mb-0 h6 user-name">{props.username}</h6>
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default User;