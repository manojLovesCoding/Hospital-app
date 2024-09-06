import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="mx-4 sm:max-[10%]">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/appointments/:docId' element={<Appointments />} />
      </Routes>
    </div>
  )
}

export default App