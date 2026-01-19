import Link from "next/link"

export default function OurServices() {
    return (
        <>
            <section className="tf-section tf-create-and-sell">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading style-2 mb40 wow fadeInUp">
                                <h4 className="heading">Services We Provide</h4>
                            </div>
                        </div>

                        {/* Web Development */}
                        <div className="col-lg-3 col-md-6" style={{ margin: "12px 0" }}>
                            <div className="tf-create wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src="/assets/images/svg/icon-create-2.svg" alt="Web Development" />
                                </div>
                                <h6 className="title">WEB DEVELOPMENT</h6>
                                <p className="content">
                                    As a web development company in India, we build scalable websites and web applications that are easy to manage and maintain.
                                    Our services include business websites, custom web applications, UI UX design, and e-commerce solutions using WordPress and modern frameworks.

                                </p>
                            </div>
                        </div>

                        {/* App Development */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon">
                                    <img src="/assets/images/svg/icon-create-1.svg" alt="App Development" />
                                </div>
                                <h6 className="title">APP DEVELOPMENT</h6>
                                <p className="content">
                                    Our team provides end-to-end mobile app development services for Android and iOS. Using Flutter and React Native, we build reliable applications supported by ongoing app maintenance and technical support.
                                </p>
                            </div>
                        </div>

                        {/* Game Development */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon">
                                    <img src="/assets/images/svg/icon-create-3.svg" alt="Game Development" />
                                </div>
                                <h6 className="title">GAME DEVELOPMENT</h6>
                                <p className="content">
                                    We create performance-focused mobile games designed for engagement and stability. Our game development services include 2D and 3D games, branded gaming experiences, and gamification solutions built using Unity and Unreal Engine.

                                </p>
                            </div>
                        </div>

                        {/* Digital Marketing */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon">
                                    <img src="/assets/images/svg/icon-create-4.svg" alt="Digital Marketing" />
                                </div>
                                <h6 className="title">DIGITAL MARKETING</h6>
                                <p className="content">
                                    Our digital marketing services focus on performance marketing, lead generation, and marketing automation. We plan and manage campaigns that improve visibility, attract qualified leads, and support measurable business growth.

                                </p>
                            </div>
                        </div>

                        {/* E-Commerce */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="1s">
                                <div className="icon">
                                    <img src="/assets/images/svg/shopping-cart.svg" alt="E-Commerce" />
                                </div>
                                <h6 className="title">E-COMMERCE</h6>
                                <p className="content">
                                    We deliver e-commerce website development services for startups and growing businesses. Our solutions include secure payment integration, inventory management, order processing, and conversion-focused user journeys.

                                </p>
                            </div>
                        </div>

                        {/* SEO Marketing */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="1.2s">
                                <div className="icon">
                                    <img src="/assets/images/svg/sco.svg" alt="SEO Marketing" />
                                </div>
                                <h6 className="title">SEO MARKETING</h6>
                                <p className="content">
                                    Our SEO services include technical SEO, on-page SEO, off-page SEO, local SEO, e-commerce SEO, and SEO audit services. These efforts are focused on improving search visibility and driving consistent organic traffic.

                                </p>
                            </div>
                        </div>

                        {/* Google Ads */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="1.4s">
                                <div className="icon">
                                    <img src="/assets/images/svg/google.svg" alt="Google Ads" />
                                </div>
                                <h6 className="title">GOOGLE ADS (PPC)</h6>
                                <p className="content">
                                    We provide Google Ads management services, including PPC campaign setup, bid management, search ads, and remarketing. Our approach focuses on lead quality, cost control, and continuous optimisation.
                                </p>
                            </div>
                        </div>

                        {/* Social Media Marketing: */}
                        <div className="col-lg-3 col-md-6">
                            <div className="tf-create wow fadeInUp" data-wow-delay="1.4s">
                                <div className="icon">
                                    <img src="/assets/images/svg/google.svg" alt="Google Ads" />
                                </div>
                                <h6 className="title">Social Media Marketing:</h6>
                                <p className="content">
                                    Our social media marketing services include content planning, social media management, and paid advertising across Instagram, Facebook, and LinkedIn. Campaigns are designed to build awareness, engagement, and inbound leads.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
