import React from 'react';
import { useState } from 'react';

//TOKEN INVAILD DUE TO HARD CODING IN MAKE ACCTOUNT.
//TO FIX THIS PAGE, FIX MAKE ACCOUNT
//INTRO TO REACT VID 1:08
const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const PostNewItem = (props) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

    const makePost = async (title, description, price) => {
      
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
                title,
                description,
                price,
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

      const handleNewItemNameChange = (event) => {
        console.log(event.target.value);
        setNewItemName(event.target.value);
      }
      
      const handleNewItemPriceChange = (event) => {
        console.log(event.target.value)
        setNewItemPrice(event.target.value);
      }

      const handleNewItemDescription = (event) => {
        console.log(event.target.value);
        setNewItemDescription(event.target.value);
      }

    return(
        <>
        <h1>Post New Item</h1>
            <form>

            <p>Item Name</p>
            <input 
            type='text' 
            onChange = {handleNewItemNameChange}
            value = { newItemName }
            placeholder='Name you product'>
            </input>

            <p>Price</p>
            <input 
            type='text' 
            onChange = {handleNewItemPriceChange}
            value ={ newItemPrice }
            placeholder='Ex. $100.00'>
            </input>

            <input type='radio'></input>
            <p>New</p>

            <input type='radio'></input>
            <p>Used</p>

            <div id="item-box"></div>
            <input 
            type='text' 
            onChange = {handleNewItemDescription}
            value = { newItemDescription }
            placeholder='Item description'>
            </input>
            <button tpye='submit' onClick={makePost}>List Item</button>
            </form>
            
        </>
    )
}

export default PostNewItem;