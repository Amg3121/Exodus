/**
 * Component Section Slide Full
 * Developed by David Marin
 */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SectionSlideFull() {
    let settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings2: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings2: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings2: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const [mainCarousel, setMainCarousel] = useState([]);
    useEffect(() => {
        axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/carrousel-main').then(res => {
            const mainCarousel = res.data;
            setMainCarousel(mainCarousel);
        });
    }, [])
    return (
        <>
            <section className="slide-full">
                <div className="slide">
                    <Slider {...settings2}>
                        {mainCarousel.map(carousel => (
                            <div className="item item-info" key={carousel.mt}>
                                <a href="/">
                                    <img className="slide_desktop img-fluid" src={carousel.img1} alt="" />
                                    <img className="slide_movil img-fluid" src={carousel.img2} alt="" />
                                </a>
                                <div className="info-slide">
                                    <p className="slide-title"> {carousel.name} </p>
                                    <p className="slide-desde">desde {carousel.price_from} <span className="slide-span">{carousel.currency}</span> </p>
                                    <p className="slide-days"> {carousel.days} dias / {carousel.nights} noches </p>
                                    <a href="/" className="button-slide btn-back-red">mas informacion</a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}
export default SectionSlideFull
