import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const history = useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = {
            service: data.service,
            price: data.price,
            description: data.description
        }
        console.log(formData)

        fetch('http://localhost:5050/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('service added succesfully')
                history.push('/')
            }
        })
    };


    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2>Add your service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control py-2 my-2' placeholder="servie" {...register("service")} />
                    <input className='form-control py-2 my-2' placeholder="description" {...register("description")} />
                    <input className='form-control py-2 my-2' placeholder="price" type='number' {...register("price")} />

                    <input className='btn button' type="submit" />
                </form>
               
            </div>
        </section>
    );
};

export default AddService;