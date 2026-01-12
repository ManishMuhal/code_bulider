
import dynamic from 'next/dynamic'

import Layout from "@/components/layout/Layout"
import Contact from '@/components/sections/home/Contact'
import Work from '@/components/sections/services/Work'

export default function Page() {
    // Work Section Data
    const workData = {
        heading: "Our Work",
        slides: [
            { image: "/assets/images/slider/Rectangle 4033.png" },
            { image: "/assets/images/slider/Rectangle 4034.png" },
            { image: "/assets/images/slider/Rectangle 4035.png" },
            { image: "/assets/images/slider/Rectangle 4036.png" }
        ],
        content: {
            title: "Our Projects",
            description: "Explore our portfolio of successful projects across digital marketing, web development, and IT solutions",
            buttonText: "View Portfolio",
            buttonLink: "/portfolio"
        }
    }

    // Contact Section Data
    const contactData = {
        heading: "Have a Project in Mind? Get a quote.",
        subHeading: "PMIT Solution is ready to bring your ideas to life. Let's discuss your project requirements.",
        image: "/assets/images/img-contact.png",
        serviceOptions: [
            { value: 1, label: "Services" },
            { value: 2, label: "Web Development" },
            { value: 3, label: "Digital Marketing" }
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