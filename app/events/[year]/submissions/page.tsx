import React from 'react'

const Submissions = async ({params}:{params:Promise<{year: number}>}) => {
  const {year} = await params;
  return (
    <div>Submissions for {year}</div>
  )
}

export default Submissions