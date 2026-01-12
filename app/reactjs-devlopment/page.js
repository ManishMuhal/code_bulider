
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
            title1: ' ReactJS Development',
            title2: 'Company in Jaipur',
            disc: "Build modern, fast, and scalable web applications with our expert ReactJS development services. We create dynamic user interfaces and single-page applications that deliver exceptional user experiences.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Custom React Apps",
            description: "Build tailored React applications designed specifically for your business requirements.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "React UI/UX Design",
            description: "Create stunning, responsive user interfaces with modern React component libraries.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "React Migration",
            description: "Migrate your existing applications to React for better performance and maintainability.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "React Native Apps",
            description: "Develop cross-platform mobile applications using React Native framework.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "API Integration",
            description: "Seamlessly integrate REST APIs and GraphQL with your React applications.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "React Maintenance",
            description: "Ongoing support and maintenance for your React applications and codebases.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best ReactJS Development Agency",
        description: "PM IT Solution ReactJS company in Jaipur is a team of skilled developers who specialize in building modern web applications. We leverage the power of React to create fast, responsive, and maintainable applications that scale with your business needs.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "Component Architecture",
                content: "Build reusable, modular components that make your application maintainable and scalable.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "State Management",
                content: "Implement efficient state management using Redux, Context API, or other modern solutions.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Performance Optimization",
                content: "Optimize your React apps for speed with code splitting, lazy loading, and memoization.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for ReactJS",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge ReactJS development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert React Developers",
                content: "Our team consists of experienced React developers who stay updated with the latest features and best practices in the React ecosystem."
            },
            {
                title: "Modern Tech Stack",
                content: "We use the latest tools and technologies including Next.js, Redux Toolkit, React Query, and TypeScript for robust applications."
            },
            {
                title: "Agile Development",
                content: "Our agile approach ensures regular deliveries, transparent communication, and flexibility to adapt to changing requirements."
            },
            {
                title: "Quality Assurance",
                content: "We implement comprehensive testing including unit tests, integration tests, and end-to-end testing for reliable applications."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our ReactJS Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "ReactJS Development",
            description: "PMIT Solution delivers exceptional ReactJS development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our ReactJS development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'TECH STARTUP',
                quote: 'PM IT Solution built our entire SaaS platform using React. The application is fast, reliable, and our users love the interface. Highly recommended!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'E-COMMERCE OWNER',
                quote: "Their React development team transformed our online store. The new interface is lightning fast and our conversion rates have doubled.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'PRODUCT MANAGER',
                quote: 'Professional React developers who delivered our project on time and within budget. The code quality is excellent.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "ReactJS Development Questions?",
        subHeading: "PMIT Solution provides expert ReactJS development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : Why should I choose ReactJS for my project?",
                answer: "ReactJS offers a component-based architecture, virtual DOM for performance, a large ecosystem, and is backed by Facebook. It's ideal for building dynamic, interactive web applications."
            },
            {
                question: "Q. 2 : Do you work with Next.js?",
                answer: "Yes, we have extensive experience with Next.js for server-side rendering, static site generation, and building full-stack React applications."
            },
            {
                question: "Q. 3 : Can you migrate my existing application to React?",
                answer: "Absolutely! We specialize in migrating legacy applications to React, ensuring a smooth transition while improving performance and maintainability."
            },
            {
                question: "Q. 4 : How long does it take to develop a React application?",
                answer: "Timeline depends on project complexity. A simple application might take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed estimates during consultation."
            },
            {
                question: "Q. 5 : Do you provide ongoing support after launch?",
                answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, feature additions, and performance optimization."
            },
            {
                question: "Q. 6 : What is your development process?",
                answer: "We follow an agile methodology with regular sprints, code reviews, testing, and client demos. This ensures transparency and allows for feedback throughout the development process."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with React? Get a quote.",
        subHeading: "PMIT Solution provides expert ReactJS development services for businesses looking to build modern web applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "ReactJS Development" },
            { value: 2, label: "React Native App" },
            { value: 3, label: "React Migration" }
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