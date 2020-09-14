import React from 'react'
import { Link } from 'gatsby'
import './styles.sass'

const Services = ({ services }) => (
    <div className='section'>
        <div className='content'>
            <h2 className='title is-1 has-text-centered'>Services</h2>
        </div>
        <div className='columns'>
            <div className='column'>
                <Link to='/services'>
                    <div className='card'>
                        <figure className='image is-square'>
                            <img src={services[0].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered' >{services[0].title}</h3>
                    </div>
                </Link>
            </div>
            <div className='column'>
                <Link to='/services#asbesdos'>
                    <div className='card'>
                        <figure className='image is-square'>
                            <img src={services[1].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered' >{services[1].title}</h3>
                    </div>
                </Link>

            </div>
            <div className='column '>
                <Link to='/services#lead'>

                    <div className='card'>
                        <figure className='image is-square'>
                            <img src={services[2].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered' >{services[2].title}</h3>
                    </div>
                </Link>
            </div>
            <div className='column '>
                <Link to='/services#radon'>

                    <div className='card'>
                        <figure className='image is-square'>
                            <img src={services[3].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered' >{services[3].title}</h3>
                    </div>
                </Link>
            </div>
            <div className='column '>
                <Link to='/services#water'>
                    <div className='card'>
                        <figure className='image is-square'>
                            <img src={services[4].image} />
                        </figure>
                        <h3 className='subtitle has-text-centered' >{services[4].title}</h3>
                    </div>
                </Link>
            </div>
        </div>
    </div>
)

export default Services