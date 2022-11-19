import React from 'react'
import './rightbar.css' 
import bu from '../../pics/bu.png';


export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="items">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button className='button fcbutton'>follow</button>
              <button className='button dibutton'>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
             <img src={bu} alt='' className='userpic'/>
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button className='button fcbutton'>follow</button>
              <button className='button dibutton'>dismiss</button>
            </div>
          </div>
        </div>
        <div className="itema">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <p>
                <span>Jane </span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <p>
                <span>Jane</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="itemb">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={bu} alt='' className='userpic'/>
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}
