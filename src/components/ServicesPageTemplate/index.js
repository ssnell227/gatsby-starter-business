import React from 'react'
import Helmet from 'react-helmet'

import InfoBlock from '../InfoBlock'

const ServicesPageTemplate = ({
    title,
    subtitle,
    meta_title,
    meta_description,
    asbesdosBlock,
    homeInspectionBlock,
    leadBlock,
    radonBlock,
    wellWaterBlock,
    pricingBlock

}) => {
    console.log(asbesdosBlock)
    return (
        <div>
            <Helmet>
                <title >{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <section className='section section--gradient'>
            <h1 className='title is-1 has-text-centered'>{title}</h1>
                <div className='columns'>
                    <div className='column '>
                        <figure className='image is-square'>
                            <img src={homeInspectionBlock[0].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered'>{homeInspectionBlock[0].title}</h3>
                        <p className='has-text-centered'>{homeInspectionBlock[0].text}</p>
                    </div>
                    <div className='column '>
                        <figure className='image is-square'>
                            <img src={homeInspectionBlock[1].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered'>{homeInspectionBlock[1].title}</h3>
                        <p className='has-text-centered'>{homeInspectionBlock[1].text}</p>
                    </div>
                    <div className='column '>
                        <figure className='image is-square'>
                            <img src={homeInspectionBlock[2].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered'>{homeInspectionBlock[2].title}</h3>
                        <p className='has-text-centered'>{homeInspectionBlock[2].text}</p>
                    </div>
                </div>
                <div className='level is-mobile'>
                    <div className='level-item'/>
                        <button className='button is-large level-item'>Pricing</button>
                        <div className='level-item'/>
                        <button className='button is-large level-item'>Book Now</button>
                        <div className='level-item'/>
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='content'>
                    <h2 className='title is-1 has-text-centered'>Other Services</h2>
                </div>
                <div className='container'>
                    <InfoBlock content={asbesdosBlock} />
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='container'>
                    <InfoBlock content={leadBlock} />
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='container'>
                    <InfoBlock content={radonBlock} />
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='container'>
                    <InfoBlock content={wellWaterBlock} />
                </div>
            </section>

        </div>
    )
}

export default ServicesPageTemplate