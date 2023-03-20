import React from 'react';
import { useState } from 'react';

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const PostNewItem = (props) => {
  const [newItemTitle, setNewItemTitle] = useState('');
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
          // CAUSES CAST ERROR TO GET POST
          // props.setBrowseItems([...props.browseItems,{title: newItemTitle}]);
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }

      const handleNewItemTitleChange = (event) => {
        setNewItemTitle(event.target.value);
      }

      const handleNewItemDescription = (event) => {
        setNewItemDescription(event.target.value);
      }

      const handleNewItemPriceChange = (event) => {
        setNewItemPrice(event.target.value);
      }
      
    return(
        <>
        <h1>Post New Item</h1>
            <form>

            <p id="item-title">Item Title</p>
            <input 
            type='text' 
            onChange = {handleNewItemTitleChange}
            value = { newItemTitle }
            placeholder='Name you product'>
            </input>
           
           <p id="item-descrip">Item Description</p>
            <input 
            type='text' 
            onChange = {handleNewItemDescription}
            value = { newItemDescription }
            placeholder='Item description'>
            </input>

            <p id="item-price">Price</p>
            <input 
            type='text' 
            onChange = {handleNewItemPriceChange}
            value ={ newItemPrice }
            placeholder='Ex. $100.00'>
            </input>

            <div id="item-box"></div>
            
            <button id="post-button" type='submit' onClick={()=>makePost(newItemTitle,newItemDescription,newItemPrice, props.singleItem)}>List Item</button>
            
            </form>
            
        </>
        
    )
}
export default PostNewItem;