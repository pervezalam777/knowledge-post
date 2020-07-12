import React from 'react';
import User from '../components/user';
import { connect } from 'react-redux';
import { logout } from '../actions/auth-actions';
import { useHistory } from 'react-router-dom';

function UserSettings({user, dispatch}) {
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  }

  return (
    <header className="d-block p-2 bg-dark text-white" >
      <div style={{ margin: "0rem 1rem" }}>
        <User {...user}></User>
        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserSettings);