"use client";
import DisplayCard from '@/components/DisplayCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import React from 'react'

const FeaturedCarousel = ({ items }: { items: FeaturedContentDto[] }) => {

    const autoScroll = React.useRef(
        AutoScroll({ speed: 1, playOnInit: true, stopOnMouseEnter: true, stopOnInteraction: false })
    )

    return (
        <Carousel
            className=''
            opts={{ align: 'start', loop: true, skipSnaps: true, dragFree: true }}
            plugins={[autoScroll.current]}
        >
            <CarouselContent>
                {items?.map((item) => (
                    <CarouselItem key={`${2025}-${item.contentId}`} className='basis-auto'>
                        <DisplayCard
                            title={item.title}
                            imageUrl={item.portraitImageUrl!}
                            directorNames={item.directors}
                        />
                    </CarouselItem>
                ))}

            </CarouselContent>
        </Carousel>
    )
}

export default FeaturedCarousel