import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <header>
        {
            props.isSignedIn ?
            
            <Link id="post-new"to='/postNewItem'>Post New</Link> :
            null
            
        }
        <Link id="profile"to='/profile'>My Stuff</Link>
        <Link  id="messages"to='/messages'>Messages</Link>
        <Link  id="browse"to='/browse'>Browse</Link>
        <Link  id="log-out"to='/logOut'>Log Out</Link>
       
        </header>
    )
}

export default Nav;