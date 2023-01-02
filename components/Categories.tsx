import React from 'react'
import { topics } from '../utils/topics'

const Categories = () => {
  return (
    <div>
      <div className='flex justify-center space-x-5 pt-5 overflow-x-auto'>
        {topics.map((topic) => (
            <div className='gradient p-2 rounded-md text-white'>
               {topic.name}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Categories