import React from 'react';
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const sizeClassMap: Record<NonNullable<DisplayCardProps['size']>, string> = {
    sm: 'w-[150px] sm:w-[180px] md:w-[220px] aspect-[2/3]',
    md: 'w-[200px] sm:w-[250px] md:w-[350px] aspect-[2/3]',
    lg: 'w-[260px] sm:w-[320px] md:w-[420px] aspect-[2/3]'
}

type CrewCardProps = {
    id: number;
    name: string;
    photoUrl?: string;
    roles?: string[];
    size?: 'sm' | 'md' | 'lg';
}

const CrewCard = (props: CrewCardProps) => {
    const { id, name, photoUrl, roles, size = 'md' } = props
    const sizeClasses = sizeClassMap[size] || sizeClassMap.md
    const inner = (
        <Card className={`${sizeClasses} relative card-hover rounded-md`}>
            <Image
                fill
                sizes='(min-width: 768px) 350px, (min-width: 640px) 250px, 200px'
                src={photoUrl? photoUrl : '/fallbacks/no-poster.svg'}
                alt={name}
                className="object-cover rounded-md absolute inset-0 z-0"
                loading='eager'
            />
            <div className='card-hover-overlay'/>

            <CardHeader className='z-2 '>
                <CardTitle >
                    <span className='card-hover-text'>
                        {name}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardFooter className='z-2'>
                <CardDescription>
                    {
                        roles ?
                            <span className='card-hover-text'>Roles: {roles[0]}</span>
                            : <span className='card-hover-text'>Unknown Roles</span>
                    }
                </CardDescription>

            </CardFooter>
        </Card>
    )

    const target = String(id)
    return (
        <Link href={`/crew/${target}`} aria-label={`Open ${id}`}>
            {inner}
        </Link>
    )
};

export default CrewCard;