'use client'
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Choose() {
    const features = [
        {
            icon: "/assets/images/icon/Dedicated.png",
            title: "Dedicated Teams",
            desc: "We have a technical expert team, which has solutions for all your problems.",
            bg: "#D20001"
        },
        {
            icon: "/assets/images/icon/High.png",
            title: "High Quality Assurance",
            desc: "Our qualified testing team double check every work to prevent mistakes or defects.",
            bg: "#9B30A0"

        },
        {
            icon: "/assets/images/icon/Support.png",
            title: "24*7 Support",
            desc: "We have a technical expert team, which has solutions for all your problems.",
            bg: "#44B931"

        },
        {
            icon: "/assets/images/icon/setting.png",
            title: "Timely Delivery",
            desc: "We have ability to deliver solutions to our customers in a timely manner.",
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
                                <h2 className="wow fadeInUp">Why Choose
                                    PM IT Solution
                                    <span className="animationtext clip">
                                        <TypeAnimation
                                            sequence={[
                                                ' SEO Services',
                                                1000,
                                                ' Web Development',
                                                1000,
                                                ' Mobile Apps',
                                                1000,
                                                ' Digital Marketing',
                                                1000,
                                                ' UI/UX Design',
                                                2000,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ display: 'inline-block', marginLeft: "15px" }}
                                            repeat={Infinity}
                                            className="cd-words-wrapper ms-3">
                                        </TypeAnimation>
                                    </span></h2>

                                <p className="wow fadeInUp">An overall information technology services providing company that prioritizes your vision, objectives and expectations. We aim to offer a highly customized tech solution and be partners at every stage from conceptualization to power-packed execution. </p>

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
