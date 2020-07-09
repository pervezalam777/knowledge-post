import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';

const navigationForAuthenticatedUser = (username) => {
  return (
    <ul style={{display:"inline-block"}}>
      <NavLink style={{marginLeft:"1rem"}} to="/articles">Home</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/articles/new">New Article</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/settings">Settings</NavLink>
      <NavLink style={{marginLeft:"1rem"}} to="/settings">{username}</NavLink>
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
        ? navigationForAuthenticatedUser(props.username)
        : navigationForUnauthenticatedUser()
      }
    </nav>
  )
}

const mapStateToProps = (state) => {
  let {user:{token, isAuthenticated, username}} = state;
  return {
    isAuthenticated: (token && isAuthenticated),
    username
  }
}

export default connect(mapStateToProps)(HeaderNavigation);