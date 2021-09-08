import React from "react";

import { useHistory, useLocation } from "react-router-dom";

import axios from "../auth/axiosConfig";
import { BlogFormat } from "./blogFormat";


// For editing already created blogs
export  function EditBlog ({match}){
  let pk = match.params.pk;
  const {query} = useLocation();
  const history = useHistory();
  function handleClick (blogData) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    axios
    .put(`blogs/api/post_edit/${pk}`, blogData)
    .then(res => {
      history.goBack();
    })
    .catch( (error) => alert('token expired. login again or not authorized')) 
  }
  return (
    <BlogFormat handleClick={handleClick} blogData={query}/>
  );
}
  