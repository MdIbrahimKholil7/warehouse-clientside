import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        axios.get('https://tranquil-falls-56090.herokuapp.com/service')
            .then(res => {
                setService(res.data)
            })
    }, [])
    return (
        <div>
            <section className='service'>
                <div className='service-desc'>
                    <div className="details">
                        <h1 className='text-center mt-5 display-5 fw-bold title'>Our Services</h1>
                        <p className='w-75 mx-auto fs-3 text-white'>We transport anything.We are doing this last 17 years.Your We have different freight for export.Your product is our responsibility to give it back. </p>
                    </div>
                </div>
                <div className=''>
                    
                        <div className="service-details container">
                            <div className='row g-5'>
                                {
                                    services && services.map(service => <ServiceCard
                                        key={service._id}
                                        service={service}
                                    />)
                                }
                            </div>
                        </div>

                    
                </div>
            </section>

        </div>
    );
};

export default Service;