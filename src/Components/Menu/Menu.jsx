import React from 'react'
import './Menu.scss'

const Menu = ({menu,setMenu}) => {
  return (
    <div className={'menu ' +(menu && 'active')}>
        <ul>
            <li onClick={()=>setMenu(false)}> 
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenu(false)}>
                <a href="#portfolio">Tech Stack</a>
            </li>
            <li onClick={()=>setMenu(false)}>
                <a href="#works">Works</a>
            </li>
           
            <li onClick={()=>setMenu(false)}>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
    </div>
  )
}

export default Menu