'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// Default data for the Faq component
const defaultData = {
    heading: "Frequently Asked Questions: ",
    subHeading: "Code Builder is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created.",
    questions: [
        {
            question: "Q. 1 : What makes Code Builder Technology the best software development company in India?",
            answer: "Digital marketing is essential for businesses due to several reasons. Firstly, it allows you to reach a vast online audience, as most consumers now turn to the Internet for information and purchases. By leveraging digital marketing strategies, you can connect with your target audience, build brand awareness, and drive relevant traffic to your website.<br/><br/>Moreover, digital marketing provides measurable results. Unlike traditional marketing methods, you can track and analyze the performance of your digital campaigns in real time. This enables you to make data-driven decisions, optimize your marketing efforts, and divide your resources effectively."
        },
        {
            question: "Q. 2 : Are you the best web development company in India for startups?",
            answer: "Yes. Startups choose us as the best web development company for startups for flexible pricing and growth-ready solutions."
        },
        {
            question: "Q. 3 :What is the website development cost in India?",
            answer: "Costs can vary depending on the size, features, and complexity of your project. We offer transparent pricing for startups to enterprise-level businesses of all sizes. "
        },
        {
            question: "Q. 4 : Do you offer SEO and digital marketing services for small businesses? ",
            answer: "Yes. We provide digital marketing services in India for small businesses that want to see results, get SEO services in India, or increase their lead generation in India. "
        },
        {
            question: "Q. 5 :Do you provide social media marketing for specific industries?",
            answer: "Yes. We offer social media marketing for real estate/clinics/education with targeted lead-focused campaigns."
        },
     
    ]
}

export default function Faq({ data = defaultData }) {
    const [isAccordion, setIsAccordion] = useState(0)
    const handleAccordion = (key) => {
        setIsAccordion((prevState) => (prevState === key ? null : key))
    }

    // Merge passed data with defaults to ensure all properties exist
    const faqData = { ...defaultData, ...data }

    return (
        <>
            <section className="tf-section tf-artis collection-carousel2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading style-4 mb63 wow fadeInUp text-center">
                                <h3 className="heading">{faqData.heading}</h3>
                                <p style={{ borderLeft: "2px solid #FF9800", paddingLeft: "10px", display: "inline-block", textAlign: "left" }}>
                                    {faqData.subHeading}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 mx-auto">
                            <div className="tf-accordion text-center">
                                {faqData.questions.map((item, index) => (
                                    <div className="tf-toggle" onClick={() => handleAccordion(index)} key={index}>
                                        <h6 className={isAccordion === index ? "tf-toggle-title active" : "tf-toggle-title"}>
                                            {item.question}
                                        </h6>
                                        <div
                                            className="tf-toggle-content"
                                            style={{ display: `${isAccordion === index ? "block" : "none"}` }}
                                            dangerouslySetInnerHTML={{ __html: item.answer }}
                                        />
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
