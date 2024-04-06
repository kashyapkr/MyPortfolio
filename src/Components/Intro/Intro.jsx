import React, { useEffect, useRef } from 'react'
import './Intro.scss'
import { init } from 'ityped';
import resume from "../../../public/assets/resume.pdf"
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Intro = () => {
  const typeValue = useRef();
  useEffect(() => {
    init(typeValue.current, {
      showCursor: true, backDelay: 1500,
      backSpeed: 60, strings: ['Full Stack Developer', 'Mechatronics Engineer'],
    });

  }, [])
  return (
    <div className='Intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/kashyap.png" alt="arrow" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there! I'm</h2>
          <h1>Kashyap Krishna</h1>
          <h3>A <span ref={typeValue}></span></h3>
          <span className='cv'>
            <a href={resume} download="kashyap cv">
              <button>
                <DownloadIcon className='downloadIcon'/>
                <p>Resume</p></button>
            </a> 
          <a href="https://github.com/kashyapkr" target="_blank" className='iconA'>
              {/* <img src="assets/gitbug.png" alt="github"/> */}
              <GitHubIcon className='githubIcon'/>
            </a>

            <a href="https://www.linkedin.com/in/kashyapkr/" target="_blank" className='iconA'>
              {/* <img src="assets/gitbug.png" alt="github"/> */}
              <LinkedInIcon className='linkedinIcon'/>
            </a>
       

          </span>
        </div>
        <a className='works' href="#testimonials">
          <img src="assets/down.png" alt="" />
        </a>

      </div>
    </div>
  )
}

export default Intro