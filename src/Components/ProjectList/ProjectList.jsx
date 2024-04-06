import React from 'react';
import './ProjectList.scss'

export const ProjectList = ({id,title,active,setSelected}) => {
  return (
   <li  className={active ? "portfolioList active" : "portfolioList"}
   onClick={() => setSelected(id)}>
        {title}

   </li>
  )
}
