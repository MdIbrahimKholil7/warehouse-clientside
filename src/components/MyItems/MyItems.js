import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../api/axiosPrivate';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Spinner from '../Spinner/Spinner';
import auth from '../_firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [product, setProduct] = useState([])
    const [reload, setReload] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {

        (async () => {
            setSpinner(true)
            const url = `https://tranquil-falls-56090.herokuapp.com/myItems?email=${user?.email}&page=${page}&size=${size}`
            try {
                const { data } = await axios.get(url)
                console.log(data)
                setProduct(data)
                setSpinner(false)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [user, reload, page, size])
    console.log(product)
    // count api 
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://tranquil-falls-56090.herokuapp.com/myItemsCount?email=${user.email}`)
            const length = Math.ceil(data.result / 5)
            setCount(length)
        })()
    }, [user])
    // delete data 
    const handleDelete = async id => {
        if (!show) {
            return
        }
        const { data } = await axios.post(`https://tranquil-falls-56090.herokuapp.com/service/${id}`)
        setReload(!reload)
    }
    const handlePageClick = data => {
        setPage(data.selected)
    }

    return (
        <div className='allProduct'>
            <PageTitle title='MyItems' />
            {
                spinner && <Spinner />
            }
            {
                product.length && (
                    <div className='container text-white'>
                        <table className='w-100 '>
                            <thead className='text-center'>
                                <tr>
                                    <th>Service Name</th>
                                    <th className='table-header'>Supplier</th>
                                    <th className='table-header'>Quantity</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='text-white text-center'>
                                {

                                    product.length && product.map(service => <tr key={service._id}>
                                        <td>{service.servicenName}</td>
                                        <td className='table-header'>{service.Supplier}</td>
                                        <td className='table-header'>{service.quantity}</td>
                                        <td>${service.price}</td>
                                        <td><img className='table-img' src={service.img} alt={service.servicenName} /></td>
                                        <td><button onClick={() => handleDelete(service._id)} className='delete'>
                                            <>
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
                                            </>
                                        </button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-end'>
                            <div className='w-75 d-flex justify-content-end'>
                                <ReactPaginate
                                    previousLabel={'Prev'}
                                    nextLabel={'Next'}
                                    breakLabel={'...'}
                                    pageCount={count}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={2}
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
                    </div>

                )
            }
        </div>
    );
};

export default MyItems;