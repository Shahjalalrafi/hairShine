import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import AllBooking from './AllBooking';

const Booking = () => {
    
    const [logedInUser, setLogedInUser] = useContext(userContext)
    const [services, setServices ] = useState([])

    console.log(logedInUser.email)
    const email = logedInUser.email

    useEffect(() => {
        fetch('http://localhost:5050/allBooking?email=' + email)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='row'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2 className='text-center bg-dark text-white p-4'>my booking</h2>
                <div className="row m-auto">
                    {
                        services.map(service => <AllBooking service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Booking;