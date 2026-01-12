
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
            title1: ' Node.js Development',
            title2: 'Company in Jaipur',
            disc: "Build fast, scalable server-side applications with our expert Node.js development services. From real-time applications to microservices, we leverage Node.js to deliver high-performance solutions for your business.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Express.js Development",
            description: "Build robust REST APIs and web applications using the Express.js framework.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Real-time Applications",
            description: "Develop chat apps, live notifications, and real-time features using Socket.io.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Microservices",
            description: "Design and implement scalable microservices architecture with Node.js.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "API Development",
            description: "Create RESTful and GraphQL APIs with proper authentication and documentation.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Database Integration",
            description: "Integrate MongoDB, PostgreSQL, MySQL with your Node.js applications.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Cloud Deployment",
            description: "Deploy Node.js applications on AWS, Azure, or Google Cloud Platform.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best Node.js Development Agency",
        description: "PM IT Solution Node.js company in Jaipur is a team of skilled developers who specialize in building high-performance server-side applications. We leverage Node.js's event-driven architecture to deliver fast, scalable, and efficient solutions.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "Backend Development",
                content: "Build scalable backend systems using Express, NestJS, and Fastify frameworks.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "Real-time Features",
                content: "Implement WebSockets, Socket.io for real-time chat, notifications, and live updates.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Performance Optimization",
                content: "Optimize Node.js applications with clustering, caching, and efficient async patterns.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for Node.js",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge Node.js development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert Node.js Developers",
                content: "Our team consists of experienced Node.js developers with expertise in Express, NestJS, and the broader JavaScript ecosystem."
            },
            {
                title: "Full-Stack JavaScript",
                content: "We provide end-to-end JavaScript solutions with Node.js backend and React/Vue frontend for seamless integration."
            },
            {
                title: "Scalable Architecture",
                content: "We design applications with horizontal scaling, microservices, and containerization for enterprise-grade performance."
            },
            {
                title: "DevOps Integration",
                content: "We implement CI/CD pipelines, Docker containers, and cloud deployment for efficient development workflows."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our Node.js Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Node.js Development",
            description: "PMIT Solution delivers exceptional Node.js development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our Node.js development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'TECH STARTUP',
                quote: 'PM IT Solution built our real-time collaboration platform using Node.js. The application handles thousands of concurrent users without breaking a sweat!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'FINTECH COMPANY',
                quote: "Their Node.js team built our payment processing API. It's fast, secure, and processes millions of transactions monthly.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'SAAS FOUNDER',
                quote: 'Professional Node.js developers who delivered our microservices architecture on time. The system is highly maintainable and scalable.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "Node.js Development Questions?",
        subHeading: "PMIT Solution provides expert Node.js development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : When should I choose Node.js for my project?",
                answer: "Node.js is ideal for real-time applications, API development, microservices, streaming applications, and when you want to use JavaScript across the full stack."
            },
            {
                question: "Q. 2 : Which Node.js frameworks do you work with?",
                answer: "We work with Express.js, NestJS, Fastify, and Koa. NestJS is our go-to for enterprise applications due to its structured architecture."
            },
            {
                question: "Q. 3 : Can you build real-time applications?",
                answer: "Yes, we have extensive experience building real-time features using Socket.io and WebSockets for chat, notifications, and live updates."
            },
            {
                question: "Q. 4 : How do you handle database integration?",
                answer: "We integrate Node.js with MongoDB (Mongoose), PostgreSQL (Sequelize/TypeORM), Redis for caching, and support GraphQL with Apollo Server."
            },
            {
                question: "Q. 5 : What about Node.js security?",
                answer: "We implement JWT authentication, rate limiting, input validation, helmet.js for headers, and follow OWASP guidelines for secure applications."
            },
            {
                question: "Q. 6 : Do you provide cloud deployment?",
                answer: "Yes, we deploy Node.js applications on AWS (Lambda, EC2), Azure, Google Cloud, and support containerization with Docker and Kubernetes."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with Node.js? Get a quote.",
        subHeading: "PMIT Solution provides expert Node.js development services for businesses looking to build fast, scalable applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Node.js Development" },
            { value: 2, label: "API Development" },
            { value: 3, label: "Real-time App" }
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