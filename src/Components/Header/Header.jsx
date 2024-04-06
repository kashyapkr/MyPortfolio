import React from 'react'
import "./Header.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';


const Header = ({ menu, setMenu }) => {


    return (
        <div className={'header ' + (menu && 'active')}>
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro" className='logo'>kkr</a>
                    <div className="itemContainer">
                        <PersonIcon className='icon' />
                        <span>+91-6282357895</span>
                    </div>

                    <div className="itemContainer">
                           <MailIcon className='icon' />
                            <span style={{ textDecoration: 'none' }}>kashyapkr4147@gmail.com</span>
                        
               
                    </div>

                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => {
                        console.log("Clicked");
                        { setMenu(!menu) }
                    }}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header