import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import PaymentIntrigation from '../Dashboard/PaymentIntrigation/PaymentIntrigation';

const ServiceCheckOut = () => {
    const history = useHistory()

    const [logedInUser, setLogedInUser] = useContext(userContext)
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookingDetails = {
            serviceName: service,
            description: description,
            price: price,
            userName: logedInUser.name,
            email: logedInUser.email
        }
        fetch('http://localhost:5050/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
        .then(res => {
            alert('order succesfull')
            history.push('/booking')
        })
    }

    const id = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/services')
        .then(res => res.json())
        .then(result => {
            const myProduct = result.find(pd => {
                return pd._id === id.id
            })
            setProduct(myProduct)
        })
    }, [])

    const {service, price, description, _id} = product
    
    return (
        <div className='row'>
            <div className='col-md-2'>
                <Sidebar />
            </div>
            <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control py-2 my-2' defaultValue={logedInUser.name} placeholder="name" {...register("userName")} />
                    <input className='form-control py-2 my-2' defaultValue={logedInUser.email} placeholder="email" {...register("email")} />
                    <input className='form-control py-2 my-2' defaultValue={service} {...register("serviceName")} />
                    <input className='form-control py-2 my-2' defaultValue={description} {...register("description")} />
                    <input className='form-control py-2 my-2' defaultValue={price} type='number' {...register("price")} />

                    <PaymentIntrigation />
                    <input className='btn button' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ServiceCheckOut;