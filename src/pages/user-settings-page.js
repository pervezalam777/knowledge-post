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
    <header className='d-block p-2 bg-dark text-white' >
      <div className='sub-heading user-logout-section'>
        <User {...user}></User>
        <div className='button-container'>
        <button className='btn btn-outline-light' onClick={handleLogout}>Logout</button>
        </div>
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