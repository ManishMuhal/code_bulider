
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
        title1: ' Flutter App Development',
        title2: 'Company in Jaipur',
        disc: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Our Flutter experts create high-performance cross-platform apps that look and feel native.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const services = [
        { title: "Cross-Platform Apps", description: "Build iOS and Android apps from a single Flutter codebase.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Flutter Web Apps", description: "Deploy your Flutter app to the web for broader reach.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Flutter Desktop", description: "Create desktop applications for Windows, macOS, and Linux.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Custom Widgets", description: "Design beautiful custom widgets matching your brand identity.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Firebase Integration", description: "Integrate Firebase for authentication, database, and analytics.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Flutter Migration", description: "Migrate your existing apps to Flutter for unified development.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best Flutter Development Agency",
        description: "PM IT Solution Flutter company in Jaipur creates beautiful cross-platform applications. We leverage Flutter's widget system and Dart language to build apps that perform like native while sharing a single codebase.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Single Codebase", content: "Write once, deploy to iOS, Android, web, and desktop platforms.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Beautiful UIs", content: "Create stunning interfaces with Flutter's rich widget library.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Fast Development", content: "Hot reload for instant feedback and faster development cycles.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for Flutter",
        subHeading: "PMIT Solution delivers exceptional Flutter applications that work seamlessly across all platforms.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert Flutter Developers", content: "Our team has extensive experience with Flutter, Dart, and state management solutions like BLoC and Riverpod." },
            { title: "Cross-Platform Excellence", content: "We deliver apps that look and perform natively on both iOS and Android from a single codebase." },
            { title: "Cost-Effective Development", content: "Save 40-50% on development costs compared to building separate native apps." },
            { title: "Rapid Delivery", content: "Flutter's hot reload and single codebase means faster time-to-market for your app." }
        ]
    }

    const workData = {
        heading: "Our Flutter Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Flutter Development", description: "PMIT Solution delivers exceptional Flutter applications for all platforms", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Discover how businesses are succeeding with our Flutter development services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'STARTUP FOUNDER', quote: 'PM IT Solution built our Flutter app for both iOS and Android. Saved us 50% on development costs!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'E-COMMERCE OWNER', quote: "Beautiful app that works identically on both platforms. Our customers can't tell it's cross-platform." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'FINTECH STARTUP', quote: 'Professional Flutter developers who delivered our banking app with excellent performance.' }
        ]
    }

    const faqData = {
        heading: "Flutter Development Questions?", subHeading: "PMIT Solution provides expert Flutter development services.",
        questions: [
            { question: "Q. 1 : What is Flutter?", answer: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart language." },
            { question: "Q. 2 : Is Flutter good for production apps?", answer: "Yes! Major apps like Google Pay, Alibaba, and BMW use Flutter. It's production-ready with excellent performance." },
            { question: "Q. 3 : Flutter vs React Native - which is better?", answer: "Both are excellent. Flutter offers better performance and consistent UI, while React Native leverages JavaScript knowledge. We help you choose based on your needs." },
            { question: "Q. 4 : Can Flutter access native features?", answer: "Yes, Flutter can access all native features like camera, GPS, and sensors through platform channels and plugins." },
            { question: "Q. 5 : How much can I save with Flutter?", answer: "You can save 40-50% compared to developing separate iOS and Android apps, plus ongoing maintenance savings." },
            { question: "Q. 6 : Do you support Flutter web?", answer: "Yes, we can deploy your Flutter app to the web, allowing users to access it from any browser." }
        ]
    }

    const contactData = {
        heading: "Ready to Build with Flutter? Get a quote.", subHeading: "PMIT Solution delivers exceptional cross-platform Flutter applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Flutter Development" }, { value: 2, label: "Cross-Platform App" }, { value: 3, label: "Flutter Migration" }],
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
