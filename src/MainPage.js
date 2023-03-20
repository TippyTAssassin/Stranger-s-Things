import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MainPage = () => {
    const [displayHomeInfo, setDisplayHomeInfo] = useState(true)
    return(
        <form id="main-page-box">
        {
            displayHomeInfo ?
            <div id="main-page-box">
            <p id="sign-up">Not a member?</p>
            <Link to='/makeAccount'>
             <button onClick={() => setDisplayHomeInfo(false)}>Join now</button>
            </Link>
            <p id="log-in">Have an account</p>
            <Link to='/signIn'>
             <button onClick={() => setDisplayHomeInfo(false)}>Log in</button>
            </Link> 
            </div> :
            null
        }
    </form>
    )
}
export default MainPage;