
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
import GrowthSection from '@/components/sections/seo/GrowthSection'

export default function Page() {
  // Hero Section Data
  const mData = [
    {
      title1: ' Best SEO',
      title2: 'Company in Jaipur',
      disc: "Digital marketing is crucial for businesses in today's highly competitive market.We understand the importance of utilizing the Internet and digital channels to establish connections between companies and potential customers.Our primary objective is to help businesses grow by implementing effective digital marketing solution strategies that generate more leads and increase brand visibility.",
      img: '/assets/images/mgpic.png'
    }
  ]

  // Services Cards Data
  const services = [
    {
      title: "Instagram Marketing",
      description: "We create engaging Instagram campaigns that increase your brand reach and engagement.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "OFF Page SEO",
      description: "We perform in-depth keyword research and optimize your website for search visibility.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Local SEO",
      description: "We perform in-depth keyword research and optimize your website for search visibility.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "E-commerce SEO",
      description: "We perform in-depth keyword research and optimize your website for search visibility.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Travel SEO",
      description: "We perform in-depth keyword research and optimize your website for search visibility.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Health SEO",
      description: "We perform in-depth keyword research and optimize your website for search visibility.",
      image: "/assets/images/seo/ourseo1.png",
    },
  ]

  // Growth Section Data
  const growthData = {
    heading: (
      <>
        Fueling <span style={{ color: "#000" }}>website growth</span> is our passion
      </>
    ),
    description: "Code Butler Technologies, the SEO Agency in Jaipur, not only drives traffic to your website but also enhances your search rankings for optimal success.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    features: [
      {
        icon: "🌐",
        desc: "Bring in powerful insights through quality research.",
        color: "#e74c3c",
      },
      {
        icon: "⭐",
        desc: "Boost your online authority and gain audience trust.",
        color: "#9b59b6",
      },
      {
        icon: "📈",
        desc: "Traffic growth without compromising conversions.",
        color: "#27ae60",
      },
      {
        icon: "🚀",
        desc: "Achieve consistent improvement with expert SEO.",
        color: "#f39c12",
      },
    ],
  }

  // Agency Section Data
  const agencyData = {
    heading: "Best Affordable SEO Agency",
    description: "To expand, the best money to be spent would be on SEO. PM IT Solution SEO company in Jaipur is a group of young, creative, enthusiastic and brilliant people who know precisely what a brand needs and how to acquire it. We're here to provide you best SEO services in establishing your company's name and reputation via strategic search engine optimization.",
    image: "/assets/images/slider/slider-5.png",
    services: [
      {
        icon: "/assets/images/svg/icon-create-5.svg",
        title: "On-Page SEO",
        content: "Optimize your website structure, content, and meta tags to improve search engine rankings and user experience.",
        link: "#"
      },
      {
        icon: "/assets/images/svg/icon-create-6.svg",
        title: "Off-Page SEO",
        content: "Build high-quality backlinks and improve your domain authority through strategic link building campaigns.",
        link: "#"
      },
      {
        icon: "/assets/images/svg/icon-create-3.svg",
        title: "Technical SEO",
        content: "Ensure your website is technically sound with fast loading speeds, mobile optimization, and proper indexing.",
        link: "#"
      }
    ]
  }

  // Choose Us Section Data
  const chooseData = {
    heading: "Why Choose Us for SEO",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing SEO services, compliance assistance and targeted support. Each of the services created.",
    image: "/assets/images/banner/thumb-banner2.png",
    accordions: [
      {
        title: "Proven SEO Results",
        content: "We have a track record of delivering measurable SEO results for businesses across various industries. Our data-driven approach ensures consistent growth in organic traffic and rankings."
      },
      {
        title: "White-Hat Techniques",
        content: "We only use ethical, white-hat SEO techniques that comply with search engine guidelines. This ensures long-term, sustainable results without risking penalties."
      },
      {
        title: "Comprehensive Strategy",
        content: "Our SEO strategy covers all aspects including technical SEO, on-page optimization, content creation, and link building for complete search visibility."
      },
      {
        title: "Dedicated SEO Team",
        content: "Our team of certified SEO professionals stays updated with the latest algorithm changes and best practices to keep your website ahead of the competition."
      }
    ]
  }

  // Work Section Data
  const workData = {
    heading: "Our SEO Work",
    slides: [
      { image: "/assets/images/slider/Rectangle 4033.png" },
      { image: "/assets/images/slider/Rectangle 4034.png" },
      { image: "/assets/images/slider/Rectangle 4035.png" },
      { image: "/assets/images/slider/Rectangle 4036.png" }
    ],
    content: {
      title: "SEO Services",
      description: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing top-notch SEO services",
      buttonText: "Explore now",
      buttonLink: "/explore-banner"
    }
  }

  // Testimonials Data
  const testimonialsData = {
    badge: "Client Feedback",
    heading: "What Our",
    headingLight: "Clients Say",
    subHeading: "Discover how businesses are growing faster with our SEO services.",
    testimonials: [
      {
        avatar: '/assets/images/banner/image 11.png',
        name: 'Paul Trueman',
        role: 'EQANTA APP',
        quote: 'Working with PM IT Solution for our SEO needs was an absolute pleasure. Their attention to detail and strategic approach helped us rank on the first page of Google. Highly recommended!',
      },
      {
        avatar: '/assets/images/banner/image 16.png',
        name: 'Courtney Davis',
        role: 'E-COMMERCE OWNER',
        quote: "Amazing SEO work — our organic traffic increased by 200% in just 6 months. Their team is creative, timely and highly skilled.",
      },
      {
        avatar: '/assets/images/banner/image 11.png',
        name: 'Mark Jensen',
        role: 'STARTUP FOUNDER',
        quote: 'Professional and data-driven SEO strategy. Our website visibility improved dramatically and we started getting quality leads.',
      },
    ]
  }

  // FAQ Data
  const faqData = {
    heading: "SEO Questions?",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing SEO services, compliance assistance and targeted support.",
    questions: [
      {
        question: "Q. 1 : What is SEO and why is it important?",
        answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's important because higher rankings lead to more organic traffic, better visibility, and increased credibility for your business."
      },
      {
        question: "Q. 2 : How long does it take to see SEO results?",
        answer: "SEO is a long-term strategy. Typically, you can start seeing initial results within 3-6 months, with significant improvements occurring over 6-12 months depending on competition and current website status."
      },
      {
        question: "Q. 3 : What SEO services do you offer?",
        answer: "We offer comprehensive SEO services including on-page SEO, off-page SEO, technical SEO, local SEO, e-commerce SEO, keyword research, content optimization, and link building."
      },
      {
        question: "Q. 4 : How do you measure SEO success?",
        answer: "We measure SEO success through various metrics including organic traffic growth, keyword rankings, domain authority, conversion rates, and ROI from organic search."
      },
      {
        question: "Q. 5 : Do you provide monthly SEO reports?",
        answer: "Yes, we provide detailed monthly reports that include keyword rankings, traffic analytics, backlink profile, and actionable insights for continuous improvement."
      },
      {
        question: "Q. 6 : Why choose PM IT Solution for SEO?",
        answer: "We have a proven track record of delivering results using ethical SEO practices. Our team of certified professionals uses data-driven strategies tailored to your business goals."
      }
    ]
  }

  // Contact Section Data
  const contactData = {
    heading: "Ready to Boost Your Rankings? Get a quote.",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing SEO services, compliance assistance and targeted support.",
    image: "/assets/images/img-contact.png",
    serviceOptions: [
      { value: 1, label: "SEO Services" },
      { value: 2, label: "On-Page SEO" },
      { value: 3, label: "Off-Page SEO" }
    ],
    budgetOptions: [
      { value: 1, label: "Budget" },
      { value: 2, label: "Project budget (USD)" },
      { value: 3, label: "Select subject" }
    ]
  }

  return (
    <>
      <Layout >
        <section className="tf-live-auction explore tf-filter">
          <div className="tf-container">
            <DigitalMarketing mData={mData} />
            <GrowthSection
              heading={growthData.heading}
              description={growthData.description}
              image={growthData.image}
              features={growthData.features}
            />
            <div className='row gap-2'>
              {services.map((service, i) => (
                <div key={i} className={`position-relative col-lg-4 col-md-6 col-sm-12 overflow-hidden mb-4 rounded-4 ${styles.cardBox}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-4"
                  />
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