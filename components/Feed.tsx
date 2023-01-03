import React from 'react'
import { urlFor } from '../lib/client'
import Image from 'next/image'
import Posts from './Posts'

interface Props {
    posts: any
    image: any
  }
  


const Feed = ({posts}: Props) => {

return (
  <>
    <div className='pt-10 ml-8 text-white font-semibold'>
        <h3>Discover</h3>
    </div>
  <div className='grid grid-cols-2 gap-2 w-[95vw] mx-auto'>
  {posts?.map((post: any) => (
    <Posts post={post} key={post._id} image={undefined}/>
  ))}
</div>
</>
  )
}

export default Feed