import React, { useEffect, useState } from 'react';
import PostNewItem from './PostNew.js';
import { Link } from 'react-router-dom';

const Browse = (props) => {
    
    return (
        <>
        <h1>Browse</h1>
        <input id="browse-input" type='text' placeholder='What are you looking for?'></input>
        <button id="search">Search</button>
         
        <form id="browse-box">
            <ol>
            {
              props.browseItems.map((item, index) => {
                  return (
                  <li key={index}><Link to={`post/${item._id}`}>{item.title}</Link></li>
                  )
              })  
            }
            </ol> 
            
        </form>
        </>
    )
}

<PostNewItem />

export default Browse;