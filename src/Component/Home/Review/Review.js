import React, { useEffect, useState } from 'react';
import girl1 from '../../../images/girls1.jpg'
import boy1 from '../../../images/boy1.jpg'
import boy3 from '../../../images/boy3.jpg'
import ReviewDetails from './ReviewDetails';

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://safe-escarpment-39469.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    
    // const reviews = [
    //     {
    //         name: 'shahjalal rafi',
    //         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos.',
    //         img: girl1
    //     },
    //     {
    //         name: 'sushan smith',
    //         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos.',
    //         img: boy1
    //     },
    //     {
    //         name: 'david warner',
    //         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eos.',
    //         img: boy3
    //     }
    // ]
    return (
        <section className='row p-5 text-center'>
            <h2>Our client Review</h2>
            {
                reviews.map(review => <ReviewDetails review={review} />)
            }
        </section>
    );
};

export default Review;