import React from 'react' 
import './Giggrid.css'
import Gigname from './assets/technicalassignment/gigname.png'
import Gigbudget from './assets/technicalassignment/gigBudget.png'
import Gigcalender from './assets/technicalassignment/gigCalender.png'

function GIggrid() {
  return (
    <div className='gridcontainer'>
         <div className='datablock'>
            <img src={Gigname} className='gigimg'></img>
            <div className='gig-details'>
                <h3  className='gighead'>Gig Name</h3>
                <p >Checkin test</p>
            </div>
        </div>
        <div className='datablock'>
            <img src={Gigcalender}  className='gigimg'></img>
            <div className='gig-details'>
                <h3 className='gighead'>Required Date</h3>
                <p>06/24/2021</p>
            </div>
        </div>
        <div className='datablock'>
            <img src={Gigbudget}  className='gigimg'></img>
            <div className='gig-details'>
                <h3 className='gighead'>Total Budget</h3>
                <p>INR 1500</p>
            </div>
        </div>
       
       <div className='gigbar'>
        <h3 className='percent'>100% Secureed</h3>
        <div className='bar'></div>
       </div>

       <div className='resources'>
        <h3 className='percent'>Total Resources</h3>
        <div className='resoursedetails'>
            <div className='resoursedata'>
                <p>Required</p>
                <p>1</p>
            </div>
            <div className='resoursedata'>
                <p>Hired</p>
                <p>1</p>
            </div>
            <div className='resoursedata'>
                <p>Applicants</p>
                <p>1</p>
            </div>
        </div>
       </div>
      
    </div>
  )
}

export default GIggrid
