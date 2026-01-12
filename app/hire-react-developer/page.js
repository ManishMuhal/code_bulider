
import dynamic from 'next/dynamic'
const DigitalMarketing = dynamic(() => import('@/components/sections/services/DigitalMarketing'), { ssr: false })
import Agency from "@/components/sections/services/Agency"
import Layout from "@/components/layout/Layout"
import Choose from '@/components/sections/services/Choose'
import Testimonials from '@/components/sections/services/Testimonials'
import Faq from '@/components/sections/services/Faq'
import Contact from '@/components/sections/home/Contact'
import Work from '@/components/sections/services/Work'

export default function Page() {
    const mData = [{
        title1: ' Hire React Developer',
        title2: 'in Jaipur',
        disc: "Hire dedicated React developers to build modern, interactive web applications. Our skilled developers specialize in React, Next.js, and the React ecosystem.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const agencyData = {
        heading: "Hire Dedicated React Developers",
        description: "PM IT Solution provides skilled React developers for hire. Our developers are experienced in React.js, Next.js, Redux, and modern frontend development. Scale your team with our dedicated resources.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Flexible Hiring", content: "Hire hourly, part-time, or full-time based on your needs.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "React Experts", content: "5+ years experience in React, Next.js, and state management.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Direct Communication", content: "Work directly with your developer via Slack, Teams, or email.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Hire Our React Developers",
        subHeading: "PMIT Solution provides skilled React developers who integrate seamlessly with your team.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert React Skills", content: "Our developers are proficient in React, Next.js, Redux, TypeScript, and testing libraries." },
            { title: "Modern Practices", content: "We follow React best practices with hooks, context, and clean component architecture." },
            { title: "Quick Onboarding", content: "Start working with your dedicated developer within 48 hours." },
            { title: "Full-Stack Capable", content: "Many of our React developers also work with Node.js for full-stack development." }
        ]
    }

    const workData = {
        heading: "Our React Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Hire React Developer", description: "Scale your team with our dedicated React developers", buttonText: "Hire Now", buttonLink: "/connect-us" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Hear from companies who hired our React developers.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'STARTUP FOUNDER', quote: 'We hired a React developer from PM IT Solution. They built our entire frontend in record time!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'PRODUCT MANAGER', quote: "Their Next.js developer improved our site performance by 60%. Excellent skills!" },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'CTO', quote: 'We have 3 of their React developers on our team. Quality and communication are outstanding.' }
        ]
    }

    const faqData = {
        heading: "Hire React Developer Questions?", subHeading: "PMIT Solution makes hiring dedicated developers easy.",
        questions: [
            { question: "Q. 1 : What React skills do your developers have?", answer: "React.js, Next.js, Redux, Context API, TypeScript, React Query, testing with Jest and RTL." },
            { question: "Q. 2 : Do they know Next.js?", answer: "Yes, many of our React developers are experienced with Next.js, SSR, and static generation." },
            { question: "Q. 3 : Can they work in my timezone?", answer: "Yes, our developers can adjust working hours to overlap with US, UK, or European timezones." },
            { question: "Q. 4 : What about state management?", answer: "Our developers are skilled in Redux, Context API, Zustand, and React Query for data fetching." },
            { question: "Q. 5 : Do they write tests?", answer: "Yes, our developers write unit tests with Jest, integration tests with RTL, and E2E with Cypress." },
            { question: "Q. 6 : Can I interview before hiring?", answer: "Absolutely! We arrange technical interviews so you can assess the developer before committing." }
        ]
    }

    const contactData = {
        heading: "Hire a React Developer Today", subHeading: "PMIT Solution provides dedicated React developers for your projects.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Hire React Developer" }, { value: 2, label: "Next.js Developer" }, { value: 3, label: "Full-Stack React" }],
        budgetOptions: [{ value: 1, label: "Engagement Type" }, { value: 2, label: "Hourly" }, { value: 3, label: "Monthly" }]
    }

    return (
        <Layout>
            <section className="tf-live-auction explore tf-filter">
                <div className="tf-container">
                    <DigitalMarketing mData={mData} />
                    <Agency data={agencyData} /><Choose data={chooseData} /><Work data={workData} /><Testimonials data={testimonialsData} /><Faq data={faqData} /><Contact data={contactData} />
                </div>
            </section>
        </Layout>
    )
}
