import { Button, } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import './AddItem.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../_firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';
const AddItem = () => {
    const [user]=useAuthState(auth)
    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value
        const serviceName = event.target.serviceName.value
        const quantity = event.target.quantity.value
        const price = event.target.price.value
        const Supplier = event.target.supplierName.value
        const img = event.target.image.value
        const desc = event.target.productDesc.value
        const service = { email, servicenName: serviceName, quantity, price, Supplier, img, desc }
        console.log(typeof +price,typeof +quantity)
        if((+price || +quantity) < 0){
            return alert('Negative number not allow')
        }
        if(!img.includes('https')) return alert('Please input a valid link')
        const { data } = axios.post(`https://tranquil-falls-56090.herokuapp.com/service`, service)
        toast(<p className='fs-4'>Product add successful</p>)
        console.log(data)
        event.target.reset()
    }

    return (
        <div>
            <PageTitle title='AddItems'/>
            <div className='w-50 mx-auto'>
                <h1 className='text-center py-5 my-5 fw-bold'>Add New Service</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-4'>Email </Form.Label>
                        <Form.Control className='product-input py-4' type="email" name='email' value={user?.email} readOnly placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-4 '>Service Name </Form.Label>
                        <Form.Control className='product-input py-4' type="text" name='serviceName' placeholder="Enter service name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-4'>Quantity</Form.Label>
                        <Form.Control className='product-input py-4' type="number" name='quantity' placeholder="Enter product quantity" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-4'> Price</Form.Label>
                        <Form.Control className='product-input py-4' type="number" name='price' placeholder="Service price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-4'>Supplier</Form.Label>
                        <Form.Control className='product-input py-4' type="text" name='supplierName' placeholder="Supplier name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fs-4'>Image</Form.Label>
                        <Form.Control className='product-input py-4' type="text" name='image' value='https://i.ibb.co/HVTxnNQ/service3.jpg' readOnly placeholder="Enter image link" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fs-4'>Service details</Form.Label>
                        <Form.Control className='product-input py-4' as="textarea" name='productDesc' placeholder='Write service' rows={3} required />
                    </Form.Group>
                    <input className='add d-block mx-auto mt-5' value='Submit' type="submit"/>
                </Form>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default AddItem;