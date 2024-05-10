import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import Menu from './componenets/Menu'

import Chife from './componenets/Chife'
import Book from './componenets/Book'
import Galary from './componenets/Galary'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'





const App = () => {
  return (
    <div>
  
  <Navbar/>
  <Hero/>
  <Menu/>
  <Chife/>
  <Book/>
  <Galary/>
  <Contact/>
  <Footer/>

  
 
 
    </div>
  )
}

export default App
{/* <Routes>
  <Route path='/food' element={<SignupForm/>}></Route>

</Routes> */}