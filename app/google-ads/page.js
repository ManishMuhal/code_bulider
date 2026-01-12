
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

export default function Page() {
  // Hero Section Data
  const mData = [
    {
      title1: 'Best Google AdWords',
      title2: 'Company in Jaipur',
      disc: "Digital marketing is crucial for businesses in today's highly competitive market.We understand the importance of utilizing the Internet and digital channels to establish connections between companies and potential customers.Our primary objective is to help businesses grow by implementing effective digital marketing solution strategies that generate more leads and increase brand visibility.",
      img: '/assets/images/elipse.png'
    }
  ]

  // Services Cards Data
  const services = [
    {
      title: "Search Ads",
      description: "Show your business on top of Google search results with high-performing text ads.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Display Ads",
      description: "Reach potential customers across millions of websites and apps with visual display ads.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Shopping Ads",
      description: "Boost your eCommerce sales by showcasing products directly in Google search results.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Remarketing Ads",
      description: "Reconnect with visitors who have previously interacted with your website to increase conversions.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Video Ads",
      description: "Engage audiences through creative and impactful video advertising on YouTube.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Application Ads",
      description: "Promote your mobile application and increase downloads through targeted app campaigns.",
      image: "/assets/images/seo/ourseo1.png",
    },
  ]

  // Agency Section Data
  const agencyData = {
    heading: "Best Google Ads & PPC Agency",
    description: "To expand, the best money to be spent would be on targeted advertising. PM IT Solution Google Ads company in Jaipur is a group of certified professionals who know precisely how to maximize your ad spend ROI. We're here to provide you best PPC services in generating quality leads and driving conversions through strategic paid campaigns.",
    image: "/assets/images/slider/slider-5.png",
    services: [
      {
        icon: "/assets/images/svg/icon-create-5.svg",
        title: "Campaign Strategy",
        content: "Develop data-driven campaign strategies that target the right audience at the right time for maximum conversions.",
        link: "#"
      },
      {
        icon: "/assets/images/svg/icon-create-6.svg",
        title: "Ad Optimization",
        content: "Continuously optimize ad copy, bidding, and targeting to improve quality scores and reduce cost per click.",
        link: "#"
      },
      {
        icon: "/assets/images/svg/icon-create-3.svg",
        title: "Conversion Tracking",
        content: "Set up comprehensive tracking to measure ROI and make data-driven decisions for campaign improvement.",
        link: "#"
      }
    ]
  }

  // Choose Us Section Data
  const chooseData = {
    heading: "Why Choose Us for Google Ads",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing PPC services, compliance assistance and targeted support.",
    image: "/assets/images/banner/thumb-banner2.png",
    accordions: [
      {
        title: "Google Certified Partners",
        content: "Our team consists of Google Ads certified professionals who stay updated with the latest platform changes and best practices."
      },
      {
        title: "ROI-Focused Approach",
        content: "We focus on delivering measurable results. Every campaign is optimized for maximum return on your advertising investment."
      },
      {
        title: "Transparent Reporting",
        content: "Get detailed reports on campaign performance, spending, and results. We believe in complete transparency with our clients."
      },
      {
        title: "A/B Testing & Optimization",
        content: "We continuously test ad variations, landing pages, and targeting options to find the winning combinations for your business."
      }
    ]
  }

  // Work Section Data
  const workData = {
    heading: "Our PPC Work",
    slides: [
      { image: "/assets/images/slider/Rectangle 4033.png" },
      { image: "/assets/images/slider/Rectangle 4034.png" },
      { image: "/assets/images/slider/Rectangle 4035.png" },
      { image: "/assets/images/slider/Rectangle 4036.png" }
    ],
    content: {
      title: "Google Ads Services",
      description: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing PPC services",
      buttonText: "Explore now",
      buttonLink: "/explore-banner"
    }
  }

  // Testimonials Data
  const testimonialsData = {
    badge: "Client Feedback",
    heading: "What Our",
    headingLight: "Clients Say",
    subHeading: "Discover how businesses are growing faster with our Google Ads & PPC services.",
    testimonials: [
      {
        avatar: '/assets/images/banner/image 11.png',
        name: 'Paul Trueman',
        role: 'EQANTA APP',
        quote: 'PM IT Solution transformed our PPC campaigns. Our cost per acquisition dropped by 40% while conversions increased significantly. Highly recommended!',
      },
      {
        avatar: '/assets/images/banner/image 16.png',
        name: 'Courtney Davis',
        role: 'E-COMMERCE OWNER',
        quote: "Their Google Shopping campaigns drove a 300% increase in product sales. Their team really understands how to maximize ad spend.",
      },
      {
        avatar: '/assets/images/banner/image 11.png',
        name: 'Mark Jensen',
        role: 'SERVICE BUSINESS',
        quote: 'Professional PPC management that delivers results. We now get consistent quality leads from our Google Ads campaigns.',
      },
    ]
  }

  // FAQ Data
  const faqData = {
    heading: "Google Ads Questions?",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing PPC services and targeted support.",
    questions: [
      {
        question: "Q. 1 : What is Google Ads and how does it work?",
        answer: "Google Ads is a pay-per-click advertising platform where you only pay when someone clicks on your ad. Ads appear in Google search results, on websites, YouTube, and mobile apps based on keywords and audience targeting."
      },
      {
        question: "Q. 2 : How much should I budget for Google Ads?",
        answer: "Budget depends on your industry, competition, and goals. We help determine the optimal budget based on your target cost per acquisition and expected returns. Most businesses start with ₹20,000-50,000/month."
      },
      {
        question: "Q. 3 : How quickly can I see results from Google Ads?",
        answer: "Unlike SEO, Google Ads can deliver immediate results. You can start seeing traffic and leads within hours of launching a campaign, with optimization improving results over 2-4 weeks."
      },
      {
        question: "Q. 4 : Do you manage the entire Google Ads account?",
        answer: "Yes, we provide complete account management including campaign setup, keyword research, ad creation, bid management, optimization, and detailed performance reporting."
      },
      {
        question: "Q. 5 : What's the difference between Google Ads and SEO?",
        answer: "Google Ads provides immediate visibility through paid placements, while SEO focuses on organic rankings over time. Most businesses benefit from using both strategies together."
      },
      {
        question: "Q. 6 : How do you measure Google Ads success?",
        answer: "We track metrics like click-through rate, cost per click, conversion rate, cost per acquisition, and overall ROI. Monthly reports provide complete visibility into campaign performance."
      }
    ]
  }

  // Contact Section Data
  const contactData = {
    heading: "Ready to Scale with Google Ads? Get a quote.",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing PPC services and targeted support.",
    image: "/assets/images/img-contact.png",
    serviceOptions: [
      { value: 1, label: "Google Ads Services" },
      { value: 2, label: "Search Ads" },
      { value: 3, label: "Display Ads" }
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