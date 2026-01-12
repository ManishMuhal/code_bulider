
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
            title1: ' CodeIgniter Development',
            title2: 'Company in Jaipur',
            disc: "Build lightweight, fast web applications with our expert CodeIgniter development services. We leverage CodeIgniter's simplicity and performance to deliver efficient solutions for your business.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Custom CodeIgniter Apps",
            description: "Build tailored CodeIgniter applications designed for your business needs.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "API Development",
            description: "Create RESTful APIs using CodeIgniter's lightweight framework.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "CMS Development",
            description: "Develop custom content management systems with CodeIgniter backend.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "E-commerce Solutions",
            description: "Build scalable e-commerce platforms using CodeIgniter framework.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "CodeIgniter Migration",
            description: "Upgrade legacy CodeIgniter applications or migrate from other frameworks.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Maintenance & Support",
            description: "Ongoing support and maintenance for your CodeIgniter applications.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best CodeIgniter Development Agency",
        description: "PM IT Solution CodeIgniter company in Jaipur is a team of skilled developers who specialize in building lightweight, high-performance web applications. We leverage CodeIgniter's simplicity and speed to deliver efficient, maintainable solutions.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "Lightweight Framework",
                content: "Build fast applications with CodeIgniter's small footprint and minimal overhead.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "MVC Architecture",
                content: "Develop organized, maintainable code using CodeIgniter's MVC pattern.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Database Flexibility",
                content: "Support for multiple databases with CodeIgniter's powerful Query Builder.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for CodeIgniter",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge CodeIgniter development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Expert CI Developers",
                content: "Our team consists of experienced CodeIgniter developers with expertise in building scalable web applications."
            },
            {
                title: "Fast Development",
                content: "CodeIgniter's simplicity allows for rapid development cycles, getting your project to market faster."
            },
            {
                title: "Performance Focused",
                content: "We optimize CodeIgniter applications for maximum performance with minimal server resources."
            },
            {
                title: "Easy Maintenance",
                content: "Clean, well-documented code that's easy to maintain and extend for future requirements."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our CodeIgniter Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "CodeIgniter Development",
            description: "PMIT Solution delivers exceptional CodeIgniter development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are transforming with our CodeIgniter development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'STARTUP FOUNDER',
                quote: 'PM IT Solution built our CRM using CodeIgniter. The application is incredibly fast and handles our 10,000+ customer records effortlessly!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'LOGISTICS COMPANY',
                quote: "Their CodeIgniter team built our fleet management system. It's lightweight, fast, and exactly what we needed.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'SME BUSINESS OWNER',
                quote: 'Professional developers who delivered our inventory system on time. CodeIgniter was the perfect choice for our needs.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "CodeIgniter Development Questions?",
        subHeading: "PMIT Solution provides expert CodeIgniter development services and comprehensive support for your projects.",
        questions: [
            {
                question: "Q. 1 : Why should I choose CodeIgniter?",
                answer: "CodeIgniter is lightweight, fast, and easy to learn. It's perfect for projects that need quick development, minimal overhead, and high performance without the complexity of larger frameworks."
            },
            {
                question: "Q. 2 : Is CodeIgniter still relevant?",
                answer: "Yes! CodeIgniter 4 is modern, actively maintained, and offers features like namespaces, PSR-4 autoloading, and improved routing while maintaining its simplicity."
            },
            {
                question: "Q. 3 : Can you migrate my old CodeIgniter app?",
                answer: "Yes, we specialize in migrating CodeIgniter 2/3 applications to CodeIgniter 4, improving security and taking advantage of modern features."
            },
            {
                question: "Q. 4 : How does CodeIgniter compare to Laravel?",
                answer: "CodeIgniter is lighter and faster for simpler projects, while Laravel offers more features for complex applications. We help you choose the right framework."
            },
            {
                question: "Q. 5 : Do you integrate CodeIgniter with APIs?",
                answer: "Yes, we build RESTful APIs using CodeIgniter and integrate third-party APIs including payment gateways, SMS, and other services."
            },
            {
                question: "Q. 6 : What about CodeIgniter hosting?",
                answer: "CodeIgniter works on most PHP hosting providers. We help deploy on shared hosting, VPS, or cloud platforms with proper configuration."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Build with CodeIgniter? Get a quote.",
        subHeading: "PMIT Solution provides expert CodeIgniter development services for businesses looking to build lightweight applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "CodeIgniter Development" },
            { value: 2, label: "CI4 Migration" },
            { value: 3, label: "Custom Web App" }
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