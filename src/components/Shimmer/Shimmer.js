import React from 'react'
import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import './Shimmer.css'
const Shimmer = () => {
  return (
    <div className='shimmer-container'>
      {[...Array(10)].map((_,index)=>(
        <div key={index} className='shimmer-container2' >
            <ShimmerThumbnail
                height={200}
                width={270}
                rounded
                className="shimmer-thumb"
            />
            <ShimmerTitle
                line={3}
                gap={10}
                variant='secondary'
                className='w-60'
            />
        </div>
      ))}
    </div>
  )
}

export default Shimmer
