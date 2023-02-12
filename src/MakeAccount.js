import React from 'react';
import { Link } from 'react-router-dom';

const MakeAccount = () => {
    return (
        <>
        <h1>Create Account</h1>
        <p>Username</p>
        <input type='text' placeholder='username'></input>
        <p>Password</p>
        <input type='text' placeholder='password'></input>
        <p>Re-enter Password</p>
        <input type='text' placeholder='re-enter password'></input>
        <Link to="/profile">
        <button>Sumbit</button>
        </Link>
        </>
    
    )
}

export default MakeAccount;