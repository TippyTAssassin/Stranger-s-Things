import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <Link to='/profile'>My Stuff</Link>
        <Link to='/messages'>Messages</Link>
        <Link to='/postNewItem'>Post New</Link>
        <Link to='/browse'>Browse</Link>
        <Link>Log Out</Link>
        </>
    )
}

export default Nav;