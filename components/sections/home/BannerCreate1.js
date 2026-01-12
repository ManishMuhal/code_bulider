'use client'
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
export default function BannerCreate1() {
    return (
        <>
            <section className="tf-section tf-banner-create banner3">
                <div className="tf-container">
                    <div className="row vertical-middle">
                        <div className="col-md-12 p-5" style={{ backgroundColor: "#ff99000c" }}>
                            <div className="content-banner">
                      
                            <h2 className="wow fadeInUp">Unique ideas
                                For Your  <span className="animationtext clip">
                                    <TypeAnimation
                                        sequence={[ 
                                            ' Business',
                                            1000, 
                                            ' Startup',
                                            1000,
                                            'Growth ',
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ display: 'inline-block', marginLeft: "15px" }}
                                        repeat={Infinity}
                                        className="cd-words-wrapper ms-3">
                                    </TypeAnimation>
                                </span></h2>    
                            <p className="wow fadeInUp">PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created and delivered here are seamless, secure, scalable and result-oriented. Our team of project managers, designers, developers, marketing experts and executers is empowered with the most advanced skills, technologies and experience. </p>
                            <div className="group-btn wow fadeInUp">
                                <Link href="#" className="tf-button style-2 btn-1">Let's Talk</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section >
        </>
    )
}
