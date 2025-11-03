import {EVENT_SECTIONS, NAV_ITEMS} from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const NavItems = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        NAV_ITEMS.map((item) => (
                            <NavigationMenuItem key={item.label} asChild>

                                <NavigationMenuLink asChild
                                className='font-light text-xl md:text-2xl'
                                >
                                    <Link href={item.href}>{item.label}</Link>

                                </NavigationMenuLink>

                            </NavigationMenuItem>
                        ))
                    }

                </NavigationMenuList>
            </NavigationMenu>
        </>

    )
}

export default NavItems