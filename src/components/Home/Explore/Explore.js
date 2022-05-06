import React from 'react';
import explore from '../../../img/explore.jpg'
import { CheckCircleIcon } from '@heroicons/react/solid'
import './Explore.css'
const Explore = () => {
    
    const benefits = [
        { name: "Correct timing delivery", id: 1 },
        { name: "Special discount", id: 2 },
        { name: "Fast delivery", id: 3 },
        { name: "Get special offer", id: 4 },
        { name: "Delivery anywhere", id: 5 },
    ]
    return (
        <div className='mt-5 py-5'>
            <div className='container'>
                <section className='row gx-3'>
                    <div className='col-md-6 col-12'>
                        <h1 className='benefit-title display-4 fw-bold text-uppercase'>Explore The Freight Service</h1>
                        <article className='fs-3 lh-base my-4'>
                            Manual cargo trucks are the most commonly used materials handling equipment where single pallets are moved over short distances in small workshops and manufacturing businesses. As mentioned, some pallet trucks come with integrated weighing scales and other accessories. These pallet trucks need to be extremely strong and functional as most carry heavy loads.
                        </article>
                        <div>   
                            <h1 className='benefit-title text-uppercase  fw-bold my-5'>Benefits</h1>
                            {
                                benefits.map(item=><div className='d-flex align-items-center py-1' key={item.id}>
                                    <CheckCircleIcon className='check '/><p className='fs-4 m-0 ps-2'>{item.name}</p>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='col-md-6 col-12 mt-5 pt-5 mt-md-0 pt-md-0'>
                        <img className='img-fluid' src={explore} alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Explore;