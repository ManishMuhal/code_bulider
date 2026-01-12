
// Default data for the Contact component
const defaultData = {
    heading: "Have a Projects Idea! Write down a quote.",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created.",
    image: "/assets/images/img-contact.png",
    serviceOptions: [
        { value: 1, label: "Services" },
        { value: 2, label: "Select subject" },
        { value: 3, label: "Select subject" }
    ],
    budgetOptions: [
        { value: 1, label: "Budget" },
        { value: 2, label: "Project budget (USD)" },
        { value: 3, label: "Select subject" }
    ]
}

export default function Contact({ data = defaultData }) {
    // Merge passed data with defaults to ensure all properties exist
    const contactData = { ...defaultData, ...data }

    return (
        <>
            <section className="tf-contact" style={{ marginTop: '100px' }}>
                <div className="tf-container">
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="image ani4">
                                <img src={contactData.image} alt="Image" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tf-heading style-3">
                                <h4 className="heading">{contactData.heading}</h4>
                                <p className="sub-heading">{contactData.subHeading}</p>
                            </div>

                            <form action="contact/contact-process.php" method="post" id="commentform" className="comment-form">
                                <fieldset className="name">
                                    <input type="text" id="name" placeholder="Your Full Name" className="tb-my-input" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>

                                <fieldset className="email">
                                    <input type="email" id="email" placeholder="Your Email Address" className="tb-my-input" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>

                                <fieldset className="company">
                                    <input type="text" id="company" placeholder="Company Name" className="tb-my-input" name="company" tabIndex={2} aria-required="true" required />
                                </fieldset>

                                <div className="form-select" id="subject">
                                    <select>
                                        {contactData.serviceOptions.map((option, index) => (
                                            <option value={option.value} key={index}>{option.label}</option>
                                        ))}
                                    </select>
                                    <i className="icon-fl-down" />
                                </div>

                                <div className="form-select" id="budget">
                                    <select>
                                        {contactData.budgetOptions.map((option, index) => (
                                            <option value={option.value} key={index}>{option.label}</option>
                                        ))}
                                    </select>
                                    <i className="icon-fl-down" />
                                </div>

                                <fieldset className="message">
                                    <textarea id="message" name="message" rows={4} placeholder="Message" tabIndex={4} aria-required="true" required />
                                </fieldset>

                                <div className="btn-submit">
                                    <button className="tf-button" type="submit">Request a quote</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
