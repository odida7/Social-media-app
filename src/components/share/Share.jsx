import React, { useRef, useState } from 'react'
import './share.css'
import {MdPermMedia} from 'react-icons/md'
import {BsFillEmojiSunglassesFill} from 'react-icons/bs'
import {CgTag} from 'react-icons/cg'
import {ImLocation} from 'react-icons/im'
import { Link } from 'react-router-dom'
import {IoIosCloseCircleOutline} from 'react-icons/io'
import bu from '../../pics/bu.png';


export default function Share() {
  
 
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img)
    }
  } 

  
 
  // Reset Post Share
  /*const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };*/


  return (
    <div>
    <div className='share'>
      <div className="sharetop">
        <Link to='/profile'>
          <img src= {bu} alt=''/>
        </Link>
        <input type='text' 
        ref={desc}  
        required
        placeholder="What's happening 
        akello !" className='shareinput'/>
      </div>

       <hr className='hr-s'></hr>

      <div className="sharebottom">
        <div className="shareicon" onClick={()=>imageRef.current.click()}>
            <MdPermMedia className='me'/>
            <span>Media</span>
        </div>

         <div className="shareicon">
            <BsFillEmojiSunglassesFill className='em'/>
            <span>Emoji</span>
        </div>

         <div className="shareicon">
            <CgTag className='ta'/>
            <span>Tag</span>
        </div>

         <div className="shareicon">
            <ImLocation className='lo'/>
            <span>Location</span>
        </div>

        <div style={{display: 'none'}}>
          <input 
          type='file'
          name='myImage'
          ref={imageRef}
          onChange={onImageChange}
          />
        </div>

        <button className='button sh-button'>
          Share
        </button>
      </div>

      {image && (
        <div className="preview">
          <IoIosCloseCircleOutline onClick={()=>setImage(null)}/>
          <img src={URL.createObjectURL(image)} alt=''/>
        </div>
      )
      }

   </div>
    
  </div>      
  )
}
  

 
  
