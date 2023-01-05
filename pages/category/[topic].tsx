import React from 'react'
import Head from 'next/head'
import { client, urlFor } from '../../lib/client'
import { useRouter } from 'next/router'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Posts from '../../components/Posts';


interface Prop{
    posts: any
}

const Topic = ({ posts}: Prop) => {

const router = useRouter()


let title: string = router.query.topic as string;




const filtered = posts.filter((item: any) => (
    item.topic === title
))
      

//go back to previous page

const goBack = () => {
    router.back()
  }



return (
    <div className='pt-1 pb-40 w-screen'>
    <Head>
        <title>Descry | {title}</title>
    </Head>

   


<div className='flex justify-center mx-8 p-5 rounded-lg my-10 bg-[#00708C] md:hidden'>
  <h1 className='font-bold text-white text-2xl'>{title}</h1>
  </div>

  <div className='md:flex md:justify-center md:mr-[20%] md:my-10'>
      <h2 className='ml-8 text-lg my-4 font-bold border-b-4 border-[#00708c] w-14 md:w-[18%] md:text-center md:text-2xl' >{title}</h2>
      </div>


   <div className='md:flex md:justify-center md:mr-[20%] md:-mt-10 ' >
   {filtered.length > 0 ? 
       <div className='grid grid-cols-2 xl:grid-cols-3 mt-10 md:mt-2 mx-3'>

        { filtered.map((post: any)=> <Posts key={post._id} post={post} image={undefined} />)}
       </div> : (
        <div className='mx-8 mt-20 pb-40'>
          <h1 className='font-semibold mx-4 text-lg'>No items of this category currently in stock</h1>
        </div>
       )}
   </div>
       
    </div>
  )
}

export default Topic

//server side props

export const getServerSideProps = async () => {
    const query = '*[_type == "post"]';
    const posts = await client.fetch(query);
   
   
    return {
     props: { posts }
    }
   
}