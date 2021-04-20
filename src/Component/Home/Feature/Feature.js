import React from 'react';
import girl1 from '../../../images/girls1.jpg'
import girl2 from '../../../images/girls2.jpg'
import girl3 from '../../../images/girls3.jpg'
import boy1 from '../../../images/boy1.jpg'
import boy2 from '../../../images/boy2.jpg'
import boy3 from '../../../images/boy3.jpg'
import FeatureDetails from './FeatureDetails';
import './Feature.css'

const Feature = () => {
    const serviceProvided = [
        {
            name: 'Fade Haircut',
            img: girl1,
            desc: 'Fresh and masculine, short haircuts for teen boys will always be trending because they are low-maintenance, sleek, and hot'
        },
        {
            name: 'Medium Length Hairstyles',
            img: boy1,
            desc: 'For teenage guys who want a little length to play with on top, medium hairstyles offer the perfect balance. Boys with medium length hair can style many of the most popular looks.'
        },
        {
            name: 'Long Haircuts',
            img: girl3,
            desc: 'Sexy and unique, teen boys who prefer long hairstyles have a variety of styles to choose from. Whether you want long hair on top with short sides'
        },
        {
            name: 'Quiff',
            img: boy2,
            desc: 'If you have thick hair that’s full of volume, a quiff is an iconic hairstyle that has is casual and classy for guys. Timeless and easy'
        },
        {
            name: 'Comb Over Haircut',
            img: boy3,
            desc: 'The comb over haircut continues to be one of the most versatile and handsome styles to get for school. Whether you’re a 13, 14, or 15 year old boy or a young college student,'
        },
        {
            name: 'Textured Hairstyles',
            img: girl2,
            desc: 'All the best new hairstyles for teenage boys come in textured styles for a natural, healthy look. Textured hair is achieved with a low-shine or matte hair product.'
        }
    ]
    return (
        <section className='row feature bg-dark p-5  text-center'>
            <h2 className='text-white'>FEATURE PRODUCT</h2>
            {
                serviceProvided.map(service => <FeatureDetails service={service} />)
            }
        </section>
    );
};

export default Feature;