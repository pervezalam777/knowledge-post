import React from 'react';
import {NavLink} from 'react-router-dom'

const navigationForAuthenticatedUser = (userName) => {
  return (
    <ul>
      <NavLink style={{marginLeft:"1rem"}} to="/articles">Home</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/articles/new">New Article</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/settings">Settings</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/settings">{userName}</NavLink>
    </ul>
  )
}

const navigationForUnauthenticatedUser = () => {
  return (
    <ul style={{display:"inline-block"}}>
      <NavLink style={{marginLeft:"1rem"}} to="/">Home</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/login">Sign in</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/register">Sign up</NavLink>
    </ul>
  )
}

function HeaderNavigation(props) {
  return (
    <nav>
      <span className="logo" >Knowledge Posts</span>
      {
        props.isAuthenticated 
        ? navigationForAuthenticatedUser(props.userName)
        : navigationForUnauthenticatedUser()
      }
    </nav>
  )
}

export default HeaderNavigation;