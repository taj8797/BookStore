import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contactus from './components/Contactus'




const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/constactus' element={<Contactus/>}/>


    </Routes>
  )
}

export default App
