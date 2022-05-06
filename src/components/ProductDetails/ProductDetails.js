import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './ProductDetails.css'
const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const [reload,setReload]=useState(true)
    const [value,setValue]=useState(0)
    const navigate=useNavigate()
    const { Supplier, servicenName, quantity, price, img, desc } = details || {}
    const { id } = useParams()
    // 
    useEffect(() => {
        (async () => {
            await axios.get(`https://tranquil-falls-56090.herokuapp.com/service/${id}`)
                .then(data => {
                    setDetails(data.data)

                })
        })()

    }, [id,reload])
    const inputValue=event=>{
        const inputVal=event.target.value
        setValue(Number(inputVal))
    }
    const addQuantity =async event => {
        if(!value){
            return 
        }
        await axios.put(`https://tranquil-falls-56090.herokuapp.com/service/${id}`, {quantity:value+quantity})
        .then(data=>{
            setReload(!reload)
        })
    }
    const removeQuantity =async event => {
      
        await axios.put(`https://tranquil-falls-56090.herokuapp.com/service/${id}`, {quantity:quantity-1})
        .then(data=>{
            setReload(!reload)
        })
    }

    return (
        <div className=''>
            <PageTitle title='ProductDetails'/>
            <div className='detail-page'>
                <img src={img} alt={servicenName} />
                <div className='name'>
                    <h1 className=''>{servicenName}</h1>
                </div>
            </div>
            <Container>
                <section className='row mt-5 pt-5 pb-5'>
                    <div className="col-md-6">
                        <h1 className='footer-title'>{servicenName}</h1>
                        <p className='mt-5 fs-4 lh-base'>{desc}</p>
                        <p className='fs-3'><strong>Supplier</strong>:{Supplier}</p>
                        <p className='fs-3'><strong>Price</strong>:${price}</p>
                        <p className='fs-4'><strong>Quantity</strong>:{quantity}</p>
                        <input onChange={inputValue} className='quantity-input' type="number" name='quantity' placeholder='Restock product' />
                        <button onClick={addQuantity} className='add-btn'>Add</button>
                        <button onClick={removeQuantity } className='add-btn'>Delivered</button>
                        <h3 className='mt-5 pt-4'>Manage Your Product click on manage inventory</h3>
                        <button onClick={()=>navigate(`/mangeItems`)} className='add-btn'>Manage Inventory</button>

                    </div>
                    <div className='col-md-6 mt-5 pt-4 mt-md-0 pt-md-0'>
                        <img className='detail-img' src={img} alt={servicenName} />
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ProductDetails;