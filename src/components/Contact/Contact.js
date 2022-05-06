import React from 'react';
import { Form } from 'react-bootstrap';
import contact from '../../img/contact.png'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-container '>
            <div className='shape shape-img'>
            </div>
            <div className="container">
                <h1 className='text-white pt-5 text-uppercase text-center'>Contact Us</h1>
                <div className='row mt-5 pt-5 gx-5'>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src={contact} alt="" />
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className='form-container my-0 text-white contact-form'>
                            <div className='auth-form shadow-none'>
                                <form>
                                    <div className='input-div'>
                                        <label className='fs-4 mb-2' htmlFor="email">Name</label>
                                        <input type="email" name="email" placeholder='Enter your name' required />

                                    </div>
                                    <div className='input-div relative'>
                                        <label className='fs-4 mb-2' htmlFor="Email">Email</label>
                                        <input type='email' name="email" placeholder='Enter your email' required />

                                    </div>

                                    <div className='input-div'>
                                        <label className='fs-4 mb-2' htmlFor="Confirm Password">Service Name</label>
                                        <input type="text" name="confirm-password" placeholder='Service Name' required />

                                    </div>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='fs-4'>Service details</Form.Label>
                                        <Form.Control className='product-input py-4' as="textarea" name='productDesc' placeholder='Write service' rows={3} required />
                                    </Form.Group>
                                    <button className='submit-btn' type='submit'>CONTACT</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;