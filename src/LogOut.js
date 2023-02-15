import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const LogOut = () => {
    return (
        <>
        <Nav />
        <p>Are you sure you want to log out?</p>
        <Link>
            <button>Yes, log out</button>
        </Link>
        <Link to='/browse'>
            <button>No, i'm not done</button>
        </Link>
        </>
    )
}

export default LogOut;