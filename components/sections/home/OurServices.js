import Link from "next/link"

export default function OurServices() {
    return (
        <>
            <section className="tf-section tf-create-and-sell">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading style-2 mb40 wow fadeInUp">
                                <h4 className="heading">Our Services</h4>
                            </div>
                        </div>

                        {/* Web Development */}
                        <div className="col-lg-3 col-md-6"style={{ margin: "12px 0" }}>
                            <div className="tf-create wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon">
                                    <img src="/assets/images/svg/icon-create-2.svg" alt="Web Development" />
                                </div>
                                <h6 className="title">WEB DEVELOPMENT</h6>
                                <p className="content">
                                    We offer quality-enriched and cost-efficient web development services with maximum personalization. 
                                    From strategy to design, development, implementation and maintenance, satisfaction is assured.
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
                                    The tailor-made application development for exceptional digital experience for your employees and customers. 
                                    We blend technology, psychology, purpose and passion to generate exceptional solutions.
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
                                    We are a seasoned game development firm specialising in all types of games development solutions such as 
                                    poker, ludo, unity, roulette, keno, etc.
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
                                    Get built-to-scale marketing strategies and implement them to get measurable outcomes. 
                                    We focus on business goals and client expectations for maximum exposure, conversion, sales and profits.
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
                                    Finest CMS software and platform development services for attainment of E-commerce vision 
                                    and remarkable operational efficiency. We assure gaining a competitive advantage and great user experience.
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
                                    Need best SEO services, need higher search engine rankings with Google, <br/> Yahoo and MSN? 
                                    So, what are you waiting for? <br/> <br/>PM IT Solution is always there for you.
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
                                    If you are a business person, this is necessary for you to know about Google AdWords. 
                                    Google AdWords is one of the major online marketing platforms that helps industries reach clients 
                                    across the globe and grow their business.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
