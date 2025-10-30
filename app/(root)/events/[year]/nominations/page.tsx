import type { Metadata } from "next";
import {getNominationsForYear} from "@/lib/dataFetcher";
import DisplayCard from "@/components/DisplayCard";

export async function generateMetadata({params}:{params:Promise<{year:number}>}):Promise<Metadata> {
  const {year} = await params;
  return {
    title: `IFFA Awards ${year} Nominations`,
    description: `Discover the nominations of the IFFA Awards ${year}. Celebrate cinematic excellence and explore the achievements in film for the year ${year}.`,
  }
}

const Nominations = async ({params}:{params: Promise<{year: number}>}) => {
    const {year} = await params;
    const content = await getNominationsForYear(year)
  return (
      <div>
          <div className='title'>Nominations</div>
          <div className='event-section-grid'>
              {content.map((item) => (
                  <DisplayCard
                      key={item.contentId}
                      id={item.contentId}
                      title={item.title}
                      imageUrl={item.portraitImageUrl!}
                      directorNames={item.directors}
                      size='sm'
                  />
              ))}
          </div>

      </div>
  )
}

export default Nominations