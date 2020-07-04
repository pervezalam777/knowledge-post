import React from 'react';
import {Link} from 'react-router-dom'

function SignUpPage(){
  return <section>
    <form>
      <h1>Sign up</h1>
      <Link to="/login">Have an account?</Link>
      <br />
      <label htmlFor="username">Username: </label>
      <input 
        type="text" id="username"
        placeholder="Username" 
        name="username" required 
      />
      <br/>
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
      <button type="submit">Sign up</button>
    </form>
  </section>

}

export default SignUpPage;