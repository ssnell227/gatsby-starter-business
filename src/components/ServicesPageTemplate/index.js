import React from 'react'
import Helmet from 'react-helmet'

import InfoBlock from '../InfoBlock'

const ServicesPageTemplate = ({
    title,
    subtitle,
    meta_title,
    meta_description,
    asbesdosBlock,
    homeInpsectionBlock,
    leadBlock,
    radonBlock,
    wellWaterBlock,
    pricingBlock

}) => {
    console.log(asbesdosBlock, leadBlock, radonBlock, wellWaterBlock)
    return (
        <div>
            <Helmet>
                <title>{meta_title}</title>
                <meta name='description' content={meta_description} />
            </Helmet>
            <h1>{title}</h1>
            <section className='section section--gradient'>
                <div className='container'>
                    {/* <InfoBlock content={asbesdosBlock} /> */}
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='container'>
                    {/* <InfoBlock content={leadBlock} /> */}
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='container'>
                    {/* <InfoBlock content={radonBlock} /> */}
                </div>
            </section>
            <section className='section section--gradient'>
                <div className='container'>
                    {/* <InfoBlock content={wellWaterBlock} /> */}
                </div>
            </section>
            
        </div>
    )
}

export default ServicesPageTemplate