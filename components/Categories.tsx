import React from 'react'
import { topics } from '../utils/topics'
import Image from 'next/image'

const Categories = () => {
  return (
  <>
      <div className='mt-10'>
    
      <div className='flex flex-wrap w-[95vw] mx-auto'>
        {topics.map((topic) => (
            <div key={topic.name} className='gradient p-1 my-2 rounded-md text-white'>
               <Image width={500} height={500} alt='category' src={topic.image}
               className='h-[40vh]' />
            </div>
        ))}
      </div>
      </div>
  </>
  )
}

export default Categories