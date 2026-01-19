'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Faq from '@/components/sections/services/Faq'

// Default data for the Testimonials component
const defaultData = {
  badge: "Client Feedback",
  heading: "Hear What Our Customers",
  headingLight: " Say About Us",
  subHeading: "Discover how businesses are growing faster with our IT solutions & services.",
  testimonials: [
    {
      avatar: '/assets/images/banner/image 11.png',
      name: 'Manish Muhal',
      role: 'EQANTA APP',
      quote: '“Code Builder Technology did an excellent job with our website and SEO. The team delivered on time and continued to provide great support after launch.”',
    },
    {
      avatar: '/assets/images/banner/image 16.png',
      name: 'Ajay Joshi',
      role: 'UX LEAD',
      quote: "“I wanted to hire app developers in India that could build me a beautiful application that my users would love. CBTech came through with ease.”",
    },
    {
      avatar: '/assets/images/banner/image 11.png',
      name: 'Smriti Sharma',
      role: 'PRODUCT MANAGER',
      quote: '“They helped me with Google Ads to generate more leads for my business. Again, they came through when I needed help keeping my costs within budget.”',
    },
    {
      avatar: '/assets/images/banner/image 11.png',
      name: 'Jay Shetty',
      role: 'PRODUCT MANAGER',
      quote: '“They’re one of the best professional software developers in India that get it done. Great communication and very dependable.”',
    },
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

export default function Testimonials({ data = defaultData }) {
  // Merge passed data with defaults to ensure all properties exist
  const testimonialData = { ...defaultData, ...data }
  const testimonials = testimonialData.testimonials

  const mainSwiperOptions = {
    loop: true,
    spaceBetween: 30,
    navigation: { nextEl: '.t-next', prevEl: '.t-prev' },
    modules: [Navigation],
    className: 'testimonial-swiper',
  }

  return (
    <section className="py-5 position-relative overflow-hidden">
      {/* dreamy gradient backdrop */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          pointerEvents: 'none',
          background:
            'radial-gradient(700px 400px at 15% 0%, rgba(255,152,0,.10) 0, rgba(255,152,0,0) 60%), radial-gradient(800px 500px at 90% 100%, rgba(99,102,241,.12) 0, rgba(99,102,241,0) 60%)',
          filter: 'saturate(120%)',
        }}
      />
      <div className="container position-relative">
        {/* heading */}
        <div className="text-center mb-5">
          <div
            className="badge rounded-pill text-uppercase px-3 py-2 mb-2"
            style={{
              background: 'rgba(33,150,243,.12)',
              color: '#2196f3',
              letterSpacing: '.06em',
            }}
          >
            {testimonialData.badge}
          </div>
          <h2 className="fw-bold mb-1" style={{ fontSize: 44, lineHeight: 1.15 }}>
            {testimonialData.heading} <span className="fw-light">{testimonialData.headingLight}</span>
          </h2>
          <p className="text-muted mb-0" style={{ fontSize: 18 }}>
            {testimonialData.subHeading}
          </p>
        </div>

        {/* glass card container with navigation buttons */}
        <div className="mx-auto position-relative" style={{ maxWidth: 980 }}>
          <div
            className="rounded-4 shadow-lg p-4 p-md-5 mx-auto"
            style={{
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,.6)',
            }}
          >
            {/* subtle top shimmer */}
            <div
              className="position-absolute start-50 translate-middle-x"
              style={{
                top: -22,
                width: 140,
                height: 44,
                background:
                  'linear-gradient(90deg, rgba(255,255,255,.0), rgba(255,255,255,.8), rgba(255,255,255,0))',
                borderRadius: 999,
                filter: 'blur(20px)',
              }}
            />
            {/* slider */}
            <div className="position-relative">
              <Swiper {...mainSwiperOptions}>
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="d-flex flex-column align-items-center text-center">
                      {/* avatars trio */}
                      <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                        <img
                          src={testimonials[(i + testimonials.length - 1) % testimonials.length].avatar}
                          alt="left avatar"
                          className="rounded-circle"
                          style={{
                            width: 56,
                            height: 56,
                            objectFit: 'cover',
                            opacity: 0.75,
                          }}
                        />
                        <span
                          className="rounded-circle position-relative"
                          style={{
                            width: 96,
                            height: 96,
                            display: 'inline-block',
                            padding: 4,
                            background:
                              'conic-gradient(from 220deg, #ff9800, #ffc46b, #ffdca8, #ff9800)',
                          }}
                        >
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="rounded-circle w-100 h-100"
                            style={{
                              objectFit: 'cover',
                              border: '4px solid white',
                              boxShadow: '0 10px 30px rgba(255,152,0,.25)',
                            }}
                          />
                        </span>
                        <img
                          src={testimonials[(i + 1) % testimonials.length].avatar}
                          alt="right avatar"
                          className="rounded-circle"
                          style={{
                            width: 56,
                            height: 56,
                            objectFit: 'cover',
                            opacity: 0.75,
                          }}
                        />
                      </div>

                      {/* name + role */}
                      <div className="mb-2">
                        <div className="fw-semibold" style={{ fontSize: 18 }}>
                          {t.name}
                        </div>
                        <div className="text-muted small">{t.role}</div>
                      </div>

                      {/* quote text */}
                      <p
                        className="mx-auto mb-0 text-secondary"
                        style={{ maxWidth: 760, lineHeight: 1.8, fontSize: 16 }}
                      >
                        {t.quote}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div style={{marginTop:'12%'}} className="tf-container">

          <Faq data={faqData} />
        </div>
        {/* bottom glow accent */}
        <div
          className="mx-auto mt-5 rounded-pill"
          style={{
            width: 240,
            height: 18,
            background:
              'radial-gradient(60% 120% at 50% 0%, rgba(255,152,0,.35), rgba(255,152,0,0))',
            filter: 'blur(10px)',
          }}
        />
      </div>

      {/* tiny keyframes */}
      <style jsx>{`
                @keyframes floatY {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-4px);
                    }
                }
            `}</style>

    </section>
  )
}