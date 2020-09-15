import React from 'react'
import Slider from 'react-slick'
import './styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from '../../../static/icons/arrow-left-thick.png'
import rightArrow from '../../../static/icons/arrow-right-thick.png'

const NextArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, height: '400px' }}
        onClick={onClick}
    >
        <img style={{ position: 'absolute', top: '50%', left: '0px' }} src={rightArrow} />
    </div>
)
const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style, height: '400px' }}
        onClick={onClick}
    >
        <img style={{ position: 'absolute', top: '50%', left: '0px' }} src={leftArrow} />
    </div>
)

const Carousel = ({ content }) => {
    const settings = {
        dots: true,
        className: 'slider',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    }

    console.log(content.carousel1.title)
    return (
        <div className='columns'>

            <div className='column mobile-is-12 is-10 is-offset-1'>
                <Slider {...settings}>
                    <div className='slider-item'>
                        <h2 className='carousel-title'>{content.carousel1.title}</h2>
                        <p className='carousel-text'>{content.carousel1.text}</p>
                        <img src={content.carousel1.image} />
                    </div>
                    <div className='slider-item'>
                        <h2 className='carousel-title'>{content.carousel2.title}</h2>
                        <p className='carousel-text'>{content.carousel2.text}</p>
                        <img src={content.carousel2.image} />
                    </div>
                    <div className='slider-item'>
                        <h2 className='carousel-title'>{content.carousel3.title}</h2>
                        <p className='carousel-text'>{content.carousel3.text}</p>
                        <img src={content.carousel3.image} />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default Carousel