'use client'
import Link from "next/link"
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Explore() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    // Image data
    const mainImages = [
        {
            src: "/assets/images/banner/image 11.png",
            title: "Digital Marketing",
            about: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services"
        },
        {
            src: "/assets/images/banner/image 16.png",
            title: "Digital Marketing",
            about: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services"
        },
        {
            src: "/assets/images/banner/image 11.png",
            title: "Digital Marketing",
            about: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services"
        },
        {
            src: "/assets/images/banner/image 11.png",
            title: "Digital Marketing",
            about: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services"
        }
    ]

    const thumbImages = [
        { src: "/assets/images/banner/image 11.png", link: "Project 1" },
        { src: "/assets/images/banner/image 16.png", link: "Project 2" },
        { src: "/assets/images/banner/image 11.png", link: "Project 3" },
        { src: "/assets/images/banner/image 11.png", link: "Project 4" }
    ]

    // Swiper options for the main slider
    const mainSwiperOptions = {
        loop: true,
        spaceBetween: 30,
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [Navigation, Thumbs],
        className: "mySwiper2"
    }

    // Swiper options for the thumbnail slider
    const thumbnailSwiperOptions = {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        modules: [Navigation, Thumbs],
        className: "mySwiper"
    }

    return (
        <section className="tf-section tf-artis collection-carousel2">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-heading style-4 mb63 wow fadeInUp">
                            <h3 className="heading">Explore Our Recently Projects </h3>
                            <p style={{ borderLeft: "2px solid #FF9800", paddingLeft: "10px" }}>
                                PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12 wow fadeInUp">1
                        {/* Main Swiper */}
                        <div className="swiper slideThumb">
                            <Swiper {...mainSwiperOptions}>
                                {mainImages.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="content-thumb">
                                            <div className="avt">
                                                <img src={img.src} alt={img.title} />
                                            </div>
                                            <div className="content" style={{ textAlign: "center", }}>
                                                <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
                                                    {img.title}
                                                </h3>
                                                <p style={{ fontSize: "15px"}}>
                                                    {img.about}.tf-artis .content-thumb .content
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Thumbnail Swiper */}
                        <div className="swiper slideThumbMain">
                            <Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper}>
                                {thumbImages.map((thumb, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="content-glr" style={{ textAlign: "center" }}>
                                            <img src={thumb.src} alt={thumb.link} style={{ borderRadius: "8px" }} />
                                            <Link href="#" style={{ display: "block", marginTop: "5px", fontSize: "14px" }}>
                                                {thumb.link}
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="group-navigation">
                                <div className="swiper-button-next swiper-button-next" />
                                <div className="swiper-button-prev swiper-button-prev" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
