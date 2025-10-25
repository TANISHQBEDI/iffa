import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IFFA Winners",
  description: "List of winners by year",
  openGraph: {
    title: "IFFA Winners",
    description: "List of winners by year"
  },
};


const Winners = async ({params}:{params:Promise<{year:number}>}) => {
  const {year} = await params;
  return (
    <div>Winners for {year}</div>
  )
}

export default Winners