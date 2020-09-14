import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

import './styles.scss'

import SvgIcon from '@material-ui/core/SvgIcon';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import BuildIcon from '@material-ui/icons/Build';

const AboutPageTemplate = ({ title }) => {

  return (
    <div>
      <section className='section section--gradient'>
        <div className='columns'>
          <div className='column'>
            <div className='card'>
              <div className='card-image '>
                  <figure className='large-icon columns'>
                    <MenuBookIcon className='column'/>
                  </figure>
              </div>
              <div className='card-header-title'>

              </div>
              <div className='card-content'>
                <div className='content'>

                </div>

              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='card-image'>
                <figure className='large-icon'>
                  <SearchIcon />
                </figure>
                {/* MUI icon */}
              </div>
              <div className='card-content'>
                <div className='content'>

                </div>

              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='card-image'>
                <figure className='large-icon'>
                  <BuildIcon />
                </figure>
                {/* MUI icon */}
              </div>
              <div className='card-content'>
                <div className='content'>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>

      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

export default AboutPageTemplate
