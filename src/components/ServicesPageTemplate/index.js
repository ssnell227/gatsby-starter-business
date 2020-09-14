import React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'

import InfoBlock from '../InfoBlock'

const ServicesPageTemplate = ({
    title,
    subtitleTop,
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
    console.log(pricingBlock)
    return (
        <div>
            <Helmet>
                <title >{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <section class="hero services-hero " >
                <div class="hero-body">
                    <div class="container box about-title">
                        <h1 className='title is-size-2-desktop is-size-3-tablet is-size-4-mobile has-text-centered '>{title}</h1>
                    </div>
                </div>
            </section>
            <div className='container'>
                <section className='section section--gradient'>
                    <h3 className='subtitle has-text-centered'>{subtitleTop}</h3>
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
                        <div className='level-item ' />
                        <button className='button is-large level-item'>Pricing</button>
                        <div className='level-item' />
                        <button className='button is-large level-item'>Book Now</button>
                        <div className='level-item' />
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
                <section>
                    <h1 className='title is-1 has-text-centered'>{pricingBlock.title}</h1>
                    <div className='columns'>
                        <div className='column'>
                            <div className='section'>
                                <div className=' pricing-card'>
                                    <h1 className='title is-3 has-text-centered'>{pricingBlock.homeInspectionPricing.title}</h1>
                                    <div className='card-content'>
                                        {pricingBlock.homeInspectionPricing.pricing.map((pricingItem, index) => (
                                            <div className='pricing-item' key={`homeInspectionPricing-${index}`}>
                                                <p><strong>{pricingItem.text}</strong>: {pricingItem.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column '>
                            <div className='section'>
                                <div className='pricing-card'>
                                    <h1 className='title is-3 has-text-centered'>{pricingBlock.additionalPricing.title}</h1>
                                    <div className='card-content'>
                                        {pricingBlock.additionalPricing.pricing.map((pricingItem, index) => (
                                            <div className='pricing-item' key={`homeInspectionPricing-${index}`}>
                                                <p><strong>{pricingItem.item}</strong>: {pricingItem.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ServicesPageTemplate