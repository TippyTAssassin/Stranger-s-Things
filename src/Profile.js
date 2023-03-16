import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Profile = () => {
    return(
        <>
        <h1>My Stuff</h1>
        <p>Name</p>
        <input type='text' placeholder='Full Name'></input>
        <p>Email</p>
        <input type='text' placeholder='youremail@email.com'></input>
        <p>Username</p>
        <input type='text' placeholder='Username'></input>
        <p>Location</p>
        <input type='text' placeholder='City, state'></input>
        <button>Submit</button>
        </>
    )
}
export default Profile;