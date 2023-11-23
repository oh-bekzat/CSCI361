import '../../App.css'
import { Link } from 'react-router-dom';
import './Home.css';

function Home(){
    return (
      <div className='bigger-container'>
    <div className='k'> 
    <div className='l first'>
      <div className='header-text'>
        <h1 className='header-40-bold'>Welcome</h1>
        <div className='body-text'>
          <p className='body-16-bold'>The Vehicle Management System (VMS) is a comprehensive software solution designed for the purpose of managing vehicle fleets efficiently.</p>
            <br></br>
          <p className='body-16'>The primary objective of the Vehicle Management system is to offer fundamental functionalities that enable the Nazarbayev University administration to streamline vehicle management processes for enhanced administration. This includes online vehicle booking by staff members, vehicle maintenance oversight, driver assignment, real-time vehicle tracking, driver performance assessment, scheduling of driver duties, and comprehensive management of these aspects. </p>
            <br></br>
          <p className='body-16-bold'>The VMS will allows users to:</p>
          <div className='unordered_list'>
            <ul>
              <li>Make Requests to create Route Task</li>
              <li>Add date to the Route Task</li>
              <li>But not choose the driver and the car &#128513;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='l second'>
    <h3 className='try-out'>Try it out yourself &#128512;</h3>
    <div className="request-container">
    {/* <form onSubmit={handleSubmit}> */}
      <label htmlFor="startPoint">Point of departure:</label>
      <input
        type="text"
        id="startPoint"
        name="startPoint"
      />
      <label htmlFor="finishPoint">Point of arrival:</label>
      <input
        type="text"
        id="finishPoint"
        name="finishPoint"
      />
      <label htmlFor="dateTime">Date and Time:</label>
        <input
          type="datetime-local"  // Use "datetime-local" type for date and time input
          id="dateTime"
          name="dateTime"
        />

      <Link to="/login">
      <button type="submit" className="button-124 request-button">Submit Route Request</button>
      </Link>
    {/* </form> */}
    </div>
    </div>
    </div>
    {/* <div className='lower-div'>
      <h2>Get to know us! &#x1F49B;</h2>
      <div className='table'>
        <div className='cells first-cell'>
          <div className='pfp-image'></div>
          <div className='teammate-description'></div>
        </div>
        <div className='cells second-cell'></div>
        <div className='cells third-cell'></div>
        <div className='cells fourth-cell'></div>
        <div className='cells fifth-cell'></div>
        <div className='cells sixth-cell'></div>
      </div>
    </div> */}
    </div>
    )
}

export default Home