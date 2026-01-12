
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
    const mData = [
        {
            title1: ' Android App Development',
            title2: 'Company in Jaipur',
            disc: "Build powerful, feature-rich Android applications with our expert development team. We create native Android apps that reach billions of users worldwide with exceptional performance and user experience.",
            img: '/assets/images/slider/bg-slider.png'
        }
    ]

    const services = [
        { title: "Native Android Apps", description: "Build high-performance native Android applications using Kotlin and Java.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Android Tablet Apps", description: "Create optimized tablet applications for enhanced user experiences.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Android TV Apps", description: "Develop Android TV applications for entertainment and media.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Wear OS Apps", description: "Build companion smartwatch apps for the Android Wear ecosystem.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Play Store Optimization", description: "Optimize your app for better visibility on Google Play Store.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Android App Maintenance", description: "Ongoing support, updates, and performance optimization for your apps.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best Android Development Agency",
        description: "PM IT Solution Android development company in Jaipur specializes in creating powerful, scalable Android applications. We use Kotlin, Java, and Jetpack Compose to deliver apps that perform beautifully across all Android devices.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Kotlin Development", content: "Build modern Android apps using Kotlin and Jetpack Compose.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Material Design", content: "Create beautiful UIs following Google's Material Design guidelines.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Play Store Success", content: "Complete Play Store submission and optimization services.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for Android Development",
        subHeading: "PMIT Solution delivers exceptional Android applications that reach billions of users worldwide.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert Android Developers", content: "Our team has years of experience building Android apps with Kotlin, Java, and modern Android frameworks." },
            { title: "Device Compatibility", content: "We ensure your app works flawlessly across thousands of Android device configurations." },
            { title: "Performance Optimized", content: "Our apps are optimized for battery life, memory, and smooth performance on all devices." },
            { title: "End-to-End Service", content: "From concept to Play Store launch and maintenance, we handle everything." }
        ]
    }

    const workData = {
        heading: "Our Android Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: { title: "Android Development", description: "PMIT Solution delivers exceptional Android applications for all devices", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say",
        subHeading: "Discover how businesses are succeeding with our Android development services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'STARTUP FOUNDER', quote: 'PM IT Solution built our Android app with 500K+ downloads. Performance is excellent across all devices!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'RETAIL BUSINESS', quote: "Their Android team delivered our POS app perfectly. It works flawlessly on tablets and phones." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'LOGISTICS COMPANY', quote: 'Professional Android developers who built our fleet tracking app. Drivers love how easy it is to use.' }
        ]
    }

    const faqData = {
        heading: "Android Development Questions?",
        subHeading: "PMIT Solution provides expert Android development services for businesses of all sizes.",
        questions: [
            { question: "Q. 1 : Do you use Kotlin or Java?", answer: "We primarily use Kotlin for new projects as it's Google's preferred language. We also maintain Java codebases and can work with either." },
            { question: "Q. 2 : How do you handle device fragmentation?", answer: "We test on a wide range of devices and use responsive layouts to ensure your app works on all screen sizes and Android versions." },
            { question: "Q. 3 : Will my app work on older Android versions?", answer: "We typically support Android 6.0+ which covers 95%+ of active devices. We can adjust based on your target audience." },
            { question: "Q. 4 : Do you provide Play Store submission?", answer: "Yes, we handle the complete Play Store submission process including screenshots, descriptions, and optimization." },
            { question: "Q. 5 : Can you integrate with hardware features?", answer: "Yes, we integrate with camera, GPS, Bluetooth, NFC, sensors, and other hardware features as needed." },
            { question: "Q. 6 : What about app security?", answer: "We implement encryption, secure authentication, code obfuscation, and follow Android security best practices." }
        ]
    }

    const contactData = {
        heading: "Ready to Build Your Android App? Get a quote.",
        subHeading: "PMIT Solution delivers exceptional Android applications for billions of users.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Android Development" }, { value: 2, label: "Mobile App" }, { value: 3, label: "Tablet App" }],
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
                    <Agency data={agencyData} />
                    <Choose data={chooseData} />
                    <Work data={workData} />
                    <Testimonials data={testimonialsData} />
                    <Faq data={faqData} />
                    <Contact data={contactData} />
                </div>
            </section>
        </Layout>
    )
}
