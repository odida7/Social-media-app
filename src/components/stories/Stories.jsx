import React from 'react'
import './stories.css'
import bu from '../../pics/bu.png';


export default function Stories() {
    const stories = [
    {
      id: 1,
      name: "Aber Hope",
      img: bu,
    },
    {
      id: 2,
      name: "Aber Hope",
      img: bu,
    },
    {
      id: 3,
      name: "Aber Hope",
      img: bu,
    },
    {
      id: 4,
      name: "Aber Hope",
      img: bu,
    },
  ];

  return (
    <div className="stories">
      {/*<div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
  </div>*/}
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" className='stimg' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

