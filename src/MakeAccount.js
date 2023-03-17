import React from 'react';
import { useState } from 'react';
//TOKEN NEEDS TO NOT BE HARD CODED
// USE NAV TO REDIRECT TO PROFILE OR HOME 
//USE STATE TO GET RID OF HARD CODING
console.log('test');

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const MakeAccount = () => {
  const [newUserUsername, setNewUserUsername] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserRePassword, setNewUserRePassword] = useState('');
  const newAccount = async(user_n, p_word) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: user_n,
            password: p_word
          }
        })
      });
      console.log('hit');
      const result = await response.json();
      window.localStorage.setItem('strangers-token', result);
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
    
  }
  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setNewUserUsername(event.target.value);
  }

  const handlePasswordChange = (event) =>{
    console.log(event.target.value);
    setNewUserPassword(event.target.value);
  }

  const handleRePasswordChange = (event) => {
    console.log(event.target.value);
    setNewUserRePassword(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();
  }

  return(
    <>
    <form id="account-form"onSubmit={submitForm}>
    <h1 id="account-box">Create Account</h1>
    <p id="account-username">Username</p>
    <input id="username-box"
     type ='text'
     placeholder='username' 
     onChange={ handleUsernameChange } 
     value={newUserUsername}>
     </input>

    <p id="account-password">Password</p>
    <input id="password-box"
     type ='text'
     placeholder='password' 
     onChange={ handlePasswordChange } 
     value={newUserPassword}>
     </input>

    <p id="account-re-password">Re-enter password</p>
    <input 
    type ='text' 
    placeholder='re-enter password'
    onChange={ handleRePasswordChange } 
    value={newUserRePassword}>
    </input>

    <button id="register"type='submit' onClick={() => newAccount (newUserUsername,newUserPassword)}>Register</button>
    </form>
    </>
  )
}

export default MakeAccount;