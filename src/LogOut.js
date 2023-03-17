import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//NEEDS TO REDIRECT TO HOME MAIN PAGE, USE NAV
const LogOut = (props) => {

    const yesLogOut = localStorage.removeItem('strangers-token');
    return (
        <>
        <h1>You're Logged Out</h1>
        </>
    )
}

export default LogOut;