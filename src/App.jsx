import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './Component/Home';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import ProtectedRoute from './Component/ProtectedRoute';
import { useState } from 'react';
import Dashboard from './Component/Dashboard';

function App() {
  const[loggedIn,setLoggedIn] =useState(false)
 

  return (
    <>
    <BrowserRouter>
    <Navbar loggedIn={loggedIn}/>
    <Routes>
      {/* <Route path='/' element={<Home/>}></Route> */}
      <Route path='/' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route element={<ProtectedRoute loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}>
      <Route path='/Home' element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>

      </Route>
     
      
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
