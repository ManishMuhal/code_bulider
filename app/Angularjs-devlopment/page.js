
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
            title1: ' Angular Development',
            title2: 'Company in Jaipur',
            disc: "Build powerful, enterprise-grade web applications with our expert Angular development services. We leverage Angular's robust framework to deliver scalable, maintainable solutions for your business.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Custom Angular Apps",
            description: "Build tailored Angular applications designed for enterprise requirements.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Angular Migration",
            description: "Migrate AngularJS or other frameworks to modern Angular versions.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Angular UI/UX",
            description: "Create stunning user interfaces with Angular Material and custom components.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "SPA Development",
            description: "Develop single-page applications with seamless user experiences.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "API Integration",
            description: "Integrate REST APIs and GraphQL with Angular applications.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Angular Testing",
            description: "Implement comprehensive testing with Jasmine, Karma, and Protractor.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best Angular Development Agency",
        description: "PM IT Solution Angular company in Jaipur is a team of skilled developers who specialize in building enterprise-grade web applications. We leverage Angular's powerful features including TypeScript, RxJS, and Angular CLI to deliver robust solutions.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "TypeScript Expertise",
                content: "Build type-safe applications using TypeScript for better code quality and maintainability.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "Component Architecture",
                content: "Create reusable, modular components following Angular best practices.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "State Management",
                content: "Implement state management using NgRx for complex application requirements.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for Angular",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge Angular development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert Angular Developers",
                content: "Our team consists of experienced Angular developers proficient in TypeScript, RxJS, and the Angular ecosystem."
            },
            {
                title: "Enterprise Solutions",
                content: "We specialize in building large-scale enterprise applications with Angular's structured framework."
            },
            {
                title: "Performance Optimization",
                content: "We implement lazy loading, AOT compilation, and tree shaking for optimal application performance."
            },
            {
                title: "Comprehensive Testing",
                content: "We ensure quality with unit testing, integration testing, and end-to-end testing using Angular's testing tools."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our Angular Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Angular Development",
            description: "PMIT Solution delivers exceptional Angular development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our Angular development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'ENTERPRISE CLIENT',
                quote: 'PM IT Solution built our enterprise dashboard using Angular. The application handles complex data visualizations and thousands of users seamlessly!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'HEALTHCARE COMPANY',
                quote: "Their Angular team built our patient management system. It's robust, secure, and exactly what our organization needed.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'FINTECH STARTUP',
                quote: 'Professional Angular developers who delivered our trading platform on time. The real-time updates work flawlessly.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "Angular Development Questions?",
        subHeading: "PMIT Solution provides expert Angular development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : Why should I choose Angular for my project?",
                answer: "Angular is ideal for large-scale enterprise applications. It offers TypeScript support, powerful CLI, built-in testing tools, and a structured architecture that ensures maintainability."
            },
            {
                question: "Q. 2 : What's the difference between Angular and AngularJS?",
                answer: "AngularJS (1.x) is the older version using JavaScript. Angular (2+) is a complete rewrite using TypeScript with better performance, mobile support, and modern architecture."
            },
            {
                question: "Q. 3 : Can you migrate our AngularJS application?",
                answer: "Yes, we specialize in migrating legacy AngularJS applications to the latest Angular version while ensuring minimal disruption to your business."
            },
            {
                question: "Q. 4 : Do you use Angular Material?",
                answer: "Yes, we use Angular Material for building beautiful, consistent UIs, and also create custom components when needed for unique design requirements."
            },
            {
                question: "Q. 5 : How do you handle state management?",
                answer: "We use NgRx for complex state management needs, along with Angular services and RxJS for simpler applications."
            },
            {
                question: "Q. 6 : What about Angular Universal?",
                answer: "Yes, we implement Angular Universal for server-side rendering, improving SEO and initial load performance for your applications."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with Angular? Get a quote.",
        subHeading: "PMIT Solution provides expert Angular development services for businesses looking to build enterprise applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Angular Development" },
            { value: 2, label: "Angular Migration" },
            { value: 3, label: "Enterprise App" }
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