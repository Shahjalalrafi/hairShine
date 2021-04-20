import React from 'react';

const FeatureDetails = ({ service }) => {
    return (
        <div className='col-md-3 m-4 card'>
                <img style={{ height: "200px" }} className='card-img-top img-fluid mb-3' src={service.img} alt="" />
                <div className="card-body mt-3">
                    <h6 className='card-title'>{service.name}</h6>
                </div>
        </div>
    );
};

export default FeatureDetails;