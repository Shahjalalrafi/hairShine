import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListDetails from './OrderListDetails';

const OrderList = () => {

    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5050/allBooking')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <section className='row '>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <OrderListDetails orderDetails={orderList} />
            </div>
        </section>
    );
};

export default OrderList;