
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
        title1: ' Hire PHP Developer',
        title2: 'in Jaipur',
        disc: "Hire dedicated PHP developers to build robust web applications. Our skilled developers work as an extension of your team, delivering quality code and meeting your project deadlines.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const agencyData = {
        heading: "Hire Dedicated PHP Developers",
        description: "PM IT Solution provides skilled PHP developers for hire. Our developers are experienced in Laravel, CodeIgniter, Symfony, and core PHP development. Scale your team with our dedicated resources.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Flexible Hiring", content: "Hire hourly, part-time, or full-time based on your needs.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Skilled Developers", content: "5+ years experience in PHP, Laravel, and modern frameworks.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Direct Communication", content: "Work directly with your developer via Slack, Teams, or email.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Hire Our PHP Developers",
        subHeading: "PMIT Solution provides skilled PHP developers who integrate seamlessly with your team.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert PHP Skills", content: "Our developers are proficient in Laravel, CodeIgniter, Symfony, WordPress, and core PHP." },
            { title: "Flexible Engagement", content: "Choose hourly, monthly, or project-based engagement models." },
            { title: "Quick Onboarding", content: "Start working with your dedicated developer within 48 hours." },
            { title: "No Hidden Costs", content: "Transparent pricing with no recruitment or overhead costs." }
        ]
    }

    const workData = {
        heading: "Our PHP Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Hire PHP Developer", description: "Scale your team with our dedicated PHP developers", buttonText: "Hire Now", buttonLink: "/connect-us" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Hear from companies who hired our PHP developers.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'CTO, STARTUP', quote: 'We hired a PHP developer from PM IT Solution and they integrated perfectly with our team!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'PROJECT MANAGER', quote: "Their Laravel developer helped us complete our project 2 weeks ahead of schedule." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'AGENCY OWNER', quote: 'We use their PHP developers for all our overflow work. Quality and reliability are excellent.' }
        ]
    }

    const faqData = {
        heading: "Hire PHP Developer Questions?", subHeading: "PMIT Solution makes hiring dedicated developers easy.",
        questions: [
            { question: "Q. 1 : What is your hiring model?", answer: "We offer hourly ($15-25/hr), monthly (full-time dedicated), and project-based engagement models." },
            { question: "Q. 2 : How quickly can I start?", answer: "We can match you with a developer and start within 48 hours for most requirements." },
            { question: "Q. 3 : What skills do your PHP developers have?", answer: "Laravel, CodeIgniter, Symfony, WordPress, API development, MySQL, and modern PHP practices." },
            { question: "Q. 4 : How do we communicate?", answer: "Use Slack, Microsoft Teams, email, or any communication tool you prefer. Daily standups if needed." },
            { question: "Q. 5 : Can I scale up or down?", answer: "Yes, you can adjust the team size each month based on your project needs." },
            { question: "Q. 6 : What if the developer isn't a fit?", answer: "We provide replacement within one week if the developer doesn't meet your expectations." }
        ]
    }

    const contactData = {
        heading: "Hire a PHP Developer Today", subHeading: "PMIT Solution provides dedicated PHP developers for your projects.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Hire PHP Developer" }, { value: 2, label: "Laravel Developer" }, { value: 3, label: "Full-Stack PHP" }],
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
