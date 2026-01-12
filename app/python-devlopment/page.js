
import dynamic from 'next/dynamic'
const DigitalMarketing = dynamic(() => import('@/components/sections/services/DigitalMarketing'), {
    ssr: false,
})
import Agency from "@/components/sections/services/Agency"

import Layout from "@/components/layout/Layout"
import Choose from '@/components/sections/services/Choose'
import Testimonials from '@/components/sections/services/Testimonials'
import Faq from '@/components/sections/services/Faq'
import Contact from '@/components/sections/home/Contact'
import Work from '@/components/sections/services/Work'
import styles from '@/scss/ServiceCard.module.css'

export default function Page() {
    // Hero Section Data
    const mData = [
        {
            title1: ' Python Development',
            title2: 'Company in Jaipur',
            disc: "Build powerful, scalable applications with our expert Python development services. From web applications to AI/ML solutions, we leverage Python's versatility to deliver robust solutions for your business.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Django Development",
            description: "Build robust web applications using the Django framework with best practices.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Flask Applications",
            description: "Develop lightweight, scalable APIs and microservices using Flask framework.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "AI/ML Solutions",
            description: "Implement machine learning models and AI solutions using Python libraries.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Data Analytics",
            description: "Build data pipelines and analytics solutions using Python's data science tools.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "API Development",
            description: "Create RESTful APIs and GraphQL endpoints with Python backend frameworks.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Automation Scripts",
            description: "Develop automation scripts for workflow optimization and task automation.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best Python Development Agency",
        description: "PM IT Solution Python company in Jaipur is a team of skilled developers who specialize in building powerful applications. We leverage Python's versatility for web development, data science, AI/ML, and automation to deliver solutions that drive business growth.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "Web Development",
                content: "Build scalable web applications using Django, Flask, and FastAPI frameworks.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "Machine Learning",
                content: "Implement ML models using TensorFlow, PyTorch, and scikit-learn for intelligent solutions.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Data Engineering",
                content: "Build data pipelines and ETL processes using Python's powerful data tools.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for Python",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge Python development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert Python Developers",
                content: "Our team consists of experienced Python developers with expertise in Django, Flask, FastAPI, and data science frameworks."
            },
            {
                title: "Full-Stack Capabilities",
                content: "We provide end-to-end Python development from backend APIs to data analytics and machine learning solutions."
            },
            {
                title: "Scalable Architecture",
                content: "Our applications are designed with scalability in mind, capable of handling growing user bases and data volumes."
            },
            {
                title: "Security First",
                content: "We implement industry-standard security practices to protect your applications and user data."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our Python Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Python Development",
            description: "PMIT Solution delivers exceptional Python development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our Python development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'TECH STARTUP',
                quote: 'PM IT Solution built our Django backend for our SaaS platform. The application handles millions of requests daily without any issues. Highly recommended!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'DATA COMPANY',
                quote: "Their Python team built our data analytics platform. The insights we now get have transformed our decision-making process.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'HEALTHCARE STARTUP',
                quote: 'Professional Python developers who delivered our ML-based diagnostic tool on time. The accuracy and performance exceeded our expectations.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "Python Development Questions?",
        subHeading: "PMIT Solution provides expert Python development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : Why should I choose Python for my project?",
                answer: "Python offers clean syntax, extensive libraries, and is ideal for web development, data science, AI/ML, and automation. It's one of the most versatile programming languages available."
            },
            {
                question: "Q. 2 : Which Python frameworks do you work with?",
                answer: "We work with Django, Flask, FastAPI for web development, and TensorFlow, PyTorch, scikit-learn for machine learning projects."
            },
            {
                question: "Q. 3 : Can you build AI/ML solutions?",
                answer: "Yes, we have extensive experience building machine learning models, natural language processing systems, and AI-powered applications using Python."
            },
            {
                question: "Q. 4 : How do you ensure code quality?",
                answer: "We follow PEP 8 guidelines, implement comprehensive testing, code reviews, and use tools like pylint and black for consistent, quality code."
            },
            {
                question: "Q. 5 : Do you provide API development services?",
                answer: "Yes, we build RESTful APIs using Django REST Framework, Flask, and FastAPI with proper documentation and authentication."
            },
            {
                question: "Q. 6 : Can you integrate Python with other technologies?",
                answer: "Absolutely! Python integrates well with databases, message queues, cloud services, and frontend frameworks. We build complete solutions using Python as the backend."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with Python? Get a quote.",
        subHeading: "PMIT Solution provides expert Python development services for businesses looking to build powerful applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Python Development" },
            { value: 2, label: "Django/Flask App" },
            { value: 3, label: "AI/ML Solution" }
        ],
        budgetOptions: [
            { value: 1, label: "Budget" },
            { value: 2, label: "Project budget (USD)" },
            { value: 3, label: "Select subject" }
        ]
    }

    return (
        <>
            <Layout >
                <section className="tf-live-auction explore tf-filter">
                    <div className="tf-container">
                        <DigitalMarketing mData={mData} />
                        <div className='row gap-2'>
                            {services.map((service, i) => (
                                <div key={i} className={`position-relative col-lg-4 col-md-6 col-sm-12 overflow-hidden mb-4 rounded-4 ${styles.cardBox}`}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-4"
                                    />
                                    <div className={`d-flex align-items-center justify-content-center ${styles.circle}`}>
                                        <h6 className="text-white text-center m-0">{service.title}</h6>
                                    </div>
                                    <div className={`text-white p-4 ${styles.overlay}`}>
                                        <h5 className="fw-bold">{service.title}</h5>
                                        <p className="mb-0 small">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Agency data={agencyData} />
                        <Choose data={chooseData} />
                        <Work data={workData} />
                        <Testimonials data={testimonialsData} />
                        <Faq data={faqData} />
                        <Contact data={contactData} />
                    </div>
                </section>
            </Layout>
        </>
    )
}