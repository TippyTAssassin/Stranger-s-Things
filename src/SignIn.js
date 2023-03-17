import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const SignIn = (props) => {
 const [logUsername, setlogUsername] = useState('');
 const [logPassword, setLogPassword] = useState('');
  const signIn = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      });
      const result = await response.json();
      window.localStorage.setItem('strangers-token', result.data.token);
      console.log(result.data.token);
      props.setIsSignedIn(true)

      return result
    } catch (err) {
      console.error(err);
    }
  }
  const handleLogUsernameChange = (event) => {
    console.log(event.target.value);
    setlogUsername(event.target.value);
  }

  const handleLogPasswordChange =(event) => {
    console.log(event.target.value);
    setLogPassword(event.target.value);
  }
  return (
    <>
    <h1>Welcome Back</h1>
     <form id="sign-in-box">
    <p id="sign-in-user">Username</p>
     <input id="sign-in-username"
     type="text" 
     placeholder="username" 
     value = {logUsername}
     onChange = {handleLogUsernameChange}>
     </input>

    <p id="sign-in-pass">Password</p>
     <input id="sign-in-password"
     type="text" 
     placeholder="password" 
     value = {logPassword}
     onChange= {handleLogPasswordChange}>
     </input>
     <button id="sign-in-submit"type='submit' onClick={() => signIn(logUsername,logPassword)}>Log In</button> 
     </form>
     
    </>
  )
}

export default SignIn;