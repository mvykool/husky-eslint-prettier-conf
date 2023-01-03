import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'

interface Props {
    post: any
    image: any
  }
  

const Posts = ({post}: Props) => {
  return (
    <div className=' mt-8'>
    <Image width={400} height={400} alt='pic' src={urlFor(post.image && post.image[0]).url()}
    className='rounded-sm'
    />
  </div>
  )
}

export default Posts