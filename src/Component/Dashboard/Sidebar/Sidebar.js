import { faCarAlt, faConciergeBell, faCut, faGripHorizontal, faList, faPlusCircle, faSearch, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {

    const [isLogedIn, setIsLogedIn] = useState(false)
    const [logedInUser, setLogedInUser] = useContext(userContext)

    useEffect(() => {
        fetch('http://localhost:5050/isAdmin', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: logedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsLogedIn(data))
    }, [])

    console.log(isLogedIn)

    return (
        <section className='sidenav'>
            <ul className="list-unstyled">

                <Link to='/' className='navbar-logo mb-3'>
                    Hair<FontAwesomeIcon icon={faCut} />Shine
                </Link>

                <Link to='/booking'>
                    <li><FontAwesomeIcon icon={faList} style={{ marginRight: '10px' }} />Booking List</li>
                </Link>

                <Link to='/review'>
                    <li><FontAwesomeIcon icon={faSearch} style={{ marginRight: '10px' }} />Review</li>
                </Link>

                {
                    isLogedIn && <div>
                        <Link to='/order-list'>
                            <li><FontAwesomeIcon icon={faGripHorizontal} style={{ marginRight: '10px' }} />Order List</li>
                        </Link>

                        <Link to='/addService'>
                            <li><FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '10px' }} />add Service</li>
                        </Link>

                        <Link to='/make-admin'>
                            <li><FontAwesomeIcon icon={faUserShield} style={{ marginRight: '10px' }} />Make Admin</li>
                        </Link>

                        <Link to='/manage-service'>
                            <li><FontAwesomeIcon icon={faConciergeBell} style={{ marginRight: '10px' }} />Manage Service</li>
                        </Link>
                    </div>
                }
            </ul>
        </section>
    );
};

export default Sidebar;