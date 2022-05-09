import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    console.log(user)
    const [token,setToken]=useState('')
    const email=user?.email
    console.log(email)
    useEffect(()=>{
        (async()=>{
          if(email){
            const {data}=await axios.post('http://localhost:5000/login',{email})
            localStorage.setItem('accessToken',data.accessToken)
            setToken(data.accessToken)
          }
        })()
    },[email])
    return [token]
};

export default useToken;