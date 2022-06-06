import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css'
const ServiceCard = ({ service }) => {
    const { servicenName, quantity, price, Supplier, img, desc, _id } = service
    const navigate = useNavigate()
    return (
        <div className='col col-md-6 col-lg-4 col-xl-4 col-12 height' >
            <div className='cards'>
                <div className='img'>
                    <img className='img-fluid' src={img} alt={servicenName} />
                </div>
                <div className='px-3 service-card-details '>
                    <h1 className='service-title text-center'>{servicenName}</h1>
                    <p className='fs-4 lh-base'>{desc}</p>
                    <p className='fs-4'>Supplier:{Supplier}</p>
                    <p className='fs-4'>Quantity:{quantity}</p>
                    <p className='fs-4'>Price:{price}</p>
                </div>
                <div className='btn-container'>
                    <button onClick={() => navigate(`productDetails/${_id}`)} className='manage-btn'>Manage</button>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;