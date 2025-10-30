import Link from 'next/link'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

const sizeClassMap: Record<NonNullable<DisplayCardProps['size']>, string> = {
    sm: 'w-[150px] sm:w-[180px] md:w-[220px] aspect-[2/3]',
    md: 'w-[200px] sm:w-[250px] md:w-[350px] aspect-[2/3]',
    lg: 'w-[260px] sm:w-[320px] md:w-[420px] aspect-[2/3]'
}

const DisplayCard = (props: DisplayCardProps) => {
    const { id, title, imageUrl, directorNames, size = 'md' } = props
    const sizeClasses = sizeClassMap[size] || sizeClassMap.md

    const inner = (
        <Card className={`${sizeClasses} relative card-hover rounded-md`}>
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

    const target = String(id)
    return (
        <Link href={`/content/${target}`} aria-label={`Open ${title}`}>
            {inner}
        </Link>
    )
}

export default DisplayCard