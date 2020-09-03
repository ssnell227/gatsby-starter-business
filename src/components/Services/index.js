import React from 'react'
import './styles.sass'

const Services = ({services}) => (
    <div className='section'>
        <div className='content'>
            <h2 className='title is-1 has-text-centered'>Services</h2>
        </div>
        <div className='columns '>
            <div className='column card'>
                <figure className='image is-square'>
                    <img src={services[0].image} />
                </figure>
                <h3 className='subtitle has-text-centered' >{services[0].title}</h3>
            </div>
            <div className='column card'>
                <figure className='image is-square'>
                    <img src={services[1].image} />
                </figure>
                <h3 className='subtitle has-text-centered' >{services[1].title}</h3>
            </div>
            <div className='column card'>
                <figure className='image is-square'>
                    <img src={services[2].image} />
                </figure>
                <h3 className='subtitle has-text-centered' >{services[2].title}</h3>
            </div>
            <div className='column card'>
                <figure className='image is-square'>
                    <img src={services[3].image} />
                </figure>
                <h3 className='subtitle has-text-centered' >{services[3].title}</h3>
            </div>
        </div>
    </div>
)

export default Services