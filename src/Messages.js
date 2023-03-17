import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Messages = () => {
    return (
        <>
        <form>
        <h1>Messages</h1>
        <p id="incoming">Incoming</p>
        <input  type='text' placeholder=''></input>
        <p id="sent">Sent</p>
        <input type='text' placeholder=''></input>
        <p id="create-new">Create New</p>
        <input type='text' placeholder=''></input>
        <button id="message-submit">Submit</button>
        </form>
        </>
    )
}

export default Messages;