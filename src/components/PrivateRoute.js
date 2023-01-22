import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem('token'));
    console.log(children)
   

  return (

    (token)?children:<Navigate to="/login" />      
  )
}

export const PublicRoute = ({children}) => {
    const [token1,setToken] = useState(localStorage.getItem('token'));
    console.log(children)
    useEffect(()=>{
        console.log(token1)
    },[])

  return (

    (!token1)?children:<Navigate to="/"/>      
  )
}


export default PrivateRoute