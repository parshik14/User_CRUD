import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './assets/pages/Landing'
import GetUser from './assets/pages/GetUser'
import GetAllUser from './assets/pages/GetAllUser'
import UpdateUser from './assets/pages/UpdateUser'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/getuser' element={<GetUser />}/>
    <Route path='/getalluser' element={<GetAllUser />}/>
    <Route path='/updateuser' element={<UpdateUser />}/>
    <Route path='/getuser' element={<GetUser />}/>
   </Routes>
  )
}

export default App