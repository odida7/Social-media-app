import React from 'react'
import Hmfeed from '../../components/hmfeed/Hmfeed'
import Leftbar from '../../components/leftbar/Leftbar'
import Navbar from '../../components/navbar/Navbar'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="homefile">
        <Leftbar/>
        <Hmfeed/>
        <Rightbar/>
      </div>

    </div>
  )
}
 