import FeaturedCarousel from "./FeaturedCarousel"
import {getFeaturedContent} from "@/lib/dataFetcher"

const FeaturedContainer = async () => {
  const items = await getFeaturedContent()
  return (
    <div className='h-auto w-full overflow-visible'>
      <FeaturedCarousel items={items} />
    </div>
  )
}

export default FeaturedContainer