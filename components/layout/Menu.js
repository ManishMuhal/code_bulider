'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
                    <Link href="/">Home</Link>
                </li>

                {/* Services Dropdown */}
                <li className={`menu-item menu-item-has-children ${checkParentActive([
                    "/digital-marketing", "/seo-service", "/social-media-marketing", "/google-ads",
                    "/php-devlopment", "/nodejs-devlopment", "/Angularjs-devlopment", "/python-devlopment",
                    "/codlinger-devlopment", "/laravel-web-devlopment", "/ecommerce-website-devlopment", "/reactjs-devlopment",
                    "/ios-development", "/android-development", "/flutter-development", "/react-native-development",
                    "/blockchain-development", "/wordpress-development", "/shopify-development", "/software-development"
                ])}`}>
                    <Link href="#">Services</Link>
                    <ul className="sub-menu">
                        {/* Digital Marketing */}
                        <li className={`menu-item ${checkParentActive(["/digital-marketing", "/seo-service", "/social-media-marketing", "/google-ads"])}`}>
                            <Link href="/digital-marketing">Digital Marketing</Link>
                            <ul className="sub-menu menu-item-has-children right-sub-menu">
                                <li className={`menu-item ${checkCurrentMenuItem("/digital-marketing")}`}><Link href="/digital-marketing">Digital Marketing</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/seo-service")}`}><Link href="/seo-service">SEO Service</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/social-media-marketing")}`}><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/google-ads")}`}><Link href="/google-ads">PPC Services/Google Ads</Link></li>
                            </ul>
                        </li>
                        {/* Web Development */}
                        <li className={`menu-item ${checkParentActive(["/php-devlopment", "/nodejs-devlopment", "/Angularjs-devlopment", "/python-devlopment", "/codlinger-devlopment", "/laravel-web-devlopment", "/reactjs-devlopment"])}`}>
                            <Link href="/php-devlopment">Web Development</Link>
                            <ul className="sub-menu menu-item-has-children right-sub-menu">
                                <li className={`menu-item ${checkCurrentMenuItem("/php-devlopment")}`}><Link href="/php-devlopment">PHP Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/nodejs-devlopment")}`}><Link href="/nodejs-devlopment">Node.js Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/Angularjs-devlopment")}`}><Link href="/Angularjs-devlopment">Angular JS Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/python-devlopment")}`}><Link href="/python-devlopment">Python Web Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/codlinger-devlopment")}`}><Link href="/codlinger-devlopment">CodeIgniter Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/laravel-web-devlopment")}`}><Link href="/laravel-web-devlopment">Laravel Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/reactjs-devlopment")}`}><Link href="/reactjs-devlopment">ReactJS Development</Link></li>
                            </ul>
                        </li>
                        {/* Mobile App Development */}
                        <li className={`menu-item ${checkParentActive(["/ios-development", "/android-development", "/flutter-development", "/react-native-development"])}`}>
                            <Link href="/ios-development">Mobile App Development</Link>
                            <ul className="sub-menu menu-item-has-children right-sub-menu">
                                <li className={`menu-item ${checkCurrentMenuItem("/ios-development")}`}><Link href="/ios-development">iOS Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/android-development")}`}><Link href="/android-development">Android App Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/flutter-development")}`}><Link href="/flutter-development">Flutter App Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/react-native-development")}`}><Link href="/react-native-development">React Native Development</Link></li>
                            </ul>
                        </li>
                        {/* Blockchain Development */}
                        <li className={`menu-item ${checkCurrentMenuItem("/blockchain-development")}`}>
                            <Link href="/blockchain-development">Blockchain Development</Link>
                        </li>
                        {/* Ecommerce Development */}
                        <li className={`menu-item ${checkParentActive(["/ecommerce-website-devlopment", "/wordpress-development", "/shopify-development"])}`}>
                            <Link href="/ecommerce-website-devlopment">Ecommerce Development</Link>
                            <ul className="sub-menu menu-item-has-children right-sub-menu">
                                <li className={`menu-item ${checkCurrentMenuItem("/ecommerce-website-devlopment")}`}><Link href="/ecommerce-website-devlopment">E-Commerce Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/wordpress-development")}`}><Link href="/wordpress-development">WordPress Development</Link></li>
                                <li className={`menu-item ${checkCurrentMenuItem("/shopify-development")}`}><Link href="/shopify-development">Shopify Development</Link></li>
                            </ul>
                        </li>
                        {/* Software Development */}
                        <li className={`menu-item ${checkCurrentMenuItem("/software-development")}`}>
                            <Link href="/software-development">Software Development</Link>
                        </li>
                    </ul>
                </li>

                {/* Hire Professional Dropdown */}
                <li className={`menu-item menu-item-has-children ${checkParentActive(["/hire-php-developer", "/hire-nodejs-developer", "/hire-react-developer", "/hire-seo-expert"])}`}>
                    <Link href="#">Hire Professional</Link>
                    <ul className="sub-menu">
                        <li className={`menu-item ${checkCurrentMenuItem("/hire-php-developer")}`}><Link href="/hire-php-developer">Hire PHP Developer</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/hire-nodejs-developer")}`}><Link href="/hire-nodejs-developer">Hire Node.js Developer</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/hire-react-developer")}`}><Link href="/hire-react-developer">Hire React Developer</Link></li>
                        <li className={`menu-item ${checkCurrentMenuItem("/hire-seo-expert")}`}><Link href="/hire-seo-expert">Hire SEO Expert</Link></li>
                    </ul>
                </li>

                {/* Portfolio */}
                <li className={`menu-item ${checkCurrentMenuItem("/portfolio")}`}>
                    <Link href="/portfolio">Portfolio</Link>
                </li>

                {/* About */}
                <li className={`menu-item ${checkCurrentMenuItem("/about")}`}>
                    <Link href="/about">About</Link>
                </li>
                <li className={`menu-item ${pathname === "/add-NFT" ? "current-menu-item" : ""}`}>
                    <Link href="/add-NFT">Create</Link>
                </li>
                {/* Work */}
                {/* <li className={`menu-item ${checkCurrentMenuItem("/work")}`}>
                    <Link href="/work">Work</Link>
                </li> */}
                <li className={`menu-item ${checkCurrentMenuItem("/blog")}`}>
                    <Link href="/blog">Blog</Link>
                </li>

            </ul>
        </>
    )
}
