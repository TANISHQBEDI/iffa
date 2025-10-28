import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Menu} from "lucide-react";
import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";

const MobileNavItems = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {
                        NAV_ITEMS.map((item)=>(
                            <Link key={item.label} href={item.href}>
                                <DropdownMenuItem >
                                    {item.label}
                                </DropdownMenuItem>
                            </Link>

                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default MobileNavItems;