import React from 'react'
import "./portfolio.scss";
import skills from "../../data/skills.json"
import history from "../../data/history.json"

const portfolio = () => {
    return (
        <div className='portfolio' id="portfolio">
            <h2 className='title'>Tech Stack</h2>
            
                <div className='left'>{
                    skills.map((skills,index)=>{
                        return <div key={index} className='container'>
                                <img src={skills.imageSrc} alt={skills.title}></img>
                                 <p>{skills.title}</p>
                        </div>

                    })
                }
                </div>

        
</div>
                
    )
}

export default portfolio