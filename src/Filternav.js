import React from 'react'
import Grid from './assets/technicalassignment/grid.png'
import './Filternav.css'
function Filternav() {
  return (
    <div className="container">
    <div className="filteritems">
        <ul>
            <li className="filterlist">All</li>
            <li className="filterlist">Open</li>
            <li className="filterlist">Completed</li>
            <li className="filterlist">Cancelled</li>
        </ul>
    </div>
    <div className="filtersortitems">

        <input className='sortbar' type='text' placeholder='sort by'></input>
        <input className='searchbar' type='search' placeholder='search'></input>
        <img className='gridicon' src={Grid}></img>

    </div>
</div>
  )
}

export default Filternav
