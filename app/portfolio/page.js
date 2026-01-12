
import dynamic from 'next/dynamic'

import Layout from "@/components/layout/Layout"
import Contact from '@/components/sections/home/Contact'
import Work from '@/components/sections/services/Work'

export default function Page() {
    // Work Section Data
    const workData = {
        heading: "Our Portfolio",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Featured Projects",
            description: "Discover our successful projects in digital marketing, web development, and mobile applications",
            buttonText: "Contact Us",
            buttonLink: "/connect-us"
        }
    }

    // Contact Section Data
    const contactData = {
        heading: "Want Similar Results? Get a quote.",
        subHeading: "PMIT Solution has delivered 100+ successful projects. Let's discuss how we can help your business grow.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Services" },
            { value: 2, label: "Web Development" },
            { value: 3, label: "Mobile App" }
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
                        <Work data={workData} />
                        <Contact data={contactData} />
                    </div>
                </section>
            </Layout>
        </>
    )
}