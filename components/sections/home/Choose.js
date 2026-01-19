'use client'
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Choose() {
    const features = [
        {
            icon: "/assets/images/icon/Dedicated.png",
            title: "Dedicated Teams",
            desc: "You can expect quality service from Code Builder Technology’s dedicated team. Our developers, designers, marketers, and project managers work closely with you to make sure your goals are understood.",
            bg: "#D20001"
        },
        {
            icon: "/assets/images/icon/High.png",
            title: "High Quality Assurance",
            desc: "Every project we take on goes through our rigorous testing and quality assurance process. From code stability tests to security audits and load testing, we guarantee the projects we deliver will perform well and scale past your needs.",
            bg: "#9B30A0"

        },
        {
            icon: "/assets/images/icon/Support.png",
            title: "24*7 Support",
            desc: "Your success is our priority. We provide continuous support and maintenance for apps, SEO, websites, and marketing campaigns so you can rest easy. ",
            bg: "#44B931"

        },
        {
            icon: "/assets/images/icon/setting.png",
            title: "Timely Delivery",
            desc: "Our agile workflows allow us to meet your deadlines with top-quality web development, app development and digital marketing services. ",
            bg: "#EE7510"

        }
    ]

    return (
        <>
            <section className="tf-section tf-banner-create banner3">
                <div className="tf-container">
                    <div className="row vertical-middle">
                        <div className="col-md-6">
                            <div className="content-banner ">
                                <h2 className="wow fadeInUp">Why Choose Code Builder Technology?

                                    <span className="animationtext clip">
                                        <TypeAnimation
                                            sequence={[
                                                ' Dedicated Team',
                                                1000,
                                                ' High-Quality Assurance',
                                                1000,
                                                ' 24*7 Assistance',
                                                1000,
                                                ' Timely Delivery',
                                                1000,
                                             
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ display: 'inline-block', marginLeft: "18px" }}
                                            repeat={Infinity}
                                            className="cd-words-wrapper ms-3">
                                        </TypeAnimation>
                                    </span></h2>

                                <p className="wow fadeInUp">Expert software developers and digital marketers who focus on business-first thinking and helping you reach your goals. We want to be your long-term software development partner in India. </p>

                                {/* --- Features list (displayed under the paragraph) --- */}
                                <div className="feature-list wow fadeInUp" style={{ marginTop: 30 }}>
                                    <div className="row">
                                        {features.map((f, i) => (
                                            <div className="col-md-6" key={i}>
                                                <div className="feature-item d-flex align-items-start" style={{ gap: 12, marginBottom: 18 }}>
                                                    {/* Icon with background color and rounded corners */}
                                                    <div className="feature-icon" style={{
                                                        flex: "0 0 46px",
                                                        height: 46,
                                                        backgroundColor: f.bg,
                                                        borderRadius: "32px",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}>
                                                        <img src={f.icon} alt={f.title} style={{ width: 24, height: 24, objectFit: "contain" }} />
                                                    </div>
                                                    <div className="feature-content">
                                                        <h4 style={{ margin: 0, fontSize: 20 }}>{f.title}</h4>
                                                        <p style={{ margin: "6px 0 0 0", fontSize: 16, color: "#666" }}>{f.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="content-right">
                                <div className="thumb">
                                    <img className="ani4" src="/assets/images/banner/thumb-banner2.png" alt="images" />
                                    <img className="details-thumb" src="/assets/images/banner/details3.png" alt="images" />
                                    <img className="details-thumb2 ani4" width={"200px"} src="/assets/images/banner/Empower.jpeg" alt="images" />
                                    <img className="details-thumb3 ani5" width={"250px"} src="/assets/images/banner/details2.jpg" alt="images" />
                                    <img className="details-thumb4" src="/assets/images/banner/details4.png" alt="images" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
