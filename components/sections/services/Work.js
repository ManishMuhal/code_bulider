'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Link from "next/link"

// Default data for the Work component
const defaultData = {
    heading: "Work",
    slides: [
        { image: "/assets/images/slider/Rectangle 4033.png" },
        { image: "/assets/images/slider/Rectangle 4034.png" },
        { image: "/assets/images/slider/Rectangle 4035.png" },
        { image: "/assets/images/slider/Rectangle 4036.png" }
    ],
    content: {
        title: "Digital Marketing",
        description: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services",
        buttonText: "Explore now",
        buttonLink: "/explore-banner"
    }
}

export default function Work({ data = defaultData }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    // Merge passed data with defaults to ensure all properties exist
    const workData = { ...defaultData, ...data }

    // Swiper options for the main slider
    const mainSwiperOptions = {
        loop: true,
        effect: 'fade',
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow],
        className: "mySwiper2"
    }

    // Swiper options for the thumbnail slider
    const thumbnailSwiperOptions = {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        effect: "coverflow",
        coverflowEffect: {
            rotate: -15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
        },
        freeMode: true,
        modules: [Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow],
        navigation: {
            clickable: true,
            nextEl: ".button-slide-home-3-next",
            prevEl: ".button-slide-home-3-prev",
        },
    }

    return (
        <>
            <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home-3 ">
                                <h1 className="heading text-center">
                                    {workData.heading}
                                </h1>
                                <div className="slider-thump">
                                    <Swiper {...thumbnailSwiperOptions} className="swiper-wrapper">
                                        {workData.slides.map((slide, index) => (
                                            <SwiperSlide key={index}>
                                                <img src={slide.image} alt="image" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <Swiper {...mainSwiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item style-3">
                                                <div className="content-inner">
                                                    <h1 className="heading ">
                                                        {workData.content.title} <span className="animationtext clip">
                                                        </span>
                                                    </h1>
                                                    <p className="sub-heading ">{workData.content.description}</p>
                                                    <div className="btn-slider  ">
                                                        <Link href={workData.content.buttonLink} className="tf-button style-6">{workData.content.buttonText}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
