import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
    <h1>Welcome Back</h1>
     <form>
     <input type="text" placeholder="username"></input>
     <input type="text" placeholder="password"></input>
     <Link to='/browse'>
     <button>Log In</button> 
     </Link>
     </form>
    </>
  )
}

export default SignIn;