
import Layout from "@/components/layout/Layout"
export default function Contact() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact-us">
                <section className="tf-contact">
                    <div className="tf-container">
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="image ani4">
                                    <img src="/assets/images/img-contact.png" alt="Image" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tf-heading style-3">
                                    <h4 className="heading">Have a Projects Idea!
                                        Write down a quote.</h4>
                                    <p className="sub-heading">PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created.</p>
                                </div>
                                <form action="contact/contact-process.php" method="post" id="commentform" className="comment-form">
                                    <fieldset className="name">
                                        <input type="text" id="name" placeholder="Your Full Name" className="tb-my-input" name="name" tabIndex={2} aria-required="true" required />
                                    </fieldset>
                                    <fieldset className="email">
                                        <input type="email" id="email" placeholder="Your Email Address" className="tb-my-input" name="email" tabIndex={2} aria-required="true" required />
                                    </fieldset>
                                    <fieldset className="email">
                                        <input type="email" id="email" placeholder="Company Name" className="tb-my-input" name="email" tabIndex={2} aria-required="true" required />
                                    </fieldset>
                                    <div className="form-select" id="subject">
                                        <select>
                                            <option value={1}>Services</option>
                                            <option value={2}>Select subject</option>
                                            <option value={3}>Select subject</option>
                                        </select>
                                        <i className="icon-fl-down" />
                                    </div>
                                    <div className="form-select" id="subject">
                                        <select>
                                            <option value={1}>Budget</option>
                                            <option value={2}>Project budget (USD)</option>
                                            <option value={3}>Select subject</option>
                                        </select>
                                        <i className="icon-fl-down" />
                                    </div>
                                    <fieldset className="message">
                                        <textarea id="message" name="message" rows={4} placeholder="Message" tabIndex={4} aria-required="true" required />
                                    </fieldset>
                                    <div className="btn-submit"><button className="tf-button" type="submit">Request a quote</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}