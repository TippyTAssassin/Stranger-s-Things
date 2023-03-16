import React, { useEffect } from 'react';
import { useState } from 'react';
//TOKEN NEEDS TO NOT BE HARD CODED
// USE NAV TO REDIRECT TO PROFILE OR HOME 
console.log('test');

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const MakeAccount = () => {
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
    window.localStorage.setItem('strangers-token', result.data.token);
  }
  return(
    <>
    <form>
    <h1>Create Account</h1>
    <p>Username</p>
    <input type ='text' placeholder='username'></input>
    <p>Password</p>
    <input type ='text' placeholder='password'></input>
    <p>Re-enter password</p>
    <input type ='text' placeholder='re-enter password'></input>
    <button onClick={newAccount}>Register</button>
    </form>
    </>
  )
}

export default MakeAccount;