
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
        title1: ' WordPress Development',
        title2: 'Company in Jaipur',
        disc: "Build powerful, flexible websites with our expert WordPress development services. From custom themes to complex plugins, we create WordPress solutions that empower your business.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const services = [
        { title: "Custom Themes", description: "Design and develop custom WordPress themes matching your brand.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Plugin Development", description: "Create custom plugins for specialized functionality.", image: "/assets/images/seo/ourseo1.png" },
        { title: "WooCommerce", description: "Build powerful e-commerce stores with WooCommerce.", image: "/assets/images/seo/ourseo1.png" },
        { title: "WordPress Migration", description: "Migrate your site to WordPress or upgrade existing installations.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Speed Optimization", description: "Optimize WordPress sites for faster loading and better SEO.", image: "/assets/images/seo/ourseo1.png" },
        { title: "WordPress Security", description: "Secure your WordPress site against threats and vulnerabilities.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best WordPress Development Agency",
        description: "PM IT Solution WordPress company in Jaipur creates powerful, flexible websites. We specialize in custom themes, plugin development, and WooCommerce solutions that scale with your business.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Custom Development", content: "Build themes and plugins tailored to your specific requirements.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "WooCommerce Expert", content: "Create powerful online stores with extended functionality.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Performance Focus", content: "Optimize for speed, SEO, and exceptional user experience.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for WordPress",
        subHeading: "PMIT Solution delivers exceptional WordPress solutions that power 40% of the web.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert WordPress Developers", content: "Our team has years of experience with WordPress core, themes, plugins, and Gutenberg blocks." },
            { title: "Custom Solutions", content: "We build custom themes and plugins instead of relying on bloated third-party solutions." },
            { title: "Performance Optimized", content: "Our WordPress sites are fast, secure, and optimized for search engines." },
            { title: "Ongoing Support", content: "We provide maintenance, security updates, and support for your WordPress site." }
        ]
    }

    const workData = {
        heading: "Our WordPress Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "WordPress Development", description: "PMIT Solution delivers exceptional WordPress websites", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Discover how businesses are succeeding with our WordPress services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'BUSINESS OWNER', quote: 'PM IT Solution built our custom WordPress theme. The site is fast, beautiful, and easy to manage!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'E-COMMERCE OWNER', quote: "Their WooCommerce expertise helped us launch our store in record time. Sales are booming!" },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'AGENCY OWNER', quote: 'Professional developers who built our reusable theme framework. We use it for all client sites now.' }
        ]
    }

    const faqData = {
        heading: "WordPress Development Questions?", subHeading: "PMIT Solution provides expert WordPress development services.",
        questions: [
            { question: "Q. 1 : Custom theme or page builder?", answer: "For performance and flexibility, we recommend custom themes. We can also work with Elementor or Gutenberg based on your needs." },
            { question: "Q. 2 : Is WordPress secure?", answer: "Yes, when properly maintained. We implement security best practices and keep your site updated." },
            { question: "Q. 3 : Can you speed up my WordPress site?", answer: "Yes! We optimize databases, implement caching, optimize images, and clean up bloated plugins." },
            { question: "Q. 4 : Do you develop plugins?", answer: "Yes, we create custom plugins for functionality that doesn't exist in traditional plugins." },
            { question: "Q. 5 : WooCommerce for large stores?", answer: "Yes, with proper optimization, WooCommerce can handle thousands of products and high traffic." },
            { question: "Q. 6 : Do you provide WordPress hosting?", answer: "We recommend and help set up optimized hosting like WP Engine, Kinsta, or cloud solutions." }
        ]
    }

    const contactData = {
        heading: "Ready to Build with WordPress? Get a quote.", subHeading: "PMIT Solution delivers exceptional WordPress websites.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "WordPress Development" }, { value: 2, label: "WooCommerce Store" }, { value: 3, label: "Custom Theme" }],
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
