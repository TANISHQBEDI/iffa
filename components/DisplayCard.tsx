import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

const DisplayCard = (props: DisplayCardProps) => {
    const { title, imageUrl, directorNames } = props
    return (
        <Card className="aspect-2/3 w-[200px] sm:w-[250px] md:w-[350px] relative card-hover rounded-md">
            <Image
                fill
                sizes='(min-width: 768px) 350px, (min-width: 640px) 250px, 200px'
                src={imageUrl? imageUrl : '/fallbacks/no-poster.svg'}
                alt={title}
                className="object-cover rounded-md absolute inset-0 z-0"
                loading='eager'
            />
            <div className='card-hover-overlay'/>

            <CardHeader className='z-2 '>
                <CardTitle >
                    <span className='card-hover-text'>
                        {title}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardFooter className='z-2'>
                <CardDescription>
                    {
                        directorNames ?
                            <span className='card-hover-text'>Directed by: {directorNames[0]}</span>
                            : <span className='card-hover-text'>Unknown Director</span>
                    }
                </CardDescription>

            </CardFooter>
        </Card>
    )
}

export default DisplayCard