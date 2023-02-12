import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <>
     <h1>Welcome Back</h1>
    <input type="text" placeholder="username"></input>
    <input type="text" placeholder="password"></input>
    <button>Log In</button>
    </>
  )
}

export default SignIn;