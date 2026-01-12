
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
        title1: ' Hire SEO Expert',
        title2: 'in Jaipur',
        disc: "Hire dedicated SEO experts to improve your search rankings and drive organic traffic. Our specialists use proven strategies to boost your online visibility and generate leads.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const agencyData = {
        heading: "Hire Dedicated SEO Experts",
        description: "PM IT Solution provides skilled SEO experts for hire. Our specialists are experienced in on-page SEO, link building, technical SEO, and content strategy.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Flexible Hiring", content: "Hire hourly, part-time, or full-time based on your needs.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Proven Results", content: "Track record of improving rankings and driving organic traffic.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "White-Hat Only", content: "We use only ethical SEO techniques for sustainable results.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Hire Our SEO Experts",
        subHeading: "PMIT Solution provides skilled SEO specialists who deliver measurable results.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Comprehensive SEO", content: "Our experts handle on-page, off-page, technical SEO, and content optimization." },
            { title: "Data-Driven", content: "We use analytics and SEO tools to make data-driven decisions and track progress." },
            { title: "Industry Experience", content: "Experience across e-commerce, SaaS, local businesses, and enterprise SEO." },
            { title: "Regular Reporting", content: "Weekly or monthly reports showing rankings, traffic, and key metrics." }
        ]
    }

    const workData = {
        heading: "Our SEO Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Hire SEO Expert", description: "Boost your rankings with our dedicated SEO specialists", buttonText: "Hire Now", buttonLink: "/connect-us" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Hear from companies who hired our SEO experts.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'BUSINESS OWNER', quote: 'We hired an SEO expert from PM IT Solution. Organic traffic increased 150% in 6 months!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'MARKETING MANAGER', quote: "Their SEO specialist got us to page 1 for our main keywords. Excellent results!" },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'E-COMMERCE OWNER', quote: 'Our product pages now rank on Google. Sales from organic search doubled.' }
        ]
    }

    const faqData = {
        heading: "Hire SEO Expert Questions?", subHeading: "PMIT Solution makes hiring SEO specialists easy.",
        questions: [
            { question: "Q. 1 : What SEO services do they provide?", answer: "On-page optimization, link building, technical SEO audits, content strategy, and local SEO." },
            { question: "Q. 2 : How long to see results?", answer: "SEO is a long-term strategy. You'll start seeing improvements in 3-6 months with significant gains by 12 months." },
            { question: "Q. 3 : What tools do they use?", answer: "Ahrefs, SEMrush, Google Search Console, Screaming Frog, and other industry-standard tools." },
            { question: "Q. 4 : Do they handle content creation?", answer: "Our SEO experts provide content strategy and optimization. Content writing can be added separately." },
            { question: "Q. 5 : What about link building?", answer: "We use white-hat link building including guest posts, digital PR, and outreach campaigns." },
            { question: "Q. 6 : How do you report progress?", answer: "Weekly or monthly reports showing keyword rankings, traffic, backlinks, and actionable insights." }
        ]
    }

    const contactData = {
        heading: "Hire an SEO Expert Today", subHeading: "PMIT Solution provides dedicated SEO specialists for your business.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Hire SEO Expert" }, { value: 2, label: "Technical SEO" }, { value: 3, label: "Link Building" }],
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
