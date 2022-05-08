import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import cargo1 from '../../../img/cargo1.jpg'
import cargo2 from '../../../img/cargo2.jpg'
import cargo3 from '../../../img/cargo3.jpg'
import { Fade } from 'react-reveal';

const Banner = () => {
    return (
        <div className='banner carouselDiv'>
            <Carousel controls={false} fade>
                <Carousel.Item className='h-100 img-banner'>
                    <div className="banner-container">
                        <img
                            className="d-block img-banner"
                            src={cargo1}
                            alt="cargo truck"
                        />
                        <Carousel.Caption>
                            <div className='title-container'>
                                <h4 className='fw-bold fs-4'>Welcome To Logtik</h4>
                                <Fade left>
                                    <div>
                                        <h1>We Provide</h1>
                                        <h1>Business Solution</h1>
                                    </div>
                                </Fade>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="banner-container">
                        <img
                            className="d-block  img-banner"
                            src={cargo2}
                            alt="cargo truck"
                        />

                        <Carousel.Caption>
                            <div className='title-container-right'>
                                <h4 className='fw-bold fs-4'>Welcome To Logtik</h4>
                                <Fade right>
                                    <div>
                                        <h1>We Provide</h1>
                                        <h1>Best Cargo Truck</h1>
                                    </div>
                                </Fade>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>


                <Carousel.Item>
                    <div className="banner-container">
                        <img
                            className="d-block img-banner"
                            src={cargo3}
                            alt="cargo ship"
                        />

                        <Carousel.Caption>
                            <div className='title-container-bottom'>
                                <h4 className='fw-bold fs-4'>Welcome To Logtik</h4>
                                <Fade bottom>
                                    <div>
                                        <h1>We Provide</h1>
                                        <h1>Best Cargo Ship</h1>
                                    </div>
                                </Fade>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;