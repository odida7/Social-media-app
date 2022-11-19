import React, { useState } from 'react'
import './post.css'
import Comment from '../../assets/comment.png'
import Share from '../../assets/share.png'
import Heart from '../../assets/like.png'
import NotLike from '../../assets/notlike.png'
import bu from '../../pics/bu.png';
import {Link} from 'react-router-dom'
import {FiMoreHorizontal} from 'react-icons/fi'
import Comments from '../comment/Comments';



const Post = ({data}) => {
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div className="Post">

       <div className="npic">
            <Link to='/profile' style={{ textDecoration:  'none' }}>
              <img src={bu} alt='' className='userpic'/>
               <span style={{color: 'black'}}><b>{data.name}</b></span>
            </Link>

            <span> 1 min ago</span> 

            <FiMoreHorizontal className='dot'/> 
          </div>
       
       <div className="po">
         <span> {data.desc}</span>
         <img src={data.img} alt="" className='po-im' />
       </div>
        


        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" />
            <div className='com'>
              <img src={Comment} alt="" onClick={() => setCommentOpen(!commentOpen)}/>
              <span style={{color: 'black', fontSize: '12px'}}>
                67comments
              </span>
            </div>
            
            <img src={Share} alt="" />
        </div>


        <span style={{color: 'black', fontSize: '12px'}} className='lik'>{data.likes} likes</span>

        {commentOpen && <Comments/>}
    </div>
  )
}

export default Post
