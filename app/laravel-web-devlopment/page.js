
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
            title1: ' Laravel Web Development',
            title2: 'Company in Jaipur',
            disc: "Build elegant, robust web applications with our expert Laravel development services. From custom applications to enterprise solutions, we leverage Laravel's powerful features to deliver scalable solutions for your business.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Custom Laravel Apps",
            description: "Build tailored Laravel applications designed specifically for your business requirements.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Laravel API Development",
            description: "Create robust REST APIs using Laravel's API resources and authentication.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "E-commerce Solutions",
            description: "Build custom e-commerce platforms with Laravel and payment gateway integration.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Laravel CMS",
            description: "Develop custom content management systems with intuitive admin panels.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Laravel Migration",
            description: "Migrate existing applications to Laravel for better performance and maintainability.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Laravel Maintenance",
            description: "Ongoing support, updates, and optimization for your Laravel applications.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best Laravel Development Agency",
        description: "PM IT Solution Laravel company in Jaipur is a team of skilled developers who specialize in building elegant web applications. We leverage Laravel's MVC architecture, Eloquent ORM, and extensive features to deliver secure, maintainable, and scalable solutions.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "MVC Architecture",
                content: "Build well-structured applications using Laravel's clean MVC pattern for maintainability.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "Eloquent ORM",
                content: "Leverage Laravel's powerful ORM for elegant database interactions and relationships.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Laravel Ecosystem",
                content: "Integrate Laravel packages like Nova, Horizon, and Sanctum for enhanced functionality.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for Laravel",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge Laravel development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert Laravel Developers",
                content: "Our team consists of Laravel certified developers with years of experience building complex web applications."
            },
            {
                title: "Best Practices",
                content: "We follow Laravel best practices, use PHPUnit for testing, and implement SOLID principles for clean code."
            },
            {
                title: "Secure Applications",
                content: "Laravel's built-in security features plus our expertise ensure protection against SQL injection, XSS, and CSRF attacks."
            },
            {
                title: "Modern Tech Stack",
                content: "We integrate Laravel with Vue.js, Livewire, Alpine.js, and Tailwind CSS for modern full-stack development."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our Laravel Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Laravel Development",
            description: "PMIT Solution delivers exceptional Laravel development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our Laravel development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'TECH STARTUP',
                quote: 'PM IT Solution built our entire SaaS platform using Laravel. The codebase is clean, well-documented, and easy to maintain. Highly recommended!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'E-COMMERCE OWNER',
                quote: "Their Laravel team built our multi-vendor marketplace. The admin panel with Laravel Nova is incredibly powerful and user-friendly.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'ENTERPRISE CLIENT',
                quote: 'Professional Laravel developers who delivered our ERP system on time. The application handles complex workflows flawlessly.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "Laravel Development Questions?",
        subHeading: "PMIT Solution provides expert Laravel development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : Why should I choose Laravel for my project?",
                answer: "Laravel offers elegant syntax, robust features like Eloquent ORM, built-in authentication, queues, and a vibrant ecosystem. It's ideal for building scalable, maintainable web applications."
            },
            {
                question: "Q. 2 : What can you build with Laravel?",
                answer: "We build SaaS applications, e-commerce platforms, CMS, ERP systems, APIs, multi-tenant applications, and any custom web application you need."
            },
            {
                question: "Q. 3 : Do you use Laravel packages?",
                answer: "Yes, we leverage Laravel Nova for admin panels, Horizon for queues, Sanctum/Passport for API authentication, and other ecosystem packages."
            },
            {
                question: "Q. 4 : How do you ensure Laravel security?",
                answer: "Laravel has built-in protection against common vulnerabilities. We also implement additional security measures, regular audits, and follow OWASP guidelines."
            },
            {
                question: "Q. 5 : Can you integrate Laravel with frontend frameworks?",
                answer: "Yes, we integrate Laravel with Vue.js, React, Livewire, and Inertia.js for building modern, interactive user interfaces."
            },
            {
                question: "Q. 6 : Do you provide Laravel upgrade services?",
                answer: "Yes, we help upgrade legacy Laravel applications to the latest version, ensuring compatibility and leveraging new features."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with Laravel? Get a quote.",
        subHeading: "PMIT Solution provides expert Laravel development services for businesses looking to build elegant web applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Laravel Development" },
            { value: 2, label: "Laravel API" },
            { value: 3, label: "Laravel E-commerce" }
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