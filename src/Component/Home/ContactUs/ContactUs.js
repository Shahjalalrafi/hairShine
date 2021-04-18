import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="contact-us text-center py-5">
            <div className='row'>
                <h6 className='text-white text-center'>CONTACT US</h6>
                <h3  className='text-white text-center'>Always connect with us</h3>
                <form style={{ width: '600px' }} className='m-auto'>
                    <input className='form-control my-2' type="text" placeholder='Email address' />
                    <input className='form-control my-2' type="text" placeholder='Subject' />
                    <textarea className='form-control my-2' placeholder='your message' id="" cols="30" rows="10"></textarea>
                    <input className='btn button' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;