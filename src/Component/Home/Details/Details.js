import React from 'react';
import './Details.css'
import hair from '../../../images/hair.jpg'
import girl1 from '../../../images/girls1.jpg'
import girl2 from '../../../images/girls2.jpg'
import boy1 from '../../../images/boy1.jpg'
import boy3 from '../../../images/boy3.jpg'

const Details = () => {
    return (
        <div className="row text-center">
            <div className="col-md-6 bg-dark hair-care ">
                <div className="row">
                    <div className="col-md-6 img">
                        <img src={girl1} className='img-fluid m-1' alt=""/>
                    </div>
                    <div className="col-md-6 img">
                        <img src={boy1} className='img-fluid m-1' alt=""/>
                    </div>
                    <div className="col-md-6 img">
                        <img src={girl2} className='img-fluid m-1' alt=""/>
                    </div>
                    <div className="col-md-6 img">
                        <img src={boy3} className='img-fluid m-1' alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-md-6 hair-details">
                <img style={{height: '100px'}} className='img-fluid mt-3' src={hair} alt=""/>
                <div className='card hair-details-box p-3 shadow' style={{width: '300px'}}>
                    <h2 style={{ color: '#D3AD69' }}>$85 billion</h2>
                    <small>SHAMPOO, HAIR COLOR, CONDITIONER, & HAIR OIL
                    ARE THE HAIR STYLING PRODUCTS</small>
                </div>
                <h4>The hair care industry growing by a compound growth rate of 14%</h4>
                <small style={{ color: '#D3AD69' }}>Global Industry Analysis</small>
            </div>
        </div>
    );
};
export default Details;