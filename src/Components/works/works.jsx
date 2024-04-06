import React, { useEffect, useState } from 'react'
import "./works.scss";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';

const works = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [showHeading, setShowHeading] = useState(true);

    const handelClick = (way) => {
        if (way === "left") {
            setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2);
        }
        else {
            setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);
        }
    }

    const data = [
        {
            id: "1",
            icon: "assets/mobile.png",
            title: "FinTracker",
            desc:
                `It is a comprehensive application designed to empower users in efficiently managing their finances. The app is built with <span style="color:rgba(220, 20, 60, 0.836);  font-size:15px; text-decoration:none; font-weight: bold;">spring boot</span> and <span style="color:rgba(220, 20, 60, 0.836); font-size:15px; text-decoration:none; font-weight: bold;">react</span>, and provides authentication and authorization using latest <span style="color: rgba(220, 20, 60, 0.836);  font-size:15px; text-decoration:none; font-weight: bold;">spring security</span> and <span style="color: rgba(220, 20, 60, 0.836); font-size:15px; text-decoration:none; font-weight: bold;">JWT</span>.`,
            video: "assets/expense.mp4",
            img:'',
            git: "https://github.com/kashyapkr/EXPENSE_APP",
            live: "https://main--expense-trackerap.netlify.app/"
        },
        {
            id: "2",
            title: "Ticket Tracker",
            desc:
                `Developed a comprehensive ticket tracking application with CRUD operations, real-time search, pagination, and sorting capabilities.`,
            img:
                "assets/student_management.png",
            git: "https://github.com/kashyapkr/Ticker-Tracker",
            live: "",
            video:'assets/ticket.mp4'
        },
         
        {
            id: "3",
            title: "Todo Application",
            desc:
                `A todo application elevated with <span style="color:rgba(220, 20, 60, 0.836);  font-size:15px; text-decoration:none; font-weight: bold;">spring security </span> basic authentication, role based authorization using jwt, made with <span style="color:rgba(220, 20, 60, 0.836);  font-size:15px; text-decoration:none; font-weight: bold;">spring boot </span> for the server side and <span style="color:rgba(220, 20, 60, 0.836);  font-size:15px; text-decoration:none; font-weight: bold;">react js </span> for the frontend part.This project helped me learn about the basics of spring security.`,
            img:
                "assets/todo.png",
            git: "https://github.com/kashyapkr/TO-DO-app",
            live: "",
            video:''
        },
       
    ];



    return (
        <div className='works' id="works">
            <h2 className='heading'>Recent Projects</h2>

            <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>

                {data.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p className='desc' dangerouslySetInnerHTML={{ __html: d.desc }} />
                                    <div className="links" >
                                        <a href={d.git} target="_blank">
                                             <GitHubIcon className='ic'/>
                 
                                        </a>
                                        {d.live && 
                                         <a className="linksclass"href={d.live} target="_blank">
                                            <p className='live'>Live<ArrowOutwardIcon className='arr'/></p>
                                               
                                          </a>
                                        }
                                       


                                    </div>

                                </div>
                            </div>
                            <div className="right">
                                {d.video ? (
                                    
                                    <video controls>
                                        <source src={d.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    
                                    <img src={d.img} alt="projects" />
                                )}
                            </div>
                        </div>

                    </div>))}
            </div>
            <img src="assets/arrow.png" className='arrow left' onClick={() => handelClick("left")} />
            <img src="assets/arrow.png" className='arrow right' onClick={() => handelClick()} />
        </div>




    )
}

export default works
