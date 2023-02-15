import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Messages = () => {
    return (
        <>
        <Nav />
        <h1>Messages</h1>
        <p>Incoming</p>
        <input type='text' placeholder=''></input>
        <p>Sent</p>
        <input type='text' placeholder=''></input>
        <p>Create New</p>
        <input type='text' placeholder=''></input>
        <button>Submit</button>
        </>
    )
}

export default Messages;