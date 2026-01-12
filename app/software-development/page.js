
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
        title1: ' Software Development',
        title2: 'Company in Jaipur',
        disc: "Build custom software solutions that transform your business operations. We create CRM, ERP, management systems, and enterprise software tailored to your unique requirements.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const services = [
        { title: "CRM Software", description: "Custom Customer Relationship Management systems for your business.", image: "/assets/images/seo/ourseo1.png" },
        { title: "ERP Solutions", description: "Enterprise Resource Planning software for streamlined operations.", image: "/assets/images/seo/ourseo1.png" },
        { title: "School Management", description: "Complete school and college management systems.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Hospital Management", description: "Healthcare management software with patient records and billing.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Hotel Management", description: "Booking, inventory, and operations management for hospitality.", image: "/assets/images/seo/ourseo1.png" },
        { title: "HR Management", description: "Human resource management systems with payroll and attendance.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best Software Development Agency",
        description: "PM IT Solution software company in Jaipur creates custom software solutions that automate processes, improve efficiency, and drive business growth. We build scalable, maintainable enterprise software.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Custom Development", content: "Build software tailored to your specific business processes.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Cloud Solutions", content: "Deploy on AWS, Azure, or Google Cloud for scalability.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Integration", content: "Connect with existing systems, APIs, and third-party services.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for Software Development",
        subHeading: "PMIT Solution delivers custom software that transforms business operations.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Domain Expertise", content: "We have experience in healthcare, education, hospitality, real estate, and more industries." },
            { title: "Scalable Architecture", content: "Our software is built to scale with your business growth." },
            { title: "Modern Technologies", content: "We use modern frameworks and cloud platforms for reliable solutions." },
            { title: "Ongoing Support", content: "We provide maintenance, updates, and support for your software." }
        ]
    }

    const workData = {
        heading: "Our Software Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Software Development", description: "PMIT Solution delivers custom software solutions", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Discover how businesses are transforming with our software solutions.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'HOSPITAL ADMIN', quote: 'PM IT Solution built our hospital management system. Patient management is now seamless!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'SCHOOL PRINCIPAL', quote: "Their school ERP handles admissions, fees, and academics perfectly. Parents and teachers love it." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'HR DIRECTOR', quote: 'Professional developers who built our HRMS. Payroll processing time reduced by 80%.' }
        ]
    }

    const faqData = {
        heading: "Software Development Questions?", subHeading: "PMIT Solution provides expert software development services.",
        questions: [
            { question: "Q. 1 : Do you build custom software?", answer: "Yes, we build completely custom software based on your specific business requirements and workflows." },
            { question: "Q. 2 : What industries do you serve?", answer: "We serve healthcare, education, hospitality, real estate, manufacturing, retail, and more industries." },
            { question: "Q. 3 : Cloud or on-premise?", answer: "We support both cloud deployment (AWS, Azure) and on-premise installation based on your preferences." },
            { question: "Q. 4 : How long does development take?", answer: "Timeline depends on complexity. Simple systems take 2-3 months, complex enterprise software 6-12 months." },
            { question: "Q. 5 : Do you integrate with existing systems?", answer: "Yes, we integrate with your existing software, databases, and third-party services." },
            { question: "Q. 6 : What about data migration?", answer: "We handle migration of your existing data to the new system with data validation and testing." }
        ]
    }

    const contactData = {
        heading: "Ready to Build Custom Software? Get a quote.", subHeading: "PMIT Solution delivers custom software that transforms operations.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Software Development" }, { value: 2, label: "CRM/ERP" }, { value: 3, label: "Management System" }],
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
