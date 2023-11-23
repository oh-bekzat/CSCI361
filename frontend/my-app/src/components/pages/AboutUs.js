import React from 'react'
import './AboutUs.css';

function AboutUs() {
  return (

    <div className="auction-page">
      <div className="car-details">
        <div className="car-info-container">
          <div className="car-info">
            <div className="body-20-bold">About us</div>
            <div className="car-property">
              <div>
                <span className="label-14-bold">Vehicle Management System</span>{' '}
                {/* <span className="label-14">202030300</span> */}
              </div>
              <div>
                <span className="label-14-bold">Main Department:</span>{' '}
                <span className="label-14">USM</span>
              </div>
              <div>
                <span className="label-14-bold">Sub-Entities:</span>{' '}
                <span className="label-14">Drivers, Maintenance, Vehicles, Fueling  </span>
              </div>
            </div>
          </div>
          <div className="car-info">
            <div className="car-property">
      
              <div>
                <span className="label-14-bold">Driver:</span>{' '}
                <span className="label-14">Assigned person that competes routing task</span>
              </div>
              <div>
                <span className="label-14-bold">Maintenance:</span>{' '}
                <span className="label-14">Group responsible for maintaining vehicles in the system</span>
              </div>

              
              <div>
                <span className="label-14-bold">Fueling:</span>{' '}
                <span className="label-14">Group responsible for fueling vehicle in the system</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    // <><div style={{ 
    //   display: 'flex', 
    //   marginTop: '20px',
    //   // alignItems: 'center', 
    //   justifyContent: 'center', 
    // }}><h2 className='centered'>About us</h2></div>
    
    // <div style={{       
    //   display: 'flex', 
    //   justifyContent: 'center', 
    //   backgroundColor: 'white', 
    //   padding: '20px', 
    //   borderRadius: '5px',
    //   color: 'black',
    //   maxWidth: '300px'
    // }}>
    //   <h2 style={{      
    //     display: 'flex', 
    //     justifyContent: 'center', 
    // }}>Your Text Here</h2>
    // </div></>
  )
}

export default AboutUs