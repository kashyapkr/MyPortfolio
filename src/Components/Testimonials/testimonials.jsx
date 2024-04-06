import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import "./testimonials.scss";
import CodeIcon from '@mui/icons-material/Code';

const testimonials = () => {
    return (
        <div className='testimonials' id="testimonials">
            <div className="container">

                <h2><CodeIcon/>Hello World<CodeIcon/></h2>
                <div className="content">
                    <div className="img-container">
                        <img src="assets/kid.png" alt="profile pic"></img>
                    </div>
                    <div className="text-container">
                        <p className='text'><span className='ita'>Mechatronics grad turned coding enthusiast!</span><br></br>
                            <br></br>
                            I recently fell head over heals for coding, and now I'm
                            on a mission to conquer the tech world 🚀
                            <br></br>
                            I am proficient in <span>Java </span>
                            and <span>Spring Boot</span> for backend development, complimented by <span>React </span>
                            for frontend expertise.
                            <br></br>
                            I am always up for a challenge and perpetually curious,
                            currently on the lookout for exciting opportunities to grow and learn🌱
                            When I'm not in the coding zone, you'll find me either exploring new places or mastering the art of power naps.
                            <br></br>
                            Let's chat tech, goals, or just share some coding wisdom!
                        </p>
                        <span className='contact'>
                            <a href="#contact" >
                                <button>
                                    <p>Contact Me</p>
                                    <SendIcon className='sendIcon' />
                                </button>
                            </a>
                        </span>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default testimonials