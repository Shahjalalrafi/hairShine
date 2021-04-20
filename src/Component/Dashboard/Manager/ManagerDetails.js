// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

// const ManagerDetails = ({ allService }) => {

//     const [loadService, setLoadService] =useState([])

//     fetch('https://safe-escarpment-39469.herokuapp.com/services')
//         .then(res => res.json())
//         .then(data => setLoadService(data))


//     const handleDelete = (id) => {
//         fetch(`https://safe-escarpment-39469.herokuapp.com/serviceDelete/${id}`, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data) {
//                     alert('service delete succesfully')
//                 }
//             })
//     }

//     return (
//         <div className='row m-auto p-5 ' style={{ background: 'rgb(218, 218, 218)' }}>
//             <table className='col-md-12'>
//                 <tr>
//                     <th className='py-2'>Service</th>
//                     <th className='py-2'>Price</th>
//                     <th className='py-2'>Status</th>
//                 </tr>
//                 {
//                     allService.map(service => <tr className="table-data">
//                         <td className='py-2'>{service.service}</td>
//                         <td className='py-2'>{service.price}</td>
//                         <td><FontAwesomeIcon onClick={() => handleDelete(service._id)} style={{ color: 'red', cursor: 'pointer' }} icon={faTrashAlt} /></td>
//                     </tr>)
//                 }
//             </table>
//         </div>
//     );
// };

// export default ManagerDetails;