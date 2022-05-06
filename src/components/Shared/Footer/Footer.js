import React from 'react';
import { Container } from 'react-bootstrap';
import footer from '../../../img/footer.png'
import logo from '../../../img/skcargo.png'
import './Footer.css'
const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div className='mt-5 pt-5'>

            <div className='footer-img'>
                <img src={footer} alt="" />
            </div>

            <div className='footer-details'>
                <Container>
                    <div className='row py-5'>
                        <div className="col-md-4">
                            <img className='logo' src={logo} alt="" />
                            <p className='fs-4 text-white lh-base my-4'>
                                We export your product from anywhere in the world.We have lots of branch in every country.So your product is our responsibility
                            </p>
                            <div>
                                <h1 className='footer-title'>Working Hours</h1>
                                <div className='mt-5 pt-2 text-white fs-3'>
                                    <p>Mon-Fri ..... 8:00am-6pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  ps-5">
                            <h1 className='footer-title'>Our Services</h1>
                            <div className='mt-4 pt-4 fs-3  text-white'>
                                <p>Cargo Freight</p>
                                <p>Air Freight</p>
                                <p>Cargo Ship</p>
                                <p>Cargo Container</p>
                                <p>Cargo Truck</p>
                            </div>
                        </div>
                        <div className="col-md-4 ps-5">
                            <h1 className='footer-title'>Our Services</h1>
                            <div className='mt-4 pt-4 fs-3  text-white'>
                                <p>Cargo Freight</p>
                                <p>Air Freight</p>
                                <p>Cargo Ship</p>
                                <p>Cargo Container</p>
                                <p>Cargo Truck</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <footer className='bg-black py-5 text-center text-white fs-3'>
                <p className='m-0'>&copy; {year} All Right Reserved By SK-CARGO Service </p>
            </footer>
        </div>
    );
};

export default Footer;