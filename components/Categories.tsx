import React from 'react'
import { topics } from '../utils/topics'
import Image from 'next/image'
import Masonry from 'react-masonry-css'


const breakpointObj ={
  default:4,
  3000:6,
  2000:5,
  1200:3,
  500:2,
}

const Categories = () => {
  return (
  <>
      <div className='mt-10'>
      <Masonry
          breakpointCols={breakpointObj}
          className="flex w-[95vw] mx-auto space-x-1">
    
      
        {topics.map((topic) => (
         
               <Image width={500} height={500} alt='category' src={topic.image} className='my-1'/>
        ))}
   
      </Masonry>
      </div>
  </>
  )
}

export default Categories