import React from 'react'
import './navbar.css'
import {HiHome} from 'react-icons/hi'
import {BsMoonStars} from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import bu from '../../pics/bu.png';
import {Link} from 'react-router-dom'



export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav">
        <div className="leftnav">

          <div className="logo">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <hi>ODIDAsocial.</hi>
            </Link>
          </div>

          <div className="icon">
            <Link to='/' style={{ textDecoration: 'none' }}>
              <HiHome style={{ color: 'skyblue' }}/>
            </Link>
            <BsMoonStars/>
            <AiOutlineAppstore/>
          </div>

          <div className="search">
            <BsSearch className='icon'/>
            <input type='text' placeholder='whats up' />
          </div>
        </div>

        <div className="rightnav">
          <div className="icon">  
            <BsPerson/>
            <BsBell/>
            <AiOutlineMessage/>
          </div>
    
          <div className="npic">
            <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>
            <img src={bu} alt='' className='userpic'/>
            <span>Akello Faith</span>
            </Link>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}
