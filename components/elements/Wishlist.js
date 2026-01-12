
'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Wishlist() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className={isToggled ? "wish-list active" : " wish-list"} onClick={handleToggle}>
                <a className="heart-icon" />
            </div>
        </>
    )
}
