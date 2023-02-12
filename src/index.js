import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import SignIn from './SignIn.js';

const App = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path='/signIn' element={<SignIn />}></Route>
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
