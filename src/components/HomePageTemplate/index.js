import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Services from '../Services'
import InfoBlock from '../InfoBlock'
import Carousel from '../Carousel'
import GoogleReviews from '../GoogleReviews'



const HomePageTemplate = ({
  heading,
  description,
  meta_title,
  meta_description,
  carousel,
  whyblock,
  services,
  bookingBanner,
  bookingBannerRef
}) => (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='section section--gradient'>
        <div className='container'>
          <Carousel content={carousel} />
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h3>
                    <p>{description}</p>
                    <Link className='button is-primary' to='/about'>About us</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section hero is-primary' ref={bookingBannerRef}>
        <div className='hero-body'>
          <div className='container booking-banner-content'>
            <h2 className='subtitle'>{bookingBanner}</h2>
            <button className='button is-white is-outlined'>Schedule an appointment now</button>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <Services services={services} />
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <InfoBlock content={whyblock} imgSize='large' />
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <GoogleReviews />
        </div>
      </section>
    </div>
  )

HomePageTemplate.propTypes = {
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  carousel: PropTypes.object,
  whyblock: PropTypes.object,
  services: PropTypes.array
}

export default HomePageTemplate
