import DisplayCard from "@/components/DisplayCard"
import FeaturedCarousel from "./FeaturedCarousel"
import { getFeaturedContent } from "@/hooks/getFeatured"

const FeaturedContainer = async () => {
  const items = await getFeaturedContent()
  return (
    <div className='h-auto w-full overflow-visible'>
      <FeaturedCarousel items={items} />
    </div>
  )
}

export default FeaturedContainer