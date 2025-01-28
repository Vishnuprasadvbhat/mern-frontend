import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Login} from './pages/login';
import { ResetPassword } from './pages/reset';
import { EmailVerify} from './pages/verify';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>  
    <div >
   <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/email-verify' element= {<EmailVerify />}   />
      <Route path='/reset-password' element= {<ResetPassword />}   />
    </Routes>
    </div>
    </>
  )
  
}


export default App;