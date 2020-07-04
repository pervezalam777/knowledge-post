import React from 'react';
import {Link} from 'react-router-dom'

function LoginPage(){
  return <section>
    <form>
      <h1>Sign in</h1>
      <Link to="/register">Need an account?</Link>
      <br />
      <label htmlFor="email">Email: </label>
      <input 
        type="text" id="email"
        placeholder="Email" 
        name="email" required 
      />
      <br/>
      <label htmlFor="password">Password: </label>
      <input 
        id="password" type="password"
        placeholder="Password" 
        name="password" required 
      />
      <br />
      <button type="submit">Sign in</button>
    </form>
  </section>
}

export default LoginPage;