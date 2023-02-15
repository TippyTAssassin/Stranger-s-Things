import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Browse = () => {
    const [browseItems, setBrowseItems ] = useState([]);

    useEffect(() => {
        const getItems = async() => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
           const result = await response.json();

            console.log(result);
            setBrowseItems(result.data.posts)

        }
        getItems();
    }, [])
    return (
        <>
        <Nav />
        <h1>Browse</h1>
        <input type='text' placeholder='What are you looking for?'></input>
        <button>Search</button>
        <form>
            {
              browseItems.map((item, index) => {
                  return <h3 key={index}>{item.title}</h3>
              })  
            }
        </form>
        </>
    )
}

export default Browse;