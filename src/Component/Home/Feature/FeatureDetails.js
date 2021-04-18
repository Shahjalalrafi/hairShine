import React from 'react';

const FeatureDetails = ({service}) => {
    return (
        <div className='col-md-3 card m-4'>
            <img style={{height: "200px"}} className='card-img-top img-fluid' src={service.img} alt=""/>
            <div className="card-body">
                <h6 className='card-title'>{service.name}</h6>
            </div>
        </div>
    );
};

export default FeatureDetails;