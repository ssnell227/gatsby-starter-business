import React from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';


const NavTop = () => (
    <nav className='navbar top-nav'>
        <div className='navbar-start'>
            <div className='navbar-item'>
                <a className='button'>Schedule a Home Inspection</a>
            </div>
        </div>
        <div className='navbar-end'>
            <a href='https://www.facebook.com/FremontCountyHomeInspection' target='__blank' className='nav-icon navbar-item'>
                <FacebookIcon />
            </a>
            <a href='https://www.google.com/maps/place/Fremont+County+Home+Inspection/@42.823219,-108.7170646,17z/data=!3m1!4b1!4m5!3m4!1s0x875901046d4f74db:0x4c347fa58c67fa94!8m2!3d42.823219!4d-108.7148759' target='__blank' className='navbar-item'>
                <img src='/img/google.png' width='20' />
            </a>
        </div>
    </nav>
)

export default NavTop