import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

function ProtectedRoute({loggedIn}) {
  return loggedIn==true?<Outlet/>:<Navigate to='/'/>
}

export default ProtectedRoute