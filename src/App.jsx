import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import  ResetPassword from './pages/reset';
import EmailVerify from './pages/verify';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>  
   <ToastContainer/>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element= {<Login />}/>
      <Route path='/email-verify' element= {<EmailVerify/>} />
      <Route path='/reset-password' element= {<ResetPassword/>}  />
    </Routes>
  
    </>
  )
  
}


export default App;