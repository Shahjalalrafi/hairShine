import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListDetails from './OrderListDetails';
import './OrderList.css'

const OrderList = () => {

    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch('https://safe-escarpment-39469.herokuapp.com/bookingList')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <section className='row '>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2 className='text-center bg-dark text-white p-4'>ALL OF OUR ORDER</h2>
                <OrderListDetails orderDetails={orderList} />
            </div>
        </section>
    );
};

export default OrderList;