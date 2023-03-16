import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//NEEDS TO REDIRECT TO HOME MAIN PAGE, USE NAV
const LogOut = (props) => {
    const yesLogOut = localStorage.removeItem('strangers-token');
    return (
        <>
        </>
    )
}

export default LogOut;