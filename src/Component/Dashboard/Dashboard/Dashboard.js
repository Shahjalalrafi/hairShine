import React from 'react';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className='row'>
            {/* <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                this our dashboard
            </div> */}
            <AddService />
        </section>
    );
};

export default Dashboard;