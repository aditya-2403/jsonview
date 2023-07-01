import React from 'react'
import { DataObject } from '@mui/icons-material'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
  return (
    <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
     <Link className='text-white' style={{textDecoration:"none"}} to="/">JsonView <DataObject/></Link> 
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link to="/about" target='_blank'>About</Link>
    <Link to="https://github.com/aditya-2403/jsonview" target="_blank">Repository</Link>
  </div>
</div>
  )
}

export default Navbar
