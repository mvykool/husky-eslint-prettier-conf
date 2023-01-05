import React from 'react'
import { topics } from '../utils/topics'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { motion } from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}




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
         
        <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='my-2'>
           <Link href={{ pathname: `/category/${item.name}`}} key={item.name} className=' relative'>
         <p 
         className='w-full h-full z-10 absolute bg-[var(--fade)] text-lg font-semibold text-white flex justify-center p-4 rounded-md'>{item.name}</p>
        <img 
  
        src={item.image} alt='cat-pic' className=' w-full rounded-md' />
       </Link>
        </motion.div>
        ))}
   
      </Masonry>
      </div>
  </>
  )
}

export default Categories