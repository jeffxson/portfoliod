import React from 'react'
import {  Route , Routes  } from 'react-router-dom'
import Homescreen from './profolio/Homescreen'
import AboutScreen from './profolio/AboutScreen'
import Resume from './profolio/Resume'
import ContactUs from './profolio/ContactUs'
import Header from './profolio/container/Header'



const App = () => {
  return (
     <main className='py'> 
     
     <Header />
  
    <Routes>
     <Route path= '/' element= {<Homescreen/>}  /> 
     <Route path= '/about' element= {<AboutScreen/>}  /> 
     <Route path= '/resume' element= {<Resume/>}  /> 
     <Route path= '/contact' element= {<ContactUs/>}  /> 
     </Routes>
     
    
    </main>
  
  )
} 

export default App