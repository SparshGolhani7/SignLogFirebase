import React from 'react'
import {NavLink} from 'react-router-dom'
 
function Navbar() {
  return (
    <nav>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/SignUp'}>SignUp</NavLink></li>
            <li><NavLink to={'/Login'}>Login</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar

/// https://reactsignuplogin-default-rtdb.firebaseio.com/         

// above link for firebase data base realtime data base  project name ReactSignupLogin
