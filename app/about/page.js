
import dynamic from 'next/dynamic'

import Layout from "@/components/layout/Layout"
import Contact from '@/components/sections/home/Contact'
import Work from '@/components/sections/services/Work'

export default function Page() {
    // Work Section Data
    const workData = {
        heading: "About Us",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "PM IT Solution",
            description: "PMIT Solution is a leading digital marketing and web development company in Jaipur, serving clients across India and globally",
            buttonText: "Explore Services",
            buttonLink: "/digital-marketing"
        }
    }

    // Contact Section Data
    const contactData = {
        heading: "Let's Work Together! Get a quote.",
        subHeading: "PMIT Solution is serving a vast portfolio of clients in different sectors by providing digital services, web development, and IT solutions.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Services" },
            { value: 2, label: "Digital Marketing" },
            { value: 3, label: "Web Development" }
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