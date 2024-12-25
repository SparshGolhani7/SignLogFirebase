import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home({loggedIn,setLoggedIn}) {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to crYpto cuRRencies</h1>
      <button className="logout-btn" onClick={() => setLoggedIn(false)}>
        Logout
      </button>
      {!loggedIn && navigate('/') }
      
    </div>
  )
}

export default Home
