
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Intro from './Components/Intro/Intro'
import Portfolio from './Components/Portfolio/portfolio'
import Works from './Components/works/works'
import Testimonials from './Components/Testimonials/testimonials'
import "./App.scss"
import Menu from './Components/Menu/Menu'
import { useState } from 'react'
import Projects from './Components/Projects/Projects'



function App() {
 
  const[menuOpen,setMenuOpen] = useState(false);

  return (
    <div className='App'>
      <Header menu = {menuOpen} setMenu={setMenuOpen} />
      <Menu  menu = {menuOpen} setMenu={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Testimonials/>
        
         <Works/> 
         <Projects/>
        <Portfolio/>
        <Contact/>
        </div>    
    </div>
  )
}

export default App
