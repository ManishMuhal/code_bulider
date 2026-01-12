
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
        title1: ' React Native Development',
        title2: 'Company in Jaipur',
        disc: "Build powerful cross-platform mobile applications with React Native. Leverage your JavaScript expertise to create native iOS and Android apps that share a common codebase.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const services = [
        { title: "Cross-Platform Apps", description: "Build iOS and Android apps from a single React Native codebase.", image: "/assets/images/seo/ourseo1.png" },
        { title: "React Native UI", description: "Create beautiful native-feeling interfaces with React Native components.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Native Modules", description: "Integrate platform-specific native code when needed for specialized features.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Expo Development", description: "Rapid development with Expo's managed workflow and OTA updates.", image: "/assets/images/seo/ourseo1.png" },
        { title: "React Native Web", description: "Share code with React web applications for maximum code reuse.", image: "/assets/images/seo/ourseo1.png" },
        { title: "App Migration", description: "Migrate existing apps to React Native or upgrade legacy versions.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best React Native Development Agency",
        description: "PM IT Solution React Native company in Jaipur creates efficient cross-platform applications. We leverage React and JavaScript expertise to build apps that feel truly native on both iOS and Android.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "JavaScript Expertise", content: "Leverage React and JavaScript skills for mobile development.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Native Performance", content: "Bridge to native components for optimal performance.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Code Sharing", content: "Share code between React web and React Native mobile apps.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for React Native",
        subHeading: "PMIT Solution delivers exceptional React Native applications with native performance.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert React Native Developers", content: "Our team has deep experience with React Native, Redux, and the React ecosystem." },
            { title: "Native Integration", content: "We seamlessly integrate native code when needed for specialized functionality." },
            { title: "OTA Updates", content: "Push updates to your app without App Store review using CodePush." },
            { title: "JavaScript Ecosystem", content: "Leverage the vast npm ecosystem and share code with web applications." }
        ]
    }

    const workData = {
        heading: "Our React Native Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "React Native Development", description: "PMIT Solution delivers exceptional React Native applications", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Discover how businesses are succeeding with our React Native services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'TECH STARTUP', quote: 'PM IT Solution built our React Native app. We share code with our web app and saved significant development time!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'SOCIAL PLATFORM', quote: "Their React Native team delivered our social app on time. OTA updates keep our users on the latest version." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'ENTERPRISE CLIENT', quote: 'Professional developers who integrated complex native modules perfectly.' }
        ]
    }

    const faqData = {
        heading: "React Native Questions?", subHeading: "PMIT Solution provides expert React Native development services.",
        questions: [
            { question: "Q. 1 : React Native vs Flutter?", answer: "React Native uses JavaScript and is great if you have React web developers. Flutter offers slightly better performance. We help you choose based on your team and needs." },
            { question: "Q. 2 : Is React Native truly native?", answer: "React Native uses native components, not webviews. UI elements are truly native, providing excellent performance and feel." },
            { question: "Q. 3 : Can we share code with our web app?", answer: "Yes! With React Native Web, you can share significant code between your mobile and web applications." },
            { question: "Q. 4 : What about performance?", answer: "React Native performs excellently for most apps. For graphics-intensive apps, we can integrate native code as needed." },
            { question: "Q. 5 : Do you use Expo?", answer: "We use Expo for rapid development when suitable, and bare React Native for complex apps needing custom native code." },
            { question: "Q. 6 : Can you update without App Store review?", answer: "Yes, using CodePush, we can push JavaScript updates to your app without going through the App Store review." }
        ]
    }

    const contactData = {
        heading: "Ready to Build with React Native? Get a quote.", subHeading: "PMIT Solution delivers exceptional React Native applications.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "React Native Development" }, { value: 2, label: "Cross-Platform App" }, { value: 3, label: "App Migration" }],
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
