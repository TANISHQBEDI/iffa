"use client"

import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNavItems from "@/components/header/MobileNavItems";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image
                        src="/icon0.svg"
                        alt="IFFA Awards Logo"
                        width={150}
                        height={50}
                        className="h-14 w-auto cursor-pointer "
                    />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems/>
                </nav>
                <nav className="block sm:hidden">
                    <MobileNavItems/>
                </nav>
            </div>
        </header>
    )
}

export default Header