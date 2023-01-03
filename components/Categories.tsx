import React from 'react'
import { topics } from '../utils/topics'

const Categories = () => {
  return (
    <div>
      <div className='pt-20 ml-5 text-white font-semibold'>
        <h3>Categories</h3>
      </div>
      <div className='flex justify-center space-x-5 pt-5 pl-20 pb-6 items-center overflow-x-auto'>
        {topics.map((topic) => (
            <div key={topic.name} className='gradient p-1 rounded-md text-white'>
               <p className='w-[30vw] flex justify-center'>{topic.name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Categories