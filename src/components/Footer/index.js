import React from 'react'
import config from '../../../config'
import { Link } from 'gatsby'

import './styles.scss'

import FacebookIcon from '@material-ui/icons/Facebook';


const Footer = () => {
  return (
    <footer className='hero is-dark'>
      <div className='level'>
            <div className='level-item'>
                <img src='/img/FChomeinspection.jpg' width='200' />
            </div>
            <div className='level-item stacked'>
                <img src='https://s3.amazonaws.com/uploads-east-1.nachi.org/program-logos/8/internachi-certified-professional-inspector-cpi-logo-1545171029.?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIQ5VIIQFMV73HDIQ%2F20200916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200916T174858Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=d7c0420ad53f5049677634d1f6b871fe75d305792a481bb8f57d6574a78ed651' width='150' />
                <p>#19100604</p>
            </div>
            <div className='level-item stacked'>
                <Link className='button is-white is-outlined' to='/contact'>Contact Us</Link>
                <p>(307) 349 1492</p>
                <p>Lander, Wyoming</p>
            </div>
        </div>
      <nav className='navbar bottom-nav is-spaced is-flex-touch'>
        <div className='navbar-start'>
          <div className='navbar-item'>
            <p className='has-text-centered'>
              {config.copyright}
            </p>
          </div>
        </div>
        <div className='navbar-end media-icons is-flex-touch'>
          <a href='https://www.facebook.com/FremontCountyHomeInspection' target='__blank' className='nav-icon navbar-item'>
            <FacebookIcon />
          </a>
          <a href='https://www.google.com/maps/place/Fremont+County+Home+Inspection/@42.823219,-108.7170646,17z/data=!3m1!4b1!4m5!3m4!1s0x875901046d4f74db:0x4c347fa58c67fa94!8m2!3d42.823219!4d-108.7148759' target='__blank' className='navbar-item'>
            <img src='/img/googleclear.png' width='30' />
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
