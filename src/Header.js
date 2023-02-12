import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
        <header>
            <span>Stranger's Things</span>
        </header>
        <p>Not a member?</p>
        <Link to='/makeAccount'>Join Now</Link>
        <p>Have an account?</p>
        <Link to='/signIn'>Log In</Link>
        </>
        
    )
}


export default Header;