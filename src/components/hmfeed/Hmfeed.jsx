import React from 'react'
import './hmfeed.css'
import Stories from '../stories/Stories';
import Share from '../share/Share';
import Posts from '../posts/Posts';

export default function Hmfeed() {
  return (
    <div className='hmfeed'>
      <Stories />
      <Share />
      <Posts/>
    </div>
  )
}
