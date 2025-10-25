import { NAV_ITEMS } from '@/lib/constants'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-light text-xl'>
        {NAV_ITEMS.map((item)=>(
            <li key={item.label}>
                {item.external && item.href && <Link href={item.href}>{item.label}</Link>}
                {!item.external && item.href && <Link href={item.href}>{item.label}</Link>}
            </li>
        ))}
    </ul>
  )
}

export default NavItems