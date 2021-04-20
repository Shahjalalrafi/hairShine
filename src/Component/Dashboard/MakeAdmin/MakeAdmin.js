import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = {
            email : data.email
        }
        console.log(formData)

        fetch('http://localhost:5050/addAdmin', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('admin added succesfully')
            }
        })
    }

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2 className='text-center bg-dark text-white p-4'>make admin</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email</label>
                        <input className='form-control my-2' style={{width: '300px'}} type="email" placeholder="Enter your admin email" {...register("email")}  />

                        <input type="submit" className='btn' style={{ backgroundColor: 'black', color: 'white' }} value="submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;