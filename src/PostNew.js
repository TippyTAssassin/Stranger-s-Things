import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//TOKEN INVAILD DUE TO HARD CODING IN MAKE ACCTOUNT.
//TO FIX THIS PAGE, FIX MAKE ACCOUNT
const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const PostNewItem = (props) => {
    const makePost = async () => {
        try {
          const token = localStorage.getItem('strangers-token');
          const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title: "My favorite stuffed animal",
                description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
                price: "$480.00",
                willDeliver: true
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
      
    return(
        <>
        <h1>Post New Item</h1>

            <form>
            <p>Item Name</p>
            <input type='text' placeholder='Name you product'></input>
            <p>Price</p>
            <input type='text' placeholder='Ex. $100.00'></input>
            <input type='radio'></input>
            <p>New</p>
            <input type='radio'></input>
            <p>Used</p>
            <div id="item-box"></div>
            <input type='text' placeholder='Item description'></input>
            <button onClick={makePost}>List Item</button>
            </form> 
        </>
    )
}

export default PostNewItem;