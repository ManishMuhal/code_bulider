
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
        title1: ' Hire Node.js Developer',
        title2: 'in Jaipur',
        disc: "Hire dedicated Node.js developers to build scalable backend systems and APIs. Our skilled developers specialize in Express, NestJS, and real-time applications.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const agencyData = {
        heading: "Hire Dedicated Node.js Developers",
        description: "PM IT Solution provides skilled Node.js developers for hire. Our developers are experienced in Express, NestJS, MongoDB, and microservices architecture.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Flexible Hiring", content: "Hire hourly, part-time, or full-time based on your needs.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Backend Experts", content: "5+ years experience in Node.js and server-side development.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Direct Communication", content: "Work directly with your developer via Slack, Teams, or email.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Hire Our Node.js Developers",
        subHeading: "PMIT Solution provides skilled Node.js developers who build scalable backend systems.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert Node.js Skills", content: "Our developers are proficient in Express, NestJS, Fastify, and real-time with Socket.io." },
            { title: "Database Expertise", content: "Experience with MongoDB, PostgreSQL, Redis, and database optimization." },
            { title: "API Development", content: "RESTful APIs, GraphQL, and microservices architecture specialists." },
            { title: "DevOps Ready", content: "Docker, CI/CD, and cloud deployment experience included." }
        ]
    }

    const workData = {
        heading: "Our Node.js Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Hire Node.js Developer", description: "Scale your team with our dedicated Node.js developers", buttonText: "Hire Now", buttonLink: "/connect-us" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Hear from companies who hired our Node.js developers.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'CTO', quote: 'We hired a Node.js developer from PM IT Solution. Our API performance improved 5x!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'STARTUP FOUNDER', quote: "Their developer built our real-time chat system in 3 weeks. Outstanding work!" },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'TECH LEAD', quote: 'We use their Node.js developers for all our backend work. Reliable and skilled.' }
        ]
    }

    const faqData = {
        heading: "Hire Node.js Developer Questions?", subHeading: "PMIT Solution makes hiring dedicated developers easy.",
        questions: [
            { question: "Q. 1 : What Node.js frameworks do they know?", answer: "Express.js, NestJS, Fastify, Koa, and Hapi. NestJS for enterprise, Express for most projects." },
            { question: "Q. 2 : Database experience?", answer: "MongoDB, PostgreSQL, MySQL, Redis for caching, and experience with ORMs like TypeORM and Mongoose." },
            { question: "Q. 3 : Can they build real-time apps?", answer: "Yes, our developers are experienced with Socket.io and WebSockets for real-time features." },
            { question: "Q. 4 : GraphQL or REST?", answer: "Our developers are skilled in both. They can build REST APIs or GraphQL servers with Apollo." },
            { question: "Q. 5 : What about TypeScript?", answer: "Most of our Node.js developers prefer TypeScript for type safety and better maintainability." },
            { question: "Q. 6 : Cloud deployment?", answer: "Experience with AWS, Docker, Kubernetes, and serverless functions (Lambda)." }
        ]
    }

    const contactData = {
        heading: "Hire a Node.js Developer Today", subHeading: "PMIT Solution provides dedicated Node.js developers for your projects.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Hire Node.js Developer" }, { value: 2, label: "Backend Developer" }, { value: 3, label: "Full-Stack JS" }],
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
