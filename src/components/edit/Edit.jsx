import React, { useState } from 'react'
import './edit.css';
//import { FaRegTimesCircle } from "react-icons/fa";

export default function Edit() {
  const [editOpen, setEditOpen] = useState(true);

  return (
    <div className='edit'>
        <form className='infom'>
        
        <button  className='close'onClick={()=> setEditOpen(false)}>
          x
        </button>
         
        <div className='name'>
            <h3>Location</h3>
            <input type='text' 
            placeholder='location' 
            className='proinput'
            />

            <h3>Website</h3>
            <input type='text' 
            placeholder='website' 
            className='proinput'
            />

             <h3>Email</h3>
            <input type='email' 
            placeholder='email' 
            className='proinput'
            />

             <h3>Profession</h3>
            <input type='text' 
            placeholder='profession' 
            className='proinput'
            />
        </div>

        <div className='pic'>
          <h3>CoverPicture</h3>
          <input type='file' 
          />
        </div>

        <div className='pic'>
          <h3>ProfilePicture</h3>
          <input type='file' 
          />
        </div>
         <button className='button eebutton'>
            Update
          </button>
      </form>

    </div>
  )
}
