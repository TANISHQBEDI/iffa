import DisplayCard from "@/components/DisplayCard"
import FeaturedCarousel from "./FeaturedCarousel"

const FeaturedContainer = () => {

  return (
    <div className='h-auto w-full overflow-visible'>

      <div>
        <FeaturedCarousel />
      </div>
    </div>
  )
}

export default FeaturedContainer