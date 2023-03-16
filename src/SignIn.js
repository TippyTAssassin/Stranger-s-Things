import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const SignIn = (props) => {
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      });
      const result = await response.json();
      window.localStorage.setItem('strangers-token', result.data.token);
      props.setIsSignedIn(true)

      return result
    } catch (err) {
      console.error(err);
    }
    navigate("/browse");
  }
  return (
    <>
    <h1>Welcome Back</h1>
     <form>
     <input type="text" placeholder="username"></input>
     <input type="text" placeholder="password"></input>
     <button onClick={signIn}>Log In</button> 
     </form>
     
    </>
  )
}

export default SignIn;