import React from 'react'
import { topics } from '../utils/topics'

const Categories = () => {
  return (
  <>
      <div className='mt-10'>
    
      <div className='grid grid-cols-2 gap-2 w-[95vw] mx-auto'>
        {topics.map((topic) => (
            <div key={topic.name} className='gradient p-1 rounded-md text-white'>
               <p className='w-[30vw] flex justify-center'>{topic.name}</p>
            </div>
        ))}
      </div>
      </div>
  </>
  )
}

export default Categories