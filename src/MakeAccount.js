import React, { useEffect } from 'react';
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
  const newAccount = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
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
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
    window.localStorage.setItem('strangers-token');
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

  return(
    <>
    <form>
    <h1>Create Account</h1>
    <p>Username</p>
    <input 
     type ='text'
     placeholder='username' 
     onChange={ handleUsernameChange } 
     value={newUserUsername}>
     </input>

    <p>Password</p>
    <input 
     type ='text'
     placeholder='password' 
     onChange={ handlePasswordChange } 
     value={newUserPassword}>
     </input>

    <p>Re-enter password</p>
    <input 
    type ='text' 
    placeholder='re-enter password'
    onChange={ handleRePasswordChange } 
    value={newUserRePassword}>
    </input>

    <button type='submit' onClick={newAccount}>Register</button>
    </form>
    </>
  )
}

export default MakeAccount;