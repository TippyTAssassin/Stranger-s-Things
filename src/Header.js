import React from 'react';
import { useState } from 'react';
import MainPage from './MainPage';

const Header = () => {
    const [showMainPage, setMainPage] = useState(true);
    return (
        <>
        <header id="title">
           <span>Stranger's Things</span>
        </header>
        {
            showMainPage ?
            <>
            <MainPage />
            </> :
            null
        }
        </>

    )
}
export default Header;