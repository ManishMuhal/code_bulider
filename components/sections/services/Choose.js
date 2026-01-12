'use client'
import Link from "next/link"
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// Default data for the Choose component
const defaultData = {
    heading: "Why Choose Us",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services,compliance assistance and targeted support. Each of the services created.",
    image: "/assets/images/banner/thumb-banner2.png",
    accordions: [
        {
            title: "Innovative and Passionate",
            content: "As a digital marketing agency in Jaipur, we have a deep desire to push the boundaries of the industry. We are always looking for innovative methods to help our customers earn more money"
        },
        {
            title: "Investment",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc. Faucibus nunc, egestas quis semper porttitor. Fermentum magna commodo sodales curabitur. Pharetra, gravida nunc aliquam dolor id magna eu orci. Porttitor magna nulla est amet dolor ultricies egestas gravida. Nulla pellentesque convallis ligula placerat consectetur tortor, lobortis velit risus."
        },
        {
            title: "Services",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc. Faucibus nunc, egestas quis semper porttitor. Fermentum magna commodo sodales curabitur. Pharetra, gravida nunc aliquam dolor id magna eu orci. Porttitor magna nulla est amet dolor ultricies egestas gravida. Nulla pellentesque convallis ligula placerat consectetur tortor, lobortis velit risus."
        },
        {
            title: "Customer Support",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc. Faucibus nunc, egestas quis semper porttitor. Fermentum magna commodo sodales curabitur. Pharetra, gravida nunc aliquam dolor id magna eu orci. Porttitor magna nulla est amet dolor ultricies egestas gravida. Nulla pellentesque convallis ligula placerat consectetur tortor, lobortis velit risus."
        }
    ]
}

export default function Choose({ data = defaultData }) {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion((prevState) => prevState === key ? null : key)
    }

    // Merge passed data with defaults to ensure all properties exist
    const chooseData = { ...defaultData, ...data }

    return (<>
        <section className="tf-section tf-artis collection-carousel2">
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tf-heading style-4 mb63 wow fadeInUp">
                            <h3 className="heading">{chooseData.heading}</h3>
                            <p style={{ borderLeft: "2px solid #FF9800", paddingLeft: "10px" }}>
                                {chooseData.subHeading}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tf-section tf-banner-create banner3">
            <div className="tf-container">
                <div className="row vertical-middle">
                    <div className="col-md-6">
                        <div className="content-banner ">
                            <div>
                                <section className="tf-faq">
                                    <div className="tf-container">
                                        <div className="row justify-content-center">
                                            <div className="col-md-12">
                                                <div className="tf-accordion">
                                                    {chooseData.accordions.map((accordion, index) => (
                                                        <div className="tf-toggle" onClick={() => handleAccordion(index)} key={index}>
                                                            <h6 className={isAccordion === index ? "tf-toggle-title active" : "tf-toggle-title"}>
                                                                {accordion.title}
                                                            </h6>
                                                            <div className="tf-toggle-content" style={{ display: `${isAccordion === index ? "block" : "none"}` }}>
                                                                {accordion.content}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content-right">
                            <div className="thumb">
                                <img className="ani4" src={chooseData.image} style={{ maxWidth: "70%" }} alt="images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
