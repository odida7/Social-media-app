import React from 'react'
import './prouser.css'
import bu from '../../pics/bu.png';
import N from '../../pics/N.png';
import {GoLocation} from 'react-icons/go'
import {BsPinterest} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {MdOutlineWork} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {SiWebmoney} from 'react-icons/si'
import { useState } from 'react';
import Edit from '../edit/Edit'



export default function prouser() {
  const [editOpen, setEditOpen] = useState(false);
  return (
    <div className='prouser'>
        <div className="container">
            <div className="up">
                <img src={N} alt='' className='np'/>
                <div className="nop">
                  <img src={bu} alt='' className='no'/>
                  <span>Akello Peace</span>
                 
                </div>
              <button className='button ebutton' onClick={()=> setEditOpen(!editOpen)}>Edit</button>
            </div>
 
           
            <div className="down">
              <div className="iconp">
                 <div className='ico'>
                  <GoLocation className='loo'/>
                  <span>Uganda</span>
                 </div>
                <div className='ico'>
                  <SiWebmoney className='loo'/>
                  <span>Website</span>
                 </div>
                
                <div className='ico'>
                  <MdEmail className='loo'/>
                  <span>Email</span>
                 </div>

                 <div className='ico'>
                  <MdOutlineWork className='loo'/>
                  <span>Profession</span>
                 </div>
              
              </div>


              <button className='button pbutton'>follow</button>
              

              <div className="ic">
                <BsFacebook className='loo'/>
                <AiFillInstagram className='loo'/>
                <BsPinterest className='loo'/>
              </div>
            </div>
             {editOpen && <Edit/>}
        </div>
      
    </div>
  )
}
