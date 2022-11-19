import React from 'react'
import { Link } from "react-router-dom";
import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <div className="cardr">
        <div className="left">
          <h1>ODIDA Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/">
          <button className='button'>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input className='inputs' type="text" placeholder="Username" />
            <input className='inputs' type="email" placeholder="Email" />
            <input className='inputs' type="password" placeholder="Password" />
            <input className='inputs' type="text" placeholder="Name" />
            <button className='button'>Register</button>
          </form>
        </div>
      </div>

    </div>
  )
}
