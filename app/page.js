import Layout from "@/components/layout/Layout"

import Slider1 from "@/components/sections/home/Slider1"
import BannerCreate1 from "@/components/sections/home/BannerCreate1"
import Aboutcompany from "@/components/sections/home/Aboutcompany"
import OurServices from "@/components/sections/home/OurServices"
import Servess from "@/components/sections/home/Servess"
import Choose from "@/components/sections/home/Choose"
import Explore from "@/components/sections/home/Explore"
import Contact from "@/components/sections/home/Contact"
import TechStack from "@/components/sections/home/TechStack"
import Testimonials from "@/components/sections/services/Testimonials"
import Faq from "@/components/sections/home/Faq"

export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} hAbsolate>
                <Slider1 />
                <Aboutcompany />
                <OurServices />
                <BannerCreate1 />    
                <Servess />
                <Choose />
                <Explore />
                <TechStack />
                <Testimonials/>
                <Faq/>
                <Contact />


            </Layout>
        </>
    )
}