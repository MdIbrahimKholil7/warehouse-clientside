import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token,setToken]=useState('')
    const email=user?.email
    console.log(user)
    useEffect(()=>{
        (async()=>{
            const {data}=await axios.post('http://localhost:5000/login',{email})
            setToken(data.accessToken)
        })()
    },[email])
    return [token]
};

export default useToken;