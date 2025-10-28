import type { Metadata } from "next";
import {getWinnersForYear} from "@/lib/dataFetcher";
import DisplayCard from "@/components/DisplayCard";

export async function generateMetadata({params}:{params:Promise<{year:number}>}):Promise<Metadata> {
  const {year} = await params;

  return {
    title: `IFFA Awards ${year} Winners`,
    description: `Discover the winners of the IFFA Awards ${year}. Celebrate cinematic excellence and explore the achievements in film for the year ${year}.`,
  }
}


const Winners = async ({params}:{params:Promise<{year:number}>}) => {
  const {year} = await params;
    const winners = await getWinnersForYear(year)
    const currYear = new Date().getFullYear();
    if (year==currYear){
        return <p>The winners for {year} will be announced soon. Stay tuned!</p>
    }
    if (winners.length === 0) {
        return <p>No winners announced for {year}.</p>
    }
  return (
      <div>
          <div className='title'>Winners</div>
          <div className='event-section-grid'>
              {winners.map((item) => (
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

export default Winners