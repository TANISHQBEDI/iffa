import type { Metadata } from "next";
import {getSubmissionsForYear} from "@/lib/dataFetcher";
import DisplayCard from "@/components/DisplayCard";

export async function generateMetadata({params}:{params:Promise<{year:number}>}):Promise<Metadata> {
    const {year} = await params;
    return {
        title: `IFFA Awards ${year} Submissions`,
        description: `Discover the submissions of the IFFA Awards ${year}. Celebrate cinematic excellence and explore the achievements in film for the year ${year}.`,
    }
}

const Submissions = async ({params}:{params:Promise<{year: number}>}) => {
  const {year} = await params;
  const content = await getSubmissionsForYear(year)
  return (
      <div>
          <div className='title'>Submissions</div>
          <div className='event-section-grid'>
              {content.map((item) => (
                  <DisplayCard
                      key={item.contentId}
                      title={item.title}
                      imageUrl={item.portraitImageUrl!}
                      directorNames={item.directors}
                  />
              ))}
          </div>

      </div>

  )
}

export default Submissions