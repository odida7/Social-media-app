import React from 'react'
import './profeed.css'
import Posts from '../posts/Posts';
import Prouser from '../prouser/Prouser';


export default function Profeed() {
  return (
    <div className='profeed'>
      <Prouser/>
      <Posts/>
    </div>
  )
}
