import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const [image, setImage] = useState(null)
    const history = useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = {
            service: data.service,
            price: data.price,
            description: data.description,
            image: image
        }
        console.log(formData)

        fetch('https://safe-escarpment-39469.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            alert('service added succes')
            history.push('/')

        })
    };

    const handleFile = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'e5e7c3fd0f17a3470da9a5f0de336257')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                console.log(response)
                setImage(response.data.data.display_url);
            })
            .catch(err => console.log(err))
    }


    return (
        <section className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2 className='text-center bg-dark text-white p-4'>Add your service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control py-2 my-2' placeholder="servie" {...register("service")} />
                    <input className='form-control py-2 my-2' placeholder="description" {...register("description")} />
                    <input className='form-control py-2 my-2' placeholder="price" type='number' {...register("price")} />
                    <div class="mb-3">
                        <label name="file" class="form-label">File</label>
                        <input type="file" class="form-control" name="file" {...register("file")} onChange={handleFile} />
                    </div>

                    <input className='btn' style={{backgroundColor: 'black', color:'white'}} type="submit" />
                </form>
               
            </div>
        </section>
    );
};

export default AddService;