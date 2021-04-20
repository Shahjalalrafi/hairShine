import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({servicee}) => {
    const {service, price, image, _id} = servicee
    return (
        <div className='card col-md-3 m-4 bg-dark service shadow'>
            <div className="card-body">
                <img className='img-fluid' src={image} alt=""/>
                <h6 className='text-white'>{service}</h6>
                <p className='text-white'>PRICE: {price}</p>
                <Link to={`/service-check-out/${_id}`}><button className="btn button">purchse</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;