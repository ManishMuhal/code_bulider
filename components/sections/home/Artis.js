
'use client'
import Link from "next/link"
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Artis() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    // Swiper options for the main slider
    const mainSwiperOptions = {
        loop: true,
        spaceBetween: 30,
        // slidesPerView: 'auto',
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
        // freeMode: true,
        // watchSlidesProgress: true,
        modules: [Navigation, Thumbs],
        className: "mySwiper"
    }
    return (
        <>

            <section className="tf-section tf-artis collection-carousel2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading style-4 mb63 wow fadeInUp">
                                <h3 className="heading">Best Aritst</h3>
                                {/* <Link className="button" href="/explore-banner">EXPLORE MORE</Link> */}
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeInUp">
                            <div className="swiper slideThumb ">
                                <Swiper {...mainSwiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="content-thumb">
                                            <div className="avt">
                                                <img src="/assets/images/banner/glr-2.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>Hakunamatata</h4>
                                                <h5>100 ETH</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content-thumb">
                                            <div className="avt">
                                                <img src="/assets/images/banner/glr-2.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>Hakunamatata</h4>
                                                <h5>100 ETH</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content-thumb">
                                            <div className="avt">
                                                <img src="/assets/images/banner/glr-2.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>Hakunamatata</h4>
                                                <h5>100 ETH</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content-thumb">
                                            <div className="avt">
                                                <img src="/assets/images/banner/glr-2.jpg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4>Hakunamatata</h4>
                                                <h5>100 ETH</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="swiper slideThumbMain">
                                <Swiper {...thumbnailSwiperOptions} onSwiper={setThumbsSwiper} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="content-glr">
                                            <img src="/assets/images/banner/glr-1.jpg" alt="images" />
                                            <Link href="#">Hologloball</Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content-glr">
                                            <img src="/assets/images/banner/glr-3.jpg" alt="images" />
                                            <Link href="#">Hologloball</Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content-glr">
                                            <img src="/assets/images/banner/glr-4.jpg" alt="images" />
                                            <Link href="#">Hologloball</Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content-glr">
                                            <img src="/assets/images/banner/glr-3.jpg" alt="images" />
                                            <Link href="#">Hologloball</Link>
                                        </div>
                                    </SwiperSlide>
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
        </>
    )
}
