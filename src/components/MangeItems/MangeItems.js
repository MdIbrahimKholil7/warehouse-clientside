import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ManageItems.css'
import ReactPaginate from 'react-paginate';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../_firebase.init';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../api/axiosPrivate';
const MangeItems = () => {
    const [user] = useAuthState(auth)
    const [services, setService] = useState([])
    const [reload, setReload] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
    const navigate = useNavigate('')
    const navigateLogin = useNavigate('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // load all data 
    useEffect(() => {

        (async () => {
            setSpinner(true)
            const url = `https://tranquil-falls-56090.herokuapp.com/services?page=${page}&count=${size}&email=${user?.email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setService(data)
            } catch (error) {
                if (error?.response.status === 401 || error?.response.status === 403) {
                    navigateLogin('/login')
                    signOut(auth)
                }
            }
        })()
    }, [reload, page, count, size, user])
    // load all data length 
    useEffect(() => {
        axios.get('https://tranquil-falls-56090.herokuapp.com/serviceCount')
            .then(res => {
                const length = Number(Math.ceil(res.data.result / size))
                setCount(length)
            })
    }, [size])
    const handleDelete = async id => {
        if (!show) {
            return
        }
        const { data } = await axios.post(`https://tranquil-falls-56090.herokuapp.com/service/${id}`)
        setReload(!reload)
        console.log(data)
    }

    const handlePageClick = data => {
        setPage(data.selected)
    }

    return (
        <div className='allProduct'>
            <PageTitle title='ManageItems' />
            {
                spinner ? <Spinner /> : <div></div>
            }
            <h1 className='text-center pt-5 text-white'>{services?.message && services.message}</h1>
            {
                services.length && <>
                    <h1 className='text-center text-white text-uppercase fw-bold py-5'>All Products</h1>


                    <div className='container text-white'>
                        <table className='w-100 '>
                            <thead className='text-center'>
                                <tr>
                                    <th>Service Name</th>
                                    <th className='table-header'>Supplier</th>
                                    <th className='table-header'>Quantity</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Add</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='text-white text-center'>
                                {

                                    services.map(service => <tr key={service._id}>
                                        <td>{service.servicenName}</td>
                                        <td className='table-header'>{service.Supplier}</td>
                                        <td className='table-header'>{service.quantity}</td>
                                        <td>${service.price}</td>
                                        <td><img className='table-img' src={service.img} alt={service.servicenName} /></td>
                                        <td><button onClick={() => navigate(`/addItem`)} className='add'>Add Item</button></td>
                                        <td><button onClick={() => handleDelete(service._id)} className='delete'><>
                                            <span onClick={handleShow}>
                                                Delete
                                            </span>

                                            <Modal show={show} onHide={handleClose}>
                                                <div className='py-5'>
                                                    <p className='fs-2 text-center'>Are you sure you want to delete</p>
                                                </div>
                                                <Modal.Footer>
                                                    <Button className='py-2 px-5 fs-3' variant="secondary" onClick={handleClose}>
                                                        No
                                                    </Button>
                                                    <Button className='py-2 px-5 fs-3' variant="primary" onClick={handleClose}>
                                                        Yes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </></button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <div>
                            <ReactPaginate
                                previousLabel={'Prev'}
                                nextLabel={'Next'}
                                breakLabel={'...'}
                                pageCount={count}
                                marginPagesDisplayed={3}
                                pageRangeDisplayed={3}
                                onPageChange={handlePageClick}
                                containerClassName={'paginateContainer'}
                                pageClassName={'page-btn'}
                                previousClassName={'previous'}
                                previousLinkClassName={'link-btn'}
                                pageLinkClassName={'link-btn'}
                                nextClassName={'previous'}
                                breakClassName={'page-btn'}
                                breakLinkClassName={'link-btn'}
                                nextLinkClassName={'link-btn'}
                                activeClassName={'active-btn'}
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default MangeItems;