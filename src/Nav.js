import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <>
        {
            props.isSignedIn ?
            <Link to='/postNewItem'>Post New</Link> :
            null
            
        }
        <Link to='/profile'>My Stuff</Link>
        <Link to='/messages'>Messages</Link>
        <Link to='/browse'>Browse</Link>
        <Link to='/logOut'>Log Out</Link>
        </>
    )
}

export default Nav;