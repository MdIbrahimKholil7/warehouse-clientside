import React from 'react';
import './About.css'
import about3 from '../../img/about1.jpg'
const About = () => {
    return (
        <div className='about'>
            <div className='about-banner'>
                <h1 className='about-title'>About Us</h1>
            </div>
            <div className='container mt-5 pt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <img src={about3} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <h1 className='fw-bold about-details-title'>Our Company</h1>
                        <article className='lh-base fs-3 mt-3'>
                            Our compony is one best company in the world.We have been working since last 20 years.We have lots of branch in the whole world.Our customer reviews are good.We transport all kinds of freight.We have lots of happy client.Our employ are care about your product.So you don't have to be worry.
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;