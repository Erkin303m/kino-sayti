import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
    
    
  return (
    <div className='bg-warning pt-2 pb-2'>
        <ul className='d-flex justify-content-around'>
            <li><Link to="/" className='btn btn-light'>Home</Link></li>
            <li><Link to="/about" className='btn btn-light'>About</Link></li>
            <li><Link to="/about" className='btn btn-light'>About</Link></li>
            <li><Link to="/about" className='btn btn-light'>About</Link></li>
            <li><Link to="/about" className='btn btn-light'>About</Link></li>
      
        </ul>
    </div>
  )
}

export default Header