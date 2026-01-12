
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
            title1: ' PHP Development',
            title2: 'Company in Jaipur',
            disc: "Build robust, scalable web applications with our expert PHP development services. From custom websites to complex enterprise solutions, we leverage PHP's power to deliver reliable solutions for your business.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Custom PHP Development",
            description: "Build tailored PHP applications designed specifically for your business needs.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Laravel Development",
            description: "Develop elegant, robust applications using the Laravel PHP framework.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "WordPress Development",
            description: "Create custom WordPress themes and plugins for your content needs.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "CMS Development",
            description: "Build custom content management systems tailored to your workflow.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "API Development",
            description: "Create RESTful APIs and integrations using PHP backend frameworks.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "PHP Migration",
            description: "Upgrade and migrate legacy PHP applications to modern frameworks.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best PHP Development Agency",
        description: "PM IT Solution PHP company in Jaipur is a team of skilled developers who specialize in building robust web applications. We leverage PHP's extensive ecosystem and frameworks to deliver secure, scalable, and maintainable solutions.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "Laravel Expertise",
                content: "Build elegant applications using Laravel's MVC architecture, Eloquent ORM, and robust features.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "E-commerce Solutions",
                content: "Develop custom e-commerce platforms or integrate with WooCommerce and Magento.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Database Optimization",
                content: "Optimize MySQL and PostgreSQL databases for high-performance PHP applications.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for PHP",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge PHP development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert PHP Developers",
                content: "Our team consists of experienced PHP developers with expertise in Laravel, Symfony, CodeIgniter, and WordPress development."
            },
            {
                title: "Modern PHP Practices",
                content: "We follow PSR standards, use Composer for dependency management, and implement modern PHP 8+ features."
            },
            {
                title: "Secure Development",
                content: "Security is our priority. We implement OWASP guidelines, SQL injection prevention, and secure authentication."
            },
            {
                title: "Performance Optimization",
                content: "We optimize PHP applications with caching strategies, query optimization, and efficient code architecture."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our PHP Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "PHP Development",
            description: "PMIT Solution delivers exceptional PHP development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our PHP development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'TECH STARTUP',
                quote: 'PM IT Solution built our Laravel-based SaaS platform. The application is robust, secure, and handles our growing user base perfectly. Highly recommended!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'E-COMMERCE OWNER',
                quote: "Their PHP team built our custom WooCommerce solution. The platform handles thousands of orders daily without any performance issues.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'AGENCY OWNER',
                quote: 'Professional PHP developers who delivered our CMS on time. The admin panel is intuitive and our content team loves it.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "PHP Development Questions?",
        subHeading: "PMIT Solution provides expert PHP development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : Is PHP still relevant in 2024?",
                answer: "Absolutely! PHP powers over 75% of websites including WordPress, Facebook, and Wikipedia. With PHP 8+ improvements, it remains a top choice for web development."
            },
            {
                question: "Q. 2 : Which PHP frameworks do you work with?",
                answer: "We work with Laravel (our specialty), Symfony, CodeIgniter, and WordPress. We choose the framework based on your project requirements."
            },
            {
                question: "Q. 3 : Can you migrate my old PHP application?",
                answer: "Yes, we specialize in migrating legacy PHP applications to modern frameworks like Laravel, improving performance and maintainability."
            },
            {
                question: "Q. 4 : How do you ensure PHP security?",
                answer: "We follow OWASP guidelines, implement prepared statements, use secure authentication, validate inputs, and conduct security audits."
            },
            {
                question: "Q. 5 : Do you provide WordPress development?",
                answer: "Yes, we develop custom WordPress themes, plugins, and WooCommerce solutions tailored to your specific needs."
            },
            {
                question: "Q. 6 : What about PHP application hosting?",
                answer: "We help deploy PHP applications on various platforms including AWS, DigitalOcean, and traditional hosting with proper server configuration."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with PHP? Get a quote.",
        subHeading: "PMIT Solution provides expert PHP development services for businesses looking to build robust web applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "PHP Development" },
            { value: 2, label: "Laravel App" },
            { value: 3, label: "WordPress Development" }
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