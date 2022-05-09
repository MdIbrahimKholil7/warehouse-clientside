import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token,setToken]=useState('')
    const email=user?.email
    console.log(email)
    useEffect(()=>{
        (async()=>{
          if(email){
            const {data}=await axios.post('https://tranquil-falls-56090.herokuapp.com/login',{email})
            console.log(data)
            localStorage.setItem('accessToken',data.accessToken)
            setToken(data.accessToken)
          }
        })()
    },[email])
    return [token]
};

export default useToken;