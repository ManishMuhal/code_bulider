'use client'
// ThemeSwitch.js
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "is_dark"
    })

    useEffect(() => {
        document.body.classList.remove("is_dark", "is_light")
        document.body.classList.add(theme)
        localStorage.setItem("theme", theme)
        updateImageSource(theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "is_dark" ? "is_light" : "is_dark"))
    }

    const updateImageSource = (currentTheme) => {
        const imgMode = document.getElementById("img-mode")
        const logoHeader = document.getElementById("logo_header")
        const logoFooter = document.getElementById("logo_footer")

        if (imgMode) {
            imgMode.src = `/assets/images/icon/${currentTheme === "is_dark" ? "sun" : "moon"}.png`
        }

        if (logoHeader) {
            logoHeader.src = currentTheme === "is_dark" ? "/assets/images/logo/logo_dark.png" : "/assets/images/logo/logo.png"
        }

        if (logoFooter) {
            logoFooter.src = currentTheme === "is_dark" ? "/assets/images/logo/logo_dark.png" : "/assets/images/logo/logo.png"
        }
    }

    return (
        <a className="mode-switch" onClick={toggleTheme}>
            <img id="img-mode" src={`/assets/images/icon/${theme === "is_dark" ? "sun" : "moon"}.png`} alt="Theme Switch" />
        </a>
    )
}

