import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import ManagerDetails from './ManagerDetails';

const Manager = () => {
    const [allService, setAllService] = useState([])


    const services = () => {
        fetch('http://localhost:5050/services')
            .then(res => res.json())
            .then(data => setAllService(data))
    }


    const handleDelete = (id) => {
        fetch(`http://localhost:5050/serviceDelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('service delete succesfully')
                    services()
                }
            })
    }

    useEffect(() => {
        services()
    },[])


    return (
        <div className='row m-auto'>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2 className='text-center bg-dark text-white p-4'>MANAGER DETAILS</h2>
                {/* <ManagerDetails allService={allService} /> */}
                <div className='row m-auto p-5 ' style={{ background: 'rgb(218, 218, 218)' }}>
                    <table className='col-md-12'>
                        <tr>
                            <th className='py-2'>Service</th>
                            <th className='py-2'>Price</th>
                            <th className='py-2'>Status</th>
                        </tr>
                        {
                            allService.map(service => <tr className="table-data">
                                <td className='py-2'>{service.service}</td>
                                <td className='py-2'>{service.price}</td>
                                <td><FontAwesomeIcon onClick={() => handleDelete(service._id)} style={{ color: 'red', cursor: 'pointer' }} icon={faTrashAlt} /></td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manager;