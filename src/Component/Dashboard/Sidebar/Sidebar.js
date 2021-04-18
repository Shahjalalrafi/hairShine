import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <section className='sidenav'>
            <ul className="list-unstyled">
                
                <Link to='/order-list'>
                    <li>Order List</li>
                </Link>
                
                <Link to='/booking'>
                    <li>Booking List</li>
                </Link>

                <Link to='/review'>
                    <li>Review</li>
                </Link>

                <Link to='/addService'>
                    <li>add Service</li>
                </Link>

                <Link to='/make-admin'>
                    <li>Make Admin</li>
                </Link>

                <Link to='/manage-service'>
                    <li>Manage Service</li>
                </Link>
            </ul>
        </section>
    );
};

export default Sidebar;