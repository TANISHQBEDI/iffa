"use client";
import DisplayCard from '@/components/DisplayCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import React from 'react'

const FeaturedCarousel = () => {
    const items = [
    {
      "contentId": 1,
      "title": "Homem com H",
      "portraitImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/homem-com-h-2025/poster.webp",
      "landscapeImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/homem-com-h-2025/poster.webp",
      "directors": ["Esmir Filho"]
    },
    {
      "contentId": 133,
      "title": "Vitoria (2025)",
      "portraitImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "landscapeImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "directors": ["Andrucha Waddington"]
    },
    {
      "contentId": 134,
      "title": "Vitoria (2025)",
      "portraitImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "landscapeImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "directors": ["Andrucha Waddington"]
    },
    {
      "contentId": 135,
      "title": "Vitoria (2025)",
      "portraitImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "landscapeImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "directors": ["Andrucha Waddington"]
    },
    {
      "contentId": 139,
      "title": "Vitoria (2025)",
      "portraitImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "landscapeImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "directors": ["Andrucha Waddington"]
    },
    {
      "contentId": 123,
      "title": "Vitoria (2025)",
      "portraitImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "landscapeImageUrl": "https://iffaimages.s3.ap-southeast-2.amazonaws.com/optimized/movies/vitoria-2025/poster.webp",
      "directors": ["Andrucha Waddington"]
    },

  ]
  const autoScroll = React.useRef(
    AutoScroll({ speed: 1, playOnInit: true, stopOnMouseEnter: true, stopOnInteraction: false })
  )

  return (
    <Carousel
      className=''
      opts={{ align: 'start', loop: true, skipSnaps: true }}
      plugins={[autoScroll.current]}
    >
        <CarouselContent>
            {items.map((item)=>(
                <CarouselItem key={item.contentId} className='basis-auto'>
                    <DisplayCard
                        title={item.title}
                        imageUrl={item.portraitImageUrl}
                        directorNames={item.directors}
                    />
                </CarouselItem>
            ))}
            
        </CarouselContent>
    </Carousel>
  )
}

export default FeaturedCarousel