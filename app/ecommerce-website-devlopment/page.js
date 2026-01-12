
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
            title1: ' E-commerce Website',
            title2: 'Development in Jaipur',
            disc: "Build powerful online stores with our expert e-commerce development services. From custom storefronts to marketplace solutions, we create e-commerce platforms that drive sales and deliver exceptional shopping experiences.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    // Services Cards Data
    const services = [
        {
            title: "Custom E-commerce",
            description: "Build tailored e-commerce solutions designed specifically for your business model.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "WooCommerce Development",
            description: "Create powerful WordPress-based online stores with WooCommerce.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Shopify Development",
            description: "Develop and customize Shopify stores for seamless selling experiences.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Multi-vendor Marketplace",
            description: "Build marketplace platforms where multiple vendors can sell products.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "Payment Integration",
            description: "Integrate secure payment gateways like Razorpay, Stripe, and PayPal.",
            image: "/assets/images/seo/ourseo1.png",
        },
        {
            title: "E-commerce SEO",
            description: "Optimize your online store for search engines to drive organic traffic.",
            image: "/assets/images/seo/ourseo1.png",
        },
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best E-commerce Development Agency",
        description: "PM IT Solution e-commerce company in Jaipur is a team of skilled developers who specialize in building high-converting online stores. We combine user experience expertise with technical excellence to create e-commerce platforms that maximize your sales.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "User Experience Design",
                content: "Create intuitive shopping experiences with optimized product pages and checkout flows.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "Inventory Management",
                content: "Implement robust inventory tracking, stock alerts, and multi-warehouse support.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "Analytics & Reporting",
                content: "Track sales, customer behavior, and performance with comprehensive analytics.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us for E-commerce",
        subHeading: "PMIT Solution is serving a vast portfolio of clients with cutting-edge e-commerce development services and dedicated support.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Conversion-Focused Design",
                content: "We design e-commerce sites with conversion optimization in mind, from product pages to checkout process."
            },
            {
                title: "Secure Transactions",
                content: "We implement PCI-compliant payment processing and SSL encryption for secure customer transactions."
            },
            {
                title: "Mobile Optimization",
                content: "Our e-commerce sites are fully responsive and optimized for mobile shopping experiences."
            },
            {
                title: "Scalable Architecture",
                content: "We build e-commerce platforms that can handle growing product catalogs and traffic spikes."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Our E-commerce Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "E-commerce Development",
            description: "PMIT Solution delivers exceptional e-commerce development services for businesses of all sizes",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are growing with our e-commerce development services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'FASHION BRAND',
                quote: 'PM IT Solution built our online fashion store. Sales increased by 150% in the first quarter after launch. The checkout process is seamless!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'ELECTRONICS RETAILER',
                quote: "Their e-commerce team built our multi-vendor marketplace. We now have 200+ vendors selling on our platform successfully.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'GROCERY STARTUP',
                quote: 'Professional e-commerce developers who delivered our grocery delivery platform. The app handles 1000+ orders daily.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "E-commerce Development Questions?",
        subHeading: "PMIT Solution provides expert e-commerce development services and comprehensive support for your online store.",
        questions: [
            {
                question: "Q. 1 : Which e-commerce platform should I choose?",
                answer: "The choice depends on your needs. WooCommerce is great for WordPress users, Shopify for quick setup, and custom solutions for unique requirements. We help you choose the right platform."
            },
            {
                question: "Q. 2 : How long does it take to build an e-commerce site?",
                answer: "A basic e-commerce site takes 4-6 weeks, while complex marketplaces can take 3-6 months. We provide detailed timelines during consultation."
            },
            {
                question: "Q. 3 : What payment gateways do you integrate?",
                answer: "We integrate Razorpay, PayPal, Stripe, Paytm, UPI, and all major payment gateways based on your target market."
            },
            {
                question: "Q. 4 : Can you migrate my existing store?",
                answer: "Yes, we migrate stores from any platform to another while preserving your products, customers, orders, and SEO rankings."
            },
            {
                question: "Q. 5 : Do you provide e-commerce marketing?",
                answer: "Yes, we offer e-commerce SEO, Google Shopping ads, social media marketing, and conversion rate optimization services."
            },
            {
                question: "Q. 6 : What about ongoing support?",
                answer: "We provide maintenance packages including updates, security patches, performance optimization, and feature additions."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Ready to Launch Your Online Store? Get a quote.",
        subHeading: "PMIT Solution provides expert e-commerce development services for businesses looking to sell online.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "E-commerce Development" },
            { value: 2, label: "WooCommerce Store" },
            { value: 3, label: "Custom Marketplace" }
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