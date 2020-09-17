import React from 'react'

import './styles.scss'

import FacebookIcon from '@material-ui/icons/Facebook';


const NavTop = () => (
    <nav className='navbar top-nav is-primary is-spaced is-flex-touch'>
        <div className='navbar-start'>
            <div className='navbar-item'>
                <a target='__blank' href='https://schedule-a-home-inspection-uub7y.appointlet.com/' className='button is-white is-outlined'>Schedule a Home Inspection</a>
            </div>
        </div>
        <div className='navbar-end is-flex-touch media-icons'>
            <a href='https://www.facebook.com/FremontCountyHomeInspection' target='__blank' className='nav-icon navbar-item'>
                <FacebookIcon />
            </a>
            <a href='https://www.google.com/maps/place/Fremont+County+Home+Inspection/@42.823219,-108.7170646,17z/data=!3m1!4b1!4m5!3m4!1s0x875901046d4f74db:0x4c347fa58c67fa94!8m2!3d42.823219!4d-108.7148759' target='__blank' className='navbar-item'>
                <img src='/img/googleclear.png' width='30' />
            </a>
        </div>
    </nav>
)

export default NavTop