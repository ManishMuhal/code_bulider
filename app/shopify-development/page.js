
import dynamic from 'next/dynamic'
const DigitalMarketing = dynamic(() => import('@/components/sections/services/DigitalMarketing'), { ssr: false })
import Agency from "@/components/sections/services/Agency"
import Layout from "@/components/layout/Layout"
import Choose from '@/components/sections/services/Choose'
import Testimonials from '@/components/sections/services/Testimonials'
import Faq from '@/components/sections/services/Faq'
import Contact from '@/components/sections/home/Contact'
import Work from '@/components/sections/services/Work'
import styles from '@/scss/ServiceCard.module.css'

export default function Page() {
    const mData = [{
        title1: ' Shopify Development',
        title2: 'Company in Jaipur',
        disc: "Build powerful, scalable e-commerce stores with our expert Shopify development services. We create custom Shopify stores that drive sales and deliver exceptional shopping experiences.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const services = [
        { title: "Custom Shopify Themes", description: "Design and develop custom Shopify themes matching your brand.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Shopify Apps", description: "Build custom Shopify apps for specialized functionality.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Shopify Plus", description: "Enterprise-level Shopify Plus development and customization.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Store Migration", description: "Migrate your store to Shopify from other platforms.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Shopify SEO", description: "Optimize your Shopify store for search engine visibility.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Payment Integration", description: "Set up payment gateways and checkout optimization.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best Shopify Development Agency",
        description: "PM IT Solution Shopify company in Jaipur creates high-converting e-commerce stores. We specialize in custom themes, apps, and Shopify Plus solutions for businesses of all sizes.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Custom Themes", content: "Build unique Shopify themes with Liquid templating.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "App Development", content: "Create custom apps using Shopify's APIs and frameworks.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Conversion Optimization", content: "Optimize checkout and UX for maximum conversions.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for Shopify",
        subHeading: "PMIT Solution delivers exceptional Shopify stores that drive sales and growth.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Shopify Experts", content: "Our team has extensive experience with Shopify, Liquid, and the Shopify app ecosystem." },
            { title: "Conversion Focused", content: "We design stores with conversion optimization as a core principle." },
            { title: "Shopify Plus Ready", content: "We handle enterprise-level Shopify Plus projects with advanced customizations." },
            { title: "Full-Service Support", content: "From design to development to marketing, we support your entire Shopify journey." }
        ]
    }

    const workData = {
        heading: "Our Shopify Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Shopify Development", description: "PMIT Solution delivers exceptional Shopify stores", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Discover how businesses are succeeding with our Shopify services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'FASHION BRAND', quote: 'PM IT Solution built our Shopify store. Conversion rates increased by 40% with the new design!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'D2C BRAND', quote: "Their custom Shopify app solved our inventory challenges perfectly. Excellent work!" },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'ENTERPRISE RETAILER', quote: 'Professional Shopify Plus developers who handled our complex requirements flawlessly.' }
        ]
    }

    const faqData = {
        heading: "Shopify Development Questions?", subHeading: "PMIT Solution provides expert Shopify development services.",
        questions: [
            { question: "Q. 1 : Shopify vs WooCommerce?", answer: "Shopify is better for pure e-commerce with less technical overhead. WooCommerce offers more flexibility but requires hosting. We help you choose." },
            { question: "Q. 2 : Do you build custom themes?", answer: "Yes, we build custom Shopify themes from scratch using Liquid, not just modify existing themes." },
            { question: "Q. 3 : Can you build Shopify apps?", answer: "Yes, we build public and private Shopify apps using React, Node.js, and Shopify's APIs." },
            { question: "Q. 4 : What about Shopify Plus?", answer: "We're experienced with Shopify Plus, including custom checkout, scripts, and Flow automation." },
            { question: "Q. 5 : Can you migrate my store?", answer: "Yes, we migrate stores from WooCommerce, Magento, BigCommerce, and other platforms to Shopify." },
            { question: "Q. 6 : Do you provide ongoing support?", answer: "Yes, we offer maintenance packages for updates, optimizations, and new feature development." }
        ]
    }

    const contactData = {
        heading: "Ready to Build Your Shopify Store? Get a quote.", subHeading: "PMIT Solution delivers exceptional Shopify e-commerce stores.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Shopify Development" }, { value: 2, label: "Custom Theme" }, { value: 3, label: "Shopify App" }],
        budgetOptions: [{ value: 1, label: "Budget" }, { value: 2, label: "Project budget (USD)" }, { value: 3, label: "Select subject" }]
    }

    return (
        <Layout>
            <section className="tf-live-auction explore tf-filter">
                <div className="tf-container">
                    <DigitalMarketing mData={mData} />
                    <div className='row gap-2'>
                        {services.map((service, i) => (
                            <div key={i} className={`position-relative col-lg-4 col-md-6 col-sm-12 overflow-hidden mb-4 rounded-4 ${styles.cardBox}`}>
                                <img src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} className="rounded-4" />
                                <div className={`d-flex align-items-center justify-content-center ${styles.circle}`}><h6 className="text-white text-center m-0">{service.title}</h6></div>
                                <div className={`text-white p-4 ${styles.overlay}`}><h5 className="fw-bold">{service.title}</h5><p className="mb-0 small">{service.description}</p></div>
                            </div>
                        ))}
                    </div>
                    <Agency data={agencyData} /><Choose data={chooseData} /><Work data={workData} /><Testimonials data={testimonialsData} /><Faq data={faqData} /><Contact data={contactData} />
                </div>
            </section>
        </Layout>
    )
}
