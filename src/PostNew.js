import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const PostNewItem = () => {
    return(
        <>
        <Nav />
        <h1>Post New Item</h1>
        <p>Item Name</p>
        <input type='text' placeholder='Name you product'></input>
        <p>Price</p>
        <input type='text' placeholder='Ex. $100.00'></input>
        <input type='radio'></input>
        <p>New</p>
        <input type='radio'></input>
        <p>Used</p>
        <div id="item-box"></div>
        <button>List Item</button>
        </>
    )
}

export default PostNewItem;