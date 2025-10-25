"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

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
      </div>
    </header>
  )
}

export default Header