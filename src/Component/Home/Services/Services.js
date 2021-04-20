import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import './Service.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://safe-escarpment-39469.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='row services m-auto py-5 text-center'>
            <h2>services We Provided</h2>
            <p>we provide plathora of services like beyond</p>
            {
                services.map(service => <ServiceDetails servicee={service} />)
            }
        </div>
    );
};

export default Services;