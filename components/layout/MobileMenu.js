'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
  const [isActive, setIsActive] = useState(null)
  const [isSubActive, setIsSubActive] = useState(null)
  const pathname = usePathname()
  const [currentMenuItem, setCurrentMenuItem] = useState("")

  useEffect(() => {
    setCurrentMenuItem(pathname)
  }, [pathname])

  const handleClick = (key) => {
    setIsActive(prev => (prev === key ? null : key))
    setIsSubActive(null)
  }

  const handleSubClick = (key) => {
    setIsSubActive(prev => (prev === key ? null : key))
  }

  const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-item" : ""
  const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

  return (
    <nav id="main-nav-mobi" className="main-nav" style={{ display: isMobileMenu ? "block" : "none" }}>
      <ul id="menu-primary-menu" className="menu">
        <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
          <Link href="/">Home</Link>
        </li>

        {/* Services */}
        <li className={`menu-item menu-item-has-children ${checkParentActive([
          "/digital-marketing", "/seo-service", "/social-media-marketing", "/google-ads",
          "/php-devlopment", "/nodejs-devlopment", "/ios-development", "/android-development"
        ])}`}>
          <Link href="#">Services</Link>
          <span className={`arrow ${isActive === 1 ? "active" : ""}`} onClick={() => handleClick(1)} />
          <ul className="sub-menu" style={{ display: isActive === 1 ? "block" : "none" }}>
            {/* Digital Marketing */}
            <li className="menu-item menu-item-has-children">
              <Link href="/digital-marketing">Digital Marketing</Link>
              <span className={`arrow ${isSubActive === 'dm' ? "active" : ""}`} onClick={() => handleSubClick('dm')} />
              <ul className="sub-menu" style={{ display: isSubActive === 'dm' ? "block" : "none" }}>
                <li className={checkCurrentMenuItem("/digital-marketing")}><Link href="/digital-marketing">Digital Marketing</Link></li>
                <li className={checkCurrentMenuItem("/seo-service")}><Link href="/seo-service">SEO Service</Link></li>
                <li className={checkCurrentMenuItem("/social-media-marketing")}><Link href="/social-media-marketing">Social Media Marketing</Link></li>
                <li className={checkCurrentMenuItem("/google-ads")}><Link href="/google-ads">PPC Services/Google Ads</Link></li>
              </ul>
            </li>
            {/* Web Development */}
            <li className="menu-item menu-item-has-children">
              <Link href="/php-devlopment">Web Development</Link>
              <span className={`arrow ${isSubActive === 'wd' ? "active" : ""}`} onClick={() => handleSubClick('wd')} />
              <ul className="sub-menu" style={{ display: isSubActive === 'wd' ? "block" : "none" }}>
                <li className={checkCurrentMenuItem("/php-devlopment")}><Link href="/php-devlopment">PHP Development</Link></li>
                <li className={checkCurrentMenuItem("/nodejs-devlopment")}><Link href="/nodejs-devlopment">Node.js Development</Link></li>
                <li className={checkCurrentMenuItem("/Angularjs-devlopment")}><Link href="/Angularjs-devlopment">Angular JS Development</Link></li>
                <li className={checkCurrentMenuItem("/python-devlopment")}><Link href="/python-devlopment">Python Development</Link></li>
                <li className={checkCurrentMenuItem("/laravel-web-devlopment")}><Link href="/laravel-web-devlopment">Laravel Development</Link></li>
                <li className={checkCurrentMenuItem("/reactjs-devlopment")}><Link href="/reactjs-devlopment">ReactJS Development</Link></li>
              </ul>
            </li>
            {/* Mobile App Development */}
            <li className="menu-item menu-item-has-children">
              <Link href="/ios-development">Mobile App Development</Link>
              <span className={`arrow ${isSubActive === 'ma' ? "active" : ""}`} onClick={() => handleSubClick('ma')} />
              <ul className="sub-menu" style={{ display: isSubActive === 'ma' ? "block" : "none" }}>
                <li className={checkCurrentMenuItem("/ios-development")}><Link href="/ios-development">iOS Development</Link></li>
                <li className={checkCurrentMenuItem("/android-development")}><Link href="/android-development">Android Development</Link></li>
                <li className={checkCurrentMenuItem("/flutter-development")}><Link href="/flutter-development">Flutter Development</Link></li>
                <li className={checkCurrentMenuItem("/react-native-development")}><Link href="/react-native-development">React Native Development</Link></li>
              </ul>
            </li>
            {/* Blockchain */}
            <li className={`menu-item ${checkCurrentMenuItem("/blockchain-development")}`}><Link href="/blockchain-development">Blockchain Development</Link></li>
            {/* Ecommerce */}
            <li className="menu-item menu-item-has-children">
              <Link href="/ecommerce-website-devlopment">Ecommerce Development</Link>
              <span className={`arrow ${isSubActive === 'ec' ? "active" : ""}`} onClick={() => handleSubClick('ec')} />
              <ul className="sub-menu" style={{ display: isSubActive === 'ec' ? "block" : "none" }}>
                <li className={checkCurrentMenuItem("/ecommerce-website-devlopment")}><Link href="/ecommerce-website-devlopment">E-Commerce Development</Link></li>
                <li className={checkCurrentMenuItem("/wordpress-development")}><Link href="/wordpress-development">WordPress Development</Link></li>
                <li className={checkCurrentMenuItem("/shopify-development")}><Link href="/shopify-development">Shopify Development</Link></li>
              </ul>
            </li>
            {/* Software */}
            <li className={`menu-item ${checkCurrentMenuItem("/software-development")}`}><Link href="/software-development">Software Development</Link></li>
          </ul>
        </li>

        {/* Hire Professional */}
        <li className={`menu-item menu-item-has-children ${checkParentActive(["/hire-php-developer", "/hire-nodejs-developer", "/hire-react-developer", "/hire-seo-expert"])}`}>
          <Link href="#">Hire Professional</Link>
          <span className={`arrow ${isActive === 2 ? "active" : ""}`} onClick={() => handleClick(2)} />
          <ul className="sub-menu" style={{ display: isActive === 2 ? "block" : "none" }}>
            <li className={checkCurrentMenuItem("/hire-php-developer")}><Link href="/hire-php-developer">Hire PHP Developer</Link></li>
            <li className={checkCurrentMenuItem("/hire-nodejs-developer")}><Link href="/hire-nodejs-developer">Hire Node.js Developer</Link></li>
            <li className={checkCurrentMenuItem("/hire-react-developer")}><Link href="/hire-react-developer">Hire React Developer</Link></li>
            <li className={checkCurrentMenuItem("/hire-seo-expert")}><Link href="/hire-seo-expert">Hire SEO Expert</Link></li>
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

        {/* Work */}
        <li className={`menu-item ${checkCurrentMenuItem("/work")}`}>
          <Link href="/work">Work</Link>
        </li>
      </ul>
    </nav>
  )
}
