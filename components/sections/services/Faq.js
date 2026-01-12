'use client'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// Default data for the Faq component
const defaultData = {
    heading: "Have any Questions?",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created.",
    questions: [
        {
            question: "Q. 1 : Why Is Digital Marketing Important to Your Business?",
            answer: "Digital marketing is essential for businesses due to several reasons. Firstly, it allows you to reach a vast online audience, as most consumers now turn to the Internet for information and purchases. By leveraging digital marketing strategies, you can connect with your target audience, build brand awareness, and drive relevant traffic to your website.<br/><br/>Moreover, digital marketing provides measurable results. Unlike traditional marketing methods, you can track and analyze the performance of your digital campaigns in real time. This enables you to make data-driven decisions, optimize your marketing efforts, and divide your resources effectively."
        },
        {
            question: "Q. 2 : How to pick the right digital marketing agency in Jaipur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
        },
        {
            question: "Q. 3 : What services should you seek from a digital Marketing Services Provider?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
        },
        {
            question: "Q. 4 : What are the benefits of hiring a digital marketing company?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
        },
        {
            question: "Q. 5 : Why do businesses need digital marketing services in Jaipur?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
        },
        {
            question: "Q. 6 : Why Choose PM IT Solution for Digital Marketing Company for Business Success?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
        }
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
