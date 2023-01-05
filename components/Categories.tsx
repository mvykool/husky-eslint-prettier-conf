import React from 'react'
import { topics } from '../utils/topics'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'


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
          className="flex w-[95vw] mx-auto space-x-2">
    
      
        {topics.map((item) => (
         
        <div className='my-2'>
           <Link href={{ pathname: `/category/${item.name}`}} key={item.name} className=' relative'>
         <p 
         className='w-full h-full z-10 absolute bg-[var(--fade)] text-lg font-semibold text-white flex justify-center p-4'>{item.name}</p>
        <img 
  
        src={item.image} alt='cat-pic' className=' w-full' />
       </Link>
        </div>
        ))}
   
      </Masonry>
      </div>
  </>
  )
}

export default Categories