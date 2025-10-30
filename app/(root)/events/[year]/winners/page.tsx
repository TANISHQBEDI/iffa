import type {Metadata} from 'next'
import {getDetailedWinnersForYear} from '@/lib/dataFetcher'
import WinnerCard from '@/components/WinnerCard'

export async function generateMetadata({params}: { params: Promise<{ year: string | number }> }): Promise<Metadata> {
    const {year: rawYear} = await params
    const year = Number(rawYear)
    return {
        title: `IFFA Awards ${year} Winners`,
        description: `Discover the winners of the IFFA Awards ${year}. Celebrate cinematic excellence and explore the achievements in film for the year ${year}.`,
    }
}

const Winners = async ({params}: { params: Promise<{ year: string | number }> }) => {
    const {year} = await params;
    const content = await getDetailedWinnersForYear(Number(year))


    return (
        <div>
            <div className='title'>Winners</div>
            {
                content && <div className='winner-section-grid'>
                {content.map((item) => (
                    <WinnerCard
                        key={item.contentId}
                        movieName={item.contentTitle}
                        category={item.awardCategoryName}
                        winnerName={item.crewMemberName!}
                        photoUrl={item.contentPortraitImage!}


                        size='lg'

                    />
                ))}
            </div>
            }
            {content.length==0  && <div className='text-center mt-10'>No winners data available for {year}.</div>}


        </div>
    )
}

export default Winners