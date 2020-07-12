import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { autoLogin } from '../actions/auth-actions';

const navigationForAuthenticatedUser = (username) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/articles">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/articles/new">New Article</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/settings">{username}</NavLink>
      </li>
    </ul>
  )
}

const navigationForUnauthenticatedUser = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/articles">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Sign in</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Sign up</NavLink>
      </li>
    </ul>
  )
}

function HeaderNavigation(props) {

  let {dispatch} = props;
  useEffect(()=> {
    dispatch(autoLogin())
  }, [dispatch])

  return (
    <>
      <NavLink className="navbar-brand" to="/">Knowledge Posts</NavLink>
      {
        props.isAuthenticated
          ? navigationForAuthenticatedUser(props.username)
          : navigationForUnauthenticatedUser()
      }
    </>
  )
}

const mapStateToProps = (state) => {
  let { user: { token, isAuthenticated, username } } = state;
  return {
    isAuthenticated: (token && isAuthenticated),
    username
  }
}

export default connect(mapStateToProps)(HeaderNavigation);