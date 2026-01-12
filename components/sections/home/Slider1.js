'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
}

import Link from "next/link"
export default function Slider1() {
    return (
        <>

            <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home home1">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item">
                                                <div className="content-inner">
                                                    <h1 className="heading">
                                                        <span style={{ fontSize: 'bold',color:'#FF9800' }}> Designing</span> a Better
                                                        World Today <span></span>
                                                        <img src="/assets/images/slider/bg-slider.png" alt="Image" />
                                                    </h1>
                                                    <p className="sub-heading">We create the most outstanding apps and web solutions
                                                        to date. An agile methodology, state-of-the-art technologies and
                                                        coordination between client, target audience and developing team enables us to craft the best web and app service.</p>
                                                    <div className="btn-slider ">
                                                        <Link href="#" className="tf-button style-2">Portfolio</Link>
                                                        <Link href="/connect-us     " className="tf-button style-3">Contact Us</Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <div className="img-slider-main ani5"><img src="/assets/images/slider/slider-1.png" alt="Image" /></div>
                                                    <img src="/assets/images/slider/slider-2.png" alt="Image" className="img-slider-2 ani4" />
                                                    <img src="/assets/images/slider/slider-3.png" alt="Image" className="img-slider-3 ani5" />

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
