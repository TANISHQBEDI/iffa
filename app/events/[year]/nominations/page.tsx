import React from 'react'

const Nominations = async ({params}:{params: Promise<{year: number}>}) => {
    const {year} = await params;
  return (
    <div>Nominations for {year}</div>
  )
}

export default Nominations