import React from 'react';
import { Link } from 'react-router-dom';

const Messages = () => {
    return (
        <>
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