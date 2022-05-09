import React from 'react';
import notFound from '../../../img/notFound.png'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;