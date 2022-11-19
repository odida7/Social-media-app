import React from 'react'
import { Link } from 'react-router-dom';
import "./login.css";

//import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>ODIDA Social.</h1>
        
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button className='button'>Register</button>
          </Link>
            
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input className='inputs' type="text" placeholder="Username" />
            <input className='inputs' type="password" placeholder="Password" />
            <button className='button'>Login</button>
          </form>
        </div>
      </div>

    </div>
  )
}
