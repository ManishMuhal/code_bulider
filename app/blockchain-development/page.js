
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
        title1: ' Blockchain Development',
        title2: 'Company in Jaipur',
        disc: "Build secure, decentralized applications with our expert blockchain development team. We create smart contracts, DApps, tokens, and complete blockchain solutions for enterprises and startups.",
        img: '/assets/images/slider/bg-slider.png'
    }]

    const services = [
        { title: "Smart Contracts", description: "Develop secure, audited smart contracts on Ethereum, BSC, and other chains.", image: "/assets/images/seo/ourseo1.png" },
        { title: "DApp Development", description: "Build decentralized applications with Web3 integration.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Token Development", description: "Create ERC-20, BEP-20, and custom token implementations.", image: "/assets/images/seo/ourseo1.png" },
        { title: "NFT Marketplace", description: "Build NFT marketplaces for digital art, gaming, and collectibles.", image: "/assets/images/seo/ourseo1.png" },
        { title: "DeFi Solutions", description: "Develop decentralized finance protocols and applications.", image: "/assets/images/seo/ourseo1.png" },
        { title: "Wallet Development", description: "Create secure cryptocurrency wallets for web and mobile.", image: "/assets/images/seo/ourseo1.png" },
    ]

    const agencyData = {
        heading: "Best Blockchain Development Agency",
        description: "PM IT Solution blockchain company in Jaipur creates secure decentralized solutions. We specialize in Ethereum, Solana, Polygon, and other blockchain platforms to build your Web3 future.",
        image: "/assets/images/slider/slider-5.png",
        services: [
            { icon: "/assets/images/svg/icon-create-5.svg", title: "Smart Contract Audits", content: "Security audits to ensure your contracts are safe from vulnerabilities.", link: "#" },
            { icon: "/assets/images/svg/icon-create-6.svg", title: "Web3 Integration", content: "Connect your applications to blockchain with Web3.js and ethers.js.", link: "#" },
            { icon: "/assets/images/svg/icon-create-3.svg", title: "Multi-Chain Support", content: "Deploy on Ethereum, BSC, Polygon, Solana, and other networks.", link: "#" }
        ]
    }

    const chooseData = {
        heading: "Why Choose Us for Blockchain",
        subHeading: "PMIT Solution delivers secure, scalable blockchain solutions for the decentralized future.",
        image: "/assets/images/banner/thumb-banner2.png",
        accordions: [
            { title: "Expert Blockchain Developers", content: "Our team has deep experience with Solidity, Rust, and blockchain architectures." },
            { title: "Security First", content: "We follow best practices and conduct thorough audits to ensure smart contract security." },
            { title: "Multi-Chain Expertise", content: "We work with Ethereum, BSC, Polygon, Solana, and emerging blockchains." },
            { title: "End-to-End Solutions", content: "From smart contracts to frontend DApps, we handle complete blockchain projects." }
        ]
    }

    const workData = {
        heading: "Our Blockchain Work", slides: [{ image: "/assets/images/slider/Rectangle 4033.png" }, { image: "/assets/images/slider/Rectangle 4034.png" }, { image: "/assets/images/slider/Rectangle 4035.png" }, { image: "/assets/images/slider/Rectangle 4036.png" }],
        content: { title: "Blockchain Development", description: "PMIT Solution delivers secure decentralized applications", buttonText: "Explore now", buttonLink: "/portfolio" }
    }

    const testimonialsData = {
        badge: "Client Feedback", heading: "What Our", headingLight: "Clients Say", subHeading: "Discover how businesses are succeeding with our blockchain services.",
        testimonials: [
            { avatar: '/assets/images/banner/image 11.png', name: 'Paul Trueman', role: 'CRYPTO STARTUP', quote: 'PM IT Solution built our NFT marketplace. It handles thousands of transactions daily with perfect security!' },
            { avatar: '/assets/images/banner/image 16.png', name: 'Courtney Davis', role: 'DEFI PROJECT', quote: "Their blockchain team developed our DeFi protocol. The smart contracts passed all security audits." },
            { avatar: '/assets/images/banner/image 11.png', name: 'Mark Jensen', role: 'ENTERPRISE CLIENT', quote: 'Professional developers who built our supply chain tracking on blockchain. Transparency increased 100%.' }
        ]
    }

    const faqData = {
        heading: "Blockchain Development Questions?", subHeading: "PMIT Solution provides expert blockchain development services.",
        questions: [
            { question: "Q. 1 : Which blockchains do you work with?", answer: "We work with Ethereum, Binance Smart Chain, Polygon, Solana, Avalanche, and private blockchains like Hyperledger." },
            { question: "Q. 2 : Are your smart contracts secure?", answer: "We follow best security practices, conduct internal audits, and recommend third-party audits for high-value contracts." },
            { question: "Q. 3 : Can you build NFT marketplaces?", answer: "Yes, we build complete NFT marketplaces with minting, buying, selling, and auction features." },
            { question: "Q. 4 : What about gas optimization?", answer: "We optimize smart contracts for minimal gas usage, reducing transaction costs for your users." },
            { question: "Q. 5 : Do you support token launches?", answer: "Yes, we create tokens, handle tokenomics, develop vesting contracts, and support launch strategies." },
            { question: "Q. 6 : Can you integrate with existing systems?", answer: "Yes, we connect blockchain solutions with your existing web applications and databases." }
        ]
    }

    const contactData = {
        heading: "Ready to Build on Blockchain? Get a quote.", subHeading: "PMIT Solution delivers secure blockchain solutions.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [{ value: 1, label: "Blockchain Development" }, { value: 2, label: "Smart Contracts" }, { value: 3, label: "NFT Marketplace" }],
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
