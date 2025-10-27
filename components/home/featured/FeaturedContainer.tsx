import DisplayCard from "@/components/DisplayCard"

const FeaturedContainer = () => {
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
    }
  ]
  return (
    <div className='h-dvh w-full'>

      <div className="grid grid-cols-2">
        {items.map((item) => (
        <DisplayCard
            key={item.contentId}
            title={item.title}
            directorNames={item.directors}
            imageUrl={item.portraitImageUrl}
          />
        ))}

      </div>
      
        




    </div>
  )
}

export default FeaturedContainer