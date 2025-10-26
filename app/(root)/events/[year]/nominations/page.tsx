import type { Metadata } from "next";

export async function generateMetadata({params}:{params:Promise<{year:number}>}):Promise<Metadata> {
  const {year} = await params;
  return {
    title: `IFFA Awards ${year} Nominations`,
    description: `Discover the nominations of the IFFA Awards ${year}. Celebrate cinematic excellence and explore the achievements in film for the year ${year}.`,
  }
}

const Nominations = async ({params}:{params: Promise<{year: number}>}) => {
    const {year} = await params;
  return (
    <div>Nominations for {year}</div>
  )
}

export default Nominations