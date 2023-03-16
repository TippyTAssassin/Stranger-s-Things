import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import SignIn from './SignIn.js';
import MakeAccount from './MakeAccount.js';
import Profile from './Profile.js';
import Nav from './Nav.js';
import Messages from './Messages.js';
import Browse from './Browse.js';
import PostNewItem from './PostNew.js';
import Logout from './LogOut.js';
import MainPage from './MainPage.js';


const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(window.localStorage.getItem('strangers-token'));
    return (
        <>
        <Nav isSignedIn={isSignedIn}/>
        <Header />
        <Routes>
            <Route path='/signIn' element={<SignIn setIsSignedIn={setIsSignedIn} />}></Route>
            <Route path='/makeAccount' element={<MakeAccount/>}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/messages' element={<Messages />}></Route>
            <Route path='/browse' element={<Browse/>}></Route>
            <Route path='/postNewItem' element={<PostNewItem isSignedIn={isSignedIn} />}></Route>
            <Route path='/logOut' element={<Logout/>}></Route>
        </Routes>
        </>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<HashRouter>
  <App />
</HashRouter>
);
