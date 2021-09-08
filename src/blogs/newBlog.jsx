import React from "react";

import { useHistory } from "react-router-dom";

import axios from "../auth/axiosConfig";
import { BlogFormat } from "./blogFormat";

// For creating new blog
export function NewBlog (){
  const history = useHistory();
  function handleClick (blogData) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    axios
    .post('blogs/api/create_blog/', blogData)
    .then(res => {
      alert('Blog Created')
      history.goBack(); 
    })
    .catch((error) => {
      alert("jwt token expired. login again")
    })
  
  }
  return (
    <BlogFormat handleClick={handleClick}/>
  );
}
  