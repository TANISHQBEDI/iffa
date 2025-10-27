import { Button } from '@/components/ui/button'
import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Video from '@/components/home/video/Video'
import VideoContainer from '@/components/home/video/VideoContainer'
import FeaturedContainer from '@/components/home/featured/FeaturedContainer'

const Home = () => {
  return (
    <div className="w-full h-full space-y-10">
      <VideoContainer/>
      <FeaturedContainer/>
    </div>
  )
}

export default Home