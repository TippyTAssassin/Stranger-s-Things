import React from 'react';
import { Link } from 'react-router-dom';

const LogOut = () => {
    return (
        <>
        <p>Are you sure you want to log out?</p>
        <Link to='/'>
            <button>Yes, log out</button>
        </Link>
        <Link to='/profile'>
            <button>No, i'm not done</button>
        </Link>
        </>
    )
}

export default LogOut;