import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const ProvideReview = () => {

    const [image, setImage] = useState(null)
    const history = useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewDetails = {
            name: data.name,
            review: data.review,
            image: image
        }
        console.log(reviewDetails)

        fetch('http://localhost:5050/addReview', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
        .then(res => {
            alert('review succes')
            history.push('/')

        })
        .catch(err => console.log(err))
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
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2>Add review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3">
                        <label name="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" {...register("name")} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Review</label>
                        <input type="text" class="form-control" name="review" {...register("review")} />
                    </div>
                    <div class="mb-3">
                        <label name="file" class="form-label">File</label>
                        <input type="file" class="form-control" name="file" {...register("file")} onChange={handleFile} />
                    </div>

                    <button type="submit" class="btn button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ProvideReview;