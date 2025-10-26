import type { Metadata } from "next";

export async function generateMetadata({params}:{params:Promise<{year:number}>}):Promise<Metadata> {
  const {year} = await params;
  return {
    title: `IFFA Awards ${year} Winners`,
    description: `Discover the winners of the IFFA Awards ${year}. Celebrate cinematic excellence and explore the achievements in film for the year ${year}.`,
  }
}


const Winners = async ({params}:{params:Promise<{year:number}>}) => {
  const {year} = await params;
  return (
    <div>Winners for {year}</div>
  )
}

export default Winners