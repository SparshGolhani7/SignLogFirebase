import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
