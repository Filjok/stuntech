
import React from 'react';
import dashboard from './assets/technicalassignment/dashboard.png';
import user from './assets/technicalassignment/user.png';
import training from './assets/technicalassignment/training.png';
import gigs from './assets/technicalassignment/gigs.png';
import bell from './assets/technicalassignment/bell.png';
import './Navbar.css';

function Navbar() {
  return (
    <>

 <div className='Nav-vertical'>
    <h1>Logo</h1>
    <hr/>
    <ul className='Vertical-navitems'>
       <li className='Navlist-vertical'><img src={dashboard}></img></li>
       <li className='Navlist-vertical'><img src={gigs}></img></li>
       <li className='Navlist-vertical'><img src={training}></img></li>
       <li className='Navlist-vertical'><img src={bell}></img></li>
       <li className='Navlist-vertical'><img src={user}></img></li>
    </ul>
 </div>
 <div className='Nav-horizontal'>

    <div className='handburger-icon'>
        <div className='longline'></div>
        <div className='shortline'></div>
        <div className='longline'></div>
    </div>

    <img src={bell} className='bellicon'></img>
    <img src={user}  className='usericon'></img>
     <h2 className='username'>santhosh</h2> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
     

 </div>


    </>
  )
}

export default Navbar
