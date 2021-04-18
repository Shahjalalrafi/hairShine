import React from 'react';

const AllBooking = ({service}) => {
    const {serviceName, description, price} = service
    return (
        <div className="col-md-5 card m-3 p-5 bg-dark text-white">
            <h4>{serviceName}</h4>
            <small>{description}</small>
        </div>
    );
};

export default AllBooking;