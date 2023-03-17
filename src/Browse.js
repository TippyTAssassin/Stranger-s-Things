import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//DELETE POST GOES IN HERE
// IN CONSOLE "IS AUTHOR"
console.log('yo');

const Browse = (props) => {
    const [browseItems, setBrowseItems ] = useState([]);

    useEffect(() => {
        const getItems = async() => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
            const result = await response.json();
            setBrowseItems(result.data.posts)

        }
        getItems();
    }, [])
    return (
        <>
        <h1>Browse</h1>
        <input id="browse-input" type='text' placeholder='What are you looking for?'></input>
        <button id="search">Search</button>
         
        <form id="browse-box">
            {
              browseItems.map((item, index) => {
                  return <h3 key={index}>{item.title}</h3>
              })  
            }
        </form>
        {
            props.isSignedin?
          <button id="delete">Delete Post</button> :
          null
        }
        
        </>
    )
}

export default Browse;