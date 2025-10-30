import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card'

type WinnerCardProps = {
  movieName: string
  category?: string
  winnerName?: string
  photoUrl?: string
    size?: 'sm' | 'md' | 'lg';
  className?: string
}

const sizeClassMap: Record<NonNullable<DisplayCardProps['size']>, string> = {
    sm: 'w-[150px] sm:w-[180px] md:w-[220px] aspect-[2/3]',
    md: 'w-[200px] sm:w-[250px] md:w-[350px] aspect-[2/3]',
    lg: 'w-[260px] sm:w-[320px] md:w-[420px] aspect-[2/3]'
}

const WinnerCard = (props: WinnerCardProps) => {
    const { movieName, category, winnerName, photoUrl, size = 'md' } = props
    const sizeClasses = sizeClassMap[size] || sizeClassMap.md
    return (
        <div>
            {category ? (
                <span className="block text-[0.85em] md:text-[0.95em] lg:text-[1.05em] font-semibold text-accent-6 line-clamp-1 leading-tight mb-2 px-1">
                    {category}
                </span>
            ) : null}
            <Card className={`${sizeClasses} relative card-hover rounded-md`}>
                <Image
                    fill
                    sizes='(min-width: 768px) 350px, (min-width: 640px) 250px, 200px'
                    src={photoUrl? photoUrl : '/fallbacks/no-poster.svg'}
                    alt={movieName}
                    className="object-cover rounded-md absolute inset-0 z-0"
                    loading='eager'
                />
                <div className='card-hover-overlay'/>

                <CardHeader className='z-2 '>
                    <CardTitle >
                    <span className='card-hover-text'>
                        {movieName}
                    </span>
                    </CardTitle>
                </CardHeader>
                <CardFooter className='z-2'>
                    <CardDescription>
                        {winnerName}
                    </CardDescription>

                </CardFooter>
            </Card>

        </div>

    )
}

export default WinnerCard
