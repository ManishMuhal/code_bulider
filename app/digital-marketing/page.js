
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

export default function Page() {
    // Digital Marketing Hero Data
    const mData = [
        {
            title1: ' Digital Marketing',
            title2: 'Company in Jaipur',
            disc: "Digital marketing is crucial for businesses in today's highly competitive market.We understand the importance of utilizing the Internet and digital channels to establish connections between companies and potential customers.Our primary objective is to help businesses grow by implementing effective digital marketing solution strategies that generate more leads and increase brand visibility.",
            img: "/assets/images/slider/d.png"
        }
    ]

    // Agency Section Data
    const agencyData = {
        heading: "Best Affordable Digital Marketing Agency",
        description: "To expand, the best money to be spent would be on advertising. PM IT Solution digital marketing company in Jaipur is a group of young, creative, enthusiastic and brilliant people who know precisely what a brand needs and how to acquire it. We're here to provide you best digital marketing services in establishing your company's name and reputation via strategic brand development. Unfortunately, these youngsters are the greatest prospects for PM IT Solution.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            {
                icon: "/assets/images/svg/icon-create-5.svg",
                title: "Search Engine Optimization (SEO)",
                content: "Join millions online; elevate with SEO. Our Online Marketing enhances your website's visibility and attracts quality visitors, maximizing impact and success.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-6.svg",
                title: "Social Media Marketing",
                content: "We've crafted diverse strategies to amplify your message, connecting with your target audience effectively through social media marketing. Explore options now.",
                link: "#"
            },
            {
                icon: "/assets/images/svg/icon-create-3.svg",
                title: "PPC Services/Google Ads",
                content: "Experience disappointment with PPC/Google AdWords spending? Let a skilled specialist handle it, ensuring cost-effectiveness and quality traffic to your site.",
                link: "#"
            }
        ]
    }

    // Choose Us Section Data
    const chooseData = {
        heading: "Why Choose Us",
        subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services,compliance assistance and targeted support. Each of the services created.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            {
                title: "Innovative and Passionate",
                content: "As a digital marketing agency in Jaipur, we have a deep desire to push the boundaries of the industry. We are always looking for innovative methods to help our customers earn more money"
            },
            {
                title: "Investment",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc. Faucibus nunc, egestas quis semper porttitor. Fermentum magna commodo sodales curabitur. Pharetra, gravida nunc aliquam dolor id magna eu orci. Porttitor magna nulla est amet dolor ultricies egestas gravida. Nulla pellentesque convallis ligula placerat consectetur tortor, lobortis velit risus."
            },
            {
                title: "Services",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc. Faucibus nunc, egestas quis semper porttitor. Fermentum magna commodo sodales curabitur. Pharetra, gravida nunc aliquam dolor id magna eu orci. Porttitor magna nulla est amet dolor ultricies egestas gravida. Nulla pellentesque convallis ligula placerat consectetur tortor, lobortis velit risus."
            },
            {
                title: "Customer Support",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc. Faucibus nunc, egestas quis semper porttitor. Fermentum magna commodo sodales curabitur. Pharetra, gravida nunc aliquam dolor id magna eu orci. Porttitor magna nulla est amet dolor ultricies egestas gravida. Nulla pellentesque convallis ligula placerat consectetur tortor, lobortis velit risus."
            }
        ]
    }

    // Work Section Data
    const workData = {
        heading: "Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Digital Marketing",
            description: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services",
            buttonText: "Explore now",
            buttonLink: "/explore-banner"
        }
    }

    // Testimonials Data
    const testimonialsData = {
        badge: "Client Feedback",
        heading: "What Our",
        headingLight: "Clients Say",
        subHeading: "Discover how businesses are growing faster with our IT solutions & services.",
        testimonials: [
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Paul Trueman',
                role: 'EQANTA APP',
                quote: 'Working with Courtney Davis as our UI designer was an absolute pleasure. Her attention to detail and creative approach brought our vision to life. The user interface she designed exceeded our expectations, and we received positive feedback from our clients. Highly recommended!',
            },
            {
                avatar: '/assets/images/banner/image 16.png',
                name: 'Courtney Davis',
                role: 'UX LEAD',
                quote: "Amazing work — creative, timely and highly skilled. Our app's UX improved dramatically after the redesign.",
            },
            {
                avatar: '/assets/images/banner/image 11.png',
                name: 'Mark Jensen',
                role: 'PRODUCT MANAGER',
                quote: 'Professional and thoughtful design. The team loved the new interface and engagement went up.',
            },
        ]
    }

    // FAQ Data
    const faqData = {
        heading: "Have any Questions?",
        subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created.",
        questions: [
            {
                question: "Q. 1 : Why Is Digital Marketing Important to Your Business?",
                answer: "Digital marketing is essential for businesses due to several reasons. Firstly, it allows you to reach a vast online audience, as most consumers now turn to the Internet for information and purchases. By leveraging digital marketing strategies, you can connect with your target audience, build brand awareness, and drive relevant traffic to your website.<br/><br/>Moreover, digital marketing provides measurable results. Unlike traditional marketing methods, you can track and analyze the performance of your digital campaigns in real time. This enables you to make data-driven decisions, optimize your marketing efforts, and divide your resources effectively."
            },
            {
                question: "Q. 2 : How to pick the right digital marketing agency in Jaipur?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
            },
            {
                question: "Q. 3 : What services should you seek from a digital Marketing Services Provider?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
            },
            {
                question: "Q. 4 : What are the benefits of hiring a digital marketing company?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
            },
            {
                question: "Q. 5 : Why do businesses need digital marketing services in Jaipur?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
            },
            {
                question: "Q. 6 : Why Choose PM IT Solution for Digital Marketing Company for Business Success?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sapien, lacus vitae sapien nulla amet risus nunc."
            }
        ]
    }

    // Contact Section Data
    const contactData = {
        heading: "Have a Projects Idea! Write down a quote.",
        subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, compliance assistance and targeted support. Each of the services created.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Services" },
            { value: 2, label: "Select subject" },
            { value: 3, label: "Select subject" }
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