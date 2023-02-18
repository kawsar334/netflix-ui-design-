
import './global.scss';

import {Routes, Route } from "react-router-dom" ;
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


function App() {

  
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/video/:id' element={<Watch />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
