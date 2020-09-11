import React from 'react'
import Helmet from 'react-helmet'
import './styles.scss'

const RegionsPageTemplate = ({ metaTitle, metaDescription, title, regionsServed, regionsList }) => (
    <div>
        <Helmet>
            <title >{metaTitle}</title>
            <meta name='description' content={metaDescription} />
        </Helmet>
        <section className='section section--gradient'>
            <h1 className='title is-1 has-text-centered'>{title}</h1>
            {/* zipcode search goes here */}
        </section>
        <section>
            <h1 className='title is-1 has-text-centered'>{regionsServed.title}</h1>
            <div className='columns'>
                {regionsServed.regionType.map((item, index) => (
                    <div key={`region-${index}`} className='column'>
                        <div className='section'>
                            <div className=' region-card'>
                                <h1 className='title is-3 has-text-centered'>{item.title}</h1>
                                <div className='card-content'>
                                    <p>{item.blurb}</p>
                                    <ul>
                                        {item.title === 'Fremont County' ? 
                                        regionsList.filter(regionItem => regionItem.region.county === 'Fremont').map((regionItem, index) => {
                                            return <li key={`city-${index}`}>
                                                {regionItem.region.areaName}
                                            </li>
                                        }) :
                                        [...new Set(regionsList.filter(regionItem => regionItem.region.county !== 'Fremont')
                                        .flatMap(item => item.region.areaName))]
                                        .map((regionItem, index) => (
                                            <li key={`city-${index}`}>
                                                {regionItem}
                                            </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
)

export default RegionsPageTemplate