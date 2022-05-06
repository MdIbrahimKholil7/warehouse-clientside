import React from 'react';
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/solid'
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
const EmailBox = () => {
    return (
        <div className='header'>
            <div className='container text-white'>
                <div className='social-header py-4 '>
                    <div className='d-flex mb-md-0 mb-3 align-items-center'>
                        <PhoneIcon className='icon' />
                        <p className='ms-3 mt-3 fs-4'>01741313873</p>
                    </div>
                    <div className='d-flex align-items-center mb-md-0 mb-3 '>
                        <MailIcon className='icon' />
                        <h4 className='ms-3'>kholilmdibrahim17@gmail.com</h4>
                    </div>
                    <div className='d-flex mb-md-0 mb-3 pb-4 pb-md-1'>
                        <FaFacebook className='social-icon' />
                        <FaTwitterSquare className='social-icon' />
                        <FaInstagramSquare className='social-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailBox;