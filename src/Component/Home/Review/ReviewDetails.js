import React from 'react';

const ReviewDetails = ({review}) => {
    return (
        <div className="col-md-4 p-3">
            <img className='img-fluid' style={{width: '100px', height: '100px', borderRadius: "50%"}} src={review.image} alt=""/>
            <p className='pt-2'>{review.name}</p>
            <p className='pt-2'>{review.review}</p>
        </div>
    );
};
export default ReviewDetails;