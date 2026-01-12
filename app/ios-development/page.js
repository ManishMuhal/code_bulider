
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
    const mData = [
        {
            title1: ' iOS App Development',
            title2: 'Company in Jaipur',
            disc: "Build stunning, high-performance iOS applications with our expert development team. We create native iPhone and iPad apps that deliver exceptional user experiences and drive business growth.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    const services = [
        { title: "iPhone App Development", description: "Build native iPhone applications with Swift and SwiftUI for optimal performance.", image: "/assets/images/seo/ourseo1.png" },
        { title: "iPad App Development", description: "Create powerful iPad apps optimized for larger screens and multitasking.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Apple Watch Apps", description: "Develop companion watchOS apps for seamless ecosystem integration.", image: "/assets/images/seo/ourseo1.png" },
        { title: "App Store Optimization", description: "Optimize your app for better visibility and downloads on the App Store.", image: "/assets/images/seo/ourseo1.png" },
        { title: "iOS UI/UX Design", description: "Design beautiful interfaces following Apple's Human Interface Guidelines.", image: "/assets/images/seo/ourseo1.png" },
        { title: "iOS App Maintenance", description: "Ongoing support, updates, and performance optimization for your iOS apps.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best iOS Development Agency",
        description: "PM IT Solution iOS development company in Jaipur specializes in creating beautiful, high-performance iPhone and iPad applications. We use Swift, SwiftUI, and the latest Apple technologies to deliver apps that users love.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Swift Development", content: "Build modern iOS apps using Swift and SwiftUI for clean, efficient code.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Native Performance", content: "Leverage native iOS APIs for optimal performance and smooth animations.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "App Store Success", content: "Complete App Store submission and optimization for maximum visibility.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for iOS Development",
        subHeading: "PMIT Solution delivers exceptional iOS applications that meet Apple's quality standards and exceed user expectations.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert iOS Developers", content: "Our team has years of experience building iOS apps with Swift, Objective-C, and the latest Apple frameworks." },
            { title: "Apple Guidelines Compliant", content: "We follow Apple's Human Interface Guidelines ensuring smooth App Store approval." },
            { title: "Performance Focused", content: "Our apps are optimized for battery life, memory usage, and smooth 60fps performance." },
            { title: "End-to-End Service", content: "From concept to App Store launch and beyond, we handle every aspect of iOS development." }
        ]
    }

    const workData = {
        heading: "Our iOS Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: { title: "iOS Development", description: "PMIT Solution delivers exceptional iOS applications for iPhone and iPad", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are succeeding with our iOS development services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'STARTUP FOUNDER', quote: 'PM IT Solution built our iOS app that now has 100K+ downloads. The app is fast, beautiful, and our users love it!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'E-COMMERCE OWNER', quote: "Their iOS team delivered our shopping app on time. Sales through mobile increased by 200%." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'HEALTHCARE STARTUP', quote: 'Professional iOS developers who built our patient app with full HIPAA compliance. Excellent work!' }
        ]
    }

    const faqData = {
        heading: "iOS Development Questions?",
        subHeading: "PMIT Solution provides expert iOS development services for businesses of all sizes.",
        questions: [
            { question: "Q. 1 : How long does it take to develop an iOS app?", answer: "Development time varies based on complexity. A simple app takes 2-3 months, while complex apps may take 4-6 months or more." },
            { question: "Q. 2 : Do you use Swift or Objective-C?", answer: "We primarily use Swift and SwiftUI for new projects. We also maintain and update legacy Objective-C codebases." },
            { question: "Q. 3 : Will my app be approved on the App Store?", answer: "We follow Apple's guidelines strictly and have a high approval rate. We handle the entire submission process for you." },
            { question: "Q. 4 : Do you provide app maintenance?", answer: "Yes, we offer ongoing maintenance packages including bug fixes, iOS updates compatibility, and feature enhancements." },
            { question: "Q. 5 : Can you develop for iPad as well?", answer: "Yes, we create universal apps that work beautifully on both iPhone and iPad, or dedicated iPad apps if needed." },
            { question: "Q. 6 : What about push notifications and integrations?", answer: "We integrate push notifications, analytics, payment gateways, and any third-party APIs your app needs." }
        ]
    }

    const contactData = {
        heading: "Ready to Build Your iOS App? Get a quote.",
        subHeading: "PMIT Solution delivers exceptional iOS applications that users love.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "iOS Development" },
            { value: 2, label: "iPhone App" },
            { value: 3, label: "iPad App" }
        ],
        budgetOptions: [
            { value: 1, label: "Budget" },
            { value: 2, label: "Project budget (USD)" },
            { value: 3, label: "Select subject" }
        ]
    }

    return (
        <>
            <Layout>
                <section className="tf-live-auction explore tf-filter">
                    <div className="tf-container">
                        <DigitalMarketing mData={mData} />
                        <div className='row gap-2'>
                            {services.map((service, i) => (
                                <div key={i} className={`position-relative col-lg-4 col-md-6 col-sm-12 overflow-hidden mb-4 rounded-4 ${styles.cardBox}`}>
                                    <img src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} className="rounded-4" />
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
