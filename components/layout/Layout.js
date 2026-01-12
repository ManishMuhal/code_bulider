'use client'

import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, hAbsolate, breadcrumbHeading }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <><div id="top" />
            <div id="wrapper" className="wrapper-style">
                <div id="page" className="clearfix">
                    {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} hAbsolate={hAbsolate} />}
                    {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} hAbsolate={hAbsolate} /> : null}
                    {headerStyle == 2 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} hAbsolate={hAbsolate} /> : null}

                    

                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbHeading={breadcrumbHeading} />}

                    {children}

                    {!footerStyle && < Footer1 />}
                    {footerStyle == 1 ? < Footer1 /> : null}
                    {footerStyle == 2 ? < Footer2 /> : null}
                </div>
            </div>

            <BackToTop target="#top" />
        </>
    )
}
