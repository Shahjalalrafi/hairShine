import React from 'react';

const OrderListDetails = ({ orderDetails }) => {

    return (
        <div className='row m-auto p-5 ' style={{ background: 'rgb(218, 218, 218)' }}>
            <table className="col-md-12">
                <tr>
                    <th className='py-2'>Name</th>
                    <th className='py-2'>Email Id</th>
                    <th className='py-2'>Service</th>
                    <th className='py-2'>Pay With</th>
                    <th className='py-2'>Status</th>
                </tr>
                {
                    orderDetails.map((order, index) => <tr className="table-data">
                        <td className='py-2 '>{order.userName}</td>
                        <td className='py-2'>{order.email}</td>
                        <td className='py-2'>{order.serviceName}</td>
                        <td className='py-2'>Credit Card</td>
                        <td className='py-2'>
                            <select name="status" id="status">
                                <option value="Pending">Pending</option>
                                <option value="Done">Done</option>
                                <option value="On going">On going</option>
                            </select>
                        </td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default OrderListDetails;