import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Profile = () => {
    return(
        <>
        <form>
        <h1>My Stuff</h1>
        <p id="p-name">Name</p>
        <input type='text' placeholder='Full Name'></input>
        <p id="p-email">Email</p>
        <input type='text' placeholder='youremail@email.com'></input>
        <p id="p-username">Username</p>
        <input type='text' placeholder='Username'></input>
        <p id="p-location">Location</p>
        <input type='text' placeholder='City, state'></input>
        <button id="submit">Submit</button>
        </form>
        </>
    )
}
export default Profile;