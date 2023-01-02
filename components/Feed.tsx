import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'

interface Props {
    post: any
    image: any
  }
  


const Feed = ({post}: Props) => {




  return (
    <div className=' mt-10'>
      <Image width={400} height={400} alt='pic' src={urlFor(post.image && post.image[0]).url()} />
    </div>
  )
}

export default Feed