'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
}

import Link from "next/link"
export default function DigitalMarketing({mData}) {
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
                                            <div className="tf-slider-item" style={{
                                                padding: '67px 0 10px'
                                            }}>
                                                <div className="content-inner">
                                                    <h1 className="heading">
                                                        <span style={{ fontSize: 'bold', color: '#FF9800' }}> {mData[0].title1}</span>  <span>{mData[0].title2}</span>
                                                        <img src="/assets/images/slider/bg-slider.png" alt="Image" />
                                                    </h1>
                                                    <p className="sub-heading">{mData[0].disc}</p>
                                                    <div className="btn-slider ">
                                                        <Link href="#" className="tf-button style-2">Portfolio</Link>
                                                        <Link href="/connect-us" className="tf-button style-3">Contact Us</Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <div className="img-slider-main ani5"><img src={mData[0].img} alt="Image" /></div>
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
