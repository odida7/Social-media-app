import React from 'react'
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import Profeed from '../../components/profeed/Profeed';
import Rightbar from '../../components/rightbar/Rightbar';
import "./profile.css";

export default function Profile() {
  return (
    <div className='profile'>
      <Navbar/>
      <div className="pfile">
        <Leftbar/>
        <Profeed/>
        <Rightbar/>
      </div>
    </div>
  )
}
