'use client'
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
}

import Link from "next/link"

// Default data for the Agency component
const defaultData = {
    heading: "Best Affordable Digital Marketing Agency",
    description: "To expand, the best money to be spent would be on advertising. PM IT Solution digital marketing company in Jaipur is a group of young, creative, enthusiastic and brilliant people who know precisely what a brand needs and how to acquire it. We're here to provide you best digital marketing services in establishing your company's name and reputation via strategic brand development. Unfortunately, these youngsters are the greatest prospects for PM IT Solution.",
    image: "/assets/images/slider/slider-5.png",
    services: [
        {
            icon: "/assets/images/svg/icon-create-5.svg",
            title: "Search Engine Optimization (SEO)",
            content: "Join millions online; elevate with SEO. Our Online Marketing enhances your website's visibility and attracts quality visitors, maximizing impact and success.",
            link: "#"
        },
        {
            icon: "/assets/images/svg/icon-create-6.svg",
            title: "Social Media Marketing",
            content: "We've crafted diverse strategies to amplify your message, connecting with your target audience effectively through social media marketing. Explore options now.",
            link: "#"
        },
        {
            icon: "/assets/images/svg/icon-create-3.svg",
            title: "PPC Services/Google Ads",
            content: "Experience disappointment with PPC/Google AdWords spending? Let a skilled specialist handle it, ensuring cost-effectiveness and quality traffic to your site.",
            link: "#"
        }
    ]
}

export default function Agency({ data = defaultData }) {
    // Merge passed data with defaults to ensure all properties exist
    const agencyData = { ...defaultData, ...data }

    return (
        <>
            <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home ">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item style-4">
                                                <div className="content-inner">
                                                    <h1 className="heading">
                                                        {agencyData.heading}
                                                    </h1>
                                                    <p className="sub-heading">{agencyData.description}</p>
                                                </div>
                                                <div className="image">
                                                    <div className="ani4"><img src={agencyData.image} alt="Image" style={{ width: '80%', height: 'auto' }} /></div>
                                                    <div className="card-countdown">
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
            <section className="tf-help-center">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="tf-create-wrap">
                                {agencyData.services.map((service, index) => (
                                    <div className="tf-create style-2" key={index}>
                                        <div className="icon">
                                            <img src={service.icon} alt="Image" />
                                        </div>
                                        <h6 className="title"><Link href={service.link}>{service.title}</Link></h6>
                                        <p className="content">{service.content}</p>
                                        <div className="button">
                                            <Link href={service.link} className="tf-button">View more<i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
