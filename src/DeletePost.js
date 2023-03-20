import React from 'react';
import { useState } from 'react';

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const DeletePost = (props) => {
  console.log('SINGLEITEM',props.singleItem);
  const [removePost, setRemovepost] =useState('');
  const deletePost = async (id) => {
    try {
      const token = localStorage.getItem('strangers-token');
      const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
       const updatedList = props.browseItems.filter((item)  => {
         return item._id !== id;
       })
      props.setBrowseItems(updatedList);
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
   
    return (
      <>
      {
        props.isSignedIn  ?
        <button type="sumit" onClick={()=>deletePost(props.singleItem._id)}>Delete Post</button> :
        null
      }

        
        </>
    )
}

export default DeletePost;

