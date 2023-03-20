import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DeletePost from './DeletePost.js';

const COHORT_NAME = '2211-ftb-et-web-am';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const GetPost = (props) => {
  const { id } = useParams();
    const [postDescription, setPostDescription] =useState('');
    
    useEffect(() => {
      const updatePost = async (title,description,price) => {
        try {
            const token = localStorage.getItem('strangers-token');
          const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: "PATCH",
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
          setPostDescription(result.post);
          return result
        } catch (err) {
          console.error(err);
        }
      }
      updatePost();
    }, [])
    const [singleItem] = props.browseItems.filter((browseItem) =>{
      return browseItem._id === id;
    })
    if(!singleItem) {
      return null
    }
    return (
      <>
        <h1>Post number: {id} </h1>
        <h1>Description:{singleItem.description}</h1>
           
          
          <DeletePost 
          isSignedIn={props.isSignedIn} 
          singleItem={singleItem} mjjkm
          setBrowseItems={props.setBrowseItems}
          browseItems={props.browseItems}
        />
       
        </>

    )
    
}

export default GetPost;