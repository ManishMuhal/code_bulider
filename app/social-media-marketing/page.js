
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
      title1: ' Social Media Marketing',
      title2: 'Company in Jaipur',
      disc: "Digital marketing is crucial for businesses in today's highly competitive market.We understand the importance of utilizing the Internet and digital channels to establish connections between companies and potential customers.Our primary objective is to help businesses grow by implementing effective digital marketing solution strategies that generate more leads and increase brand visibility.",
      img: '/assets/images/happyWmn.png'
    }
  ]

  // Services Cards Data
  const services = [
    {
      title: "Facebook Marketing",
      description: "We create engaging Facebook campaigns that increase your brand reach and engagement.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Instagram Marketing",
      description: "We perform in-depth audience research and optimize your Instagram for maximum visibility.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "YouTube Marketing",
      description: "We create engaging video content and optimize your YouTube channel for growth.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Increased Brand Awareness",
      description: "Build brand recognition through strategic social media presence across platforms.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "Higher Conversion Rates",
      description: "Convert followers into customers with targeted social media campaigns.",
      image: "/assets/images/seo/ourseo1.png",
    },
    {
      title: "More Brand Authority",
      description: "Establish your brand as an industry leader through consistent social engagement.",
      image: "/assets/images/seo/ourseo1.png",
    },
  ]

  // Agency Section Data
  const agencyData = {
    heading: "Best Social Media Marketing Agency",
    description: "To expand, the best money to be spent would be on social media marketing. PM IT Solution social media company in Jaipur is a group of young, creative, enthusiastic and brilliant people who know precisely what a brand needs on social platforms. We're here to provide you best social media services in establishing your company's name and reputation via strategic content and engagement.",
    image: "/assets/images/slider/slider-5.png",
    services: [
      {
        icon: "/assets/images/svg/icon-create-5.svg",
        title: "Social Media Strategy",
        content: "Develop comprehensive strategies tailored to your brand goals and target audience across all platforms.",
        link: "#"
      },
      {
        icon: "/assets/images/svg/icon-create-6.svg",
        title: "Content Creation",
        content: "Create engaging posts, stories, reels, and videos that resonate with your audience and drive engagement.",
        link: "#"
      },
      {
        icon: "/assets/images/svg/icon-create-3.svg",
        title: "Community Management",
        content: "Build and nurture your online community through active engagement and responsive communication.",
        link: "#"
      }
    ]
  }

  // Choose Us Section Data
  const chooseData = {
    heading: "Why Choose Us for Social Media",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing social media marketing services, compliance assistance and targeted support.",
    image: "/assets/images/banner/thumb-banner2.png",
    accordions: [
      {
        title: "Creative Content Team",
        content: "Our creative team produces engaging content that captures attention and drives meaningful interactions with your target audience."
      },
      {
        title: "Data-Driven Approach",
        content: "We use analytics and insights to optimize campaigns, ensuring maximum ROI and continuous improvement in performance."
      },
      {
        title: "Multi-Platform Expertise",
        content: "We have expertise across all major platforms including Facebook, Instagram, LinkedIn, Twitter, YouTube, and emerging platforms."
      },
      {
        title: "24/7 Community Support",
        content: "Our team monitors and engages with your community around the clock, ensuring prompt responses and active brand presence."
      }
    ]
  }

  // Work Section Data
  const workData = {
    heading: "Our Social Media Work",
    slides: [
      { image: "/assets/images/slider/Rectangle 4033.png" },
      { image: "/assets/images/slider/Rectangle 4034.png" },
      { image: "/assets/images/slider/Rectangle 4035.png" },
      { image: "/assets/images/slider/Rectangle 4036.png" }
    ],
    content: {
      title: "Social Media Marketing",
      description: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing social media services",
      buttonText: "Explore now",
      buttonLink: "/explore-banner"
    }
  }

  // Testimonials Data
  const testimonialsData = {
    badge: "Client Feedback",
    heading: "What Our",
    headingLight: "Clients Say",
    subHeading: "Discover how businesses are growing faster with our social media marketing services.",
    testimonials: [
      {
        avatar: '/assets/images/banner/image 11.png',
        name: 'Paul Trueman',
        role: 'EQANTA APP',
        quote: 'Working with PM IT Solution for our social media was amazing. Their creative content helped us gain 50K followers in just 3 months. Highly recommended!',
      },
      {
        avatar: '/assets/images/banner/image 16.png',
        name: 'Courtney Davis',
        role: 'FASHION BRAND',
        quote: "Their Instagram strategy was game-changing. Our engagement rate tripled and we saw a significant increase in website traffic from social media.",
      },
      {
        avatar: '/assets/images/banner/image 11.png',
        name: 'Mark Jensen',
        role: 'RESTAURANT OWNER',
        quote: 'Professional and creative team. They transformed our social media presence and now we get regular customers through our social channels.',
      },
    ]
  }

  // FAQ Data
  const faqData = {
    heading: "Social Media Questions?",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing social media marketing services and targeted support.",
    questions: [
      {
        question: "Q. 1 : Why is social media marketing important?",
        answer: "Social media marketing helps businesses connect with their audience, build brand awareness, drive website traffic, and generate leads. With billions of users on social platforms, it's essential for modern businesses."
      },
      {
        question: "Q. 2 : Which social media platforms should my business use?",
        answer: "The best platforms depend on your target audience. B2B businesses often thrive on LinkedIn, while B2C brands do well on Instagram and Facebook. We help identify the right platforms for your business."
      },
      {
        question: "Q. 3 : How often should we post on social media?",
        answer: "Posting frequency varies by platform. Generally, we recommend 1-2 posts daily on Instagram, 1 post daily on Facebook, and 3-5 tweets daily. Consistency is more important than frequency."
      },
      {
        question: "Q. 4 : Do you create content for social media?",
        answer: "Yes, we provide complete content creation services including graphics, videos, reels, stories, and copy. Our creative team ensures all content aligns with your brand voice and goals."
      },
      {
        question: "Q. 5 : How do you measure social media success?",
        answer: "We track metrics like engagement rate, reach, impressions, follower growth, website clicks, and conversions. Monthly reports show the impact of our social media efforts."
      },
      {
        question: "Q. 6 : Can you run paid social media ads?",
        answer: "Yes, we manage paid advertising campaigns on Facebook, Instagram, LinkedIn, and other platforms. We optimize ads for maximum ROI and provide detailed performance reports."
      }
    ]
  }

  // Contact Section Data
  const contactData = {
    heading: "Ready to Grow Your Social Presence? Get a quote.",
    subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing social media marketing services and targeted support.",
    image: "/assets/images/img-contact.png",
    serviceOptions: [
      { value: 1, label: "Social Media Services" },
      { value: 2, label: "Instagram Marketing" },
      { value: 3, label: "Facebook Marketing" }
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