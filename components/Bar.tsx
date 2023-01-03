import React from 'react'
import { TiHome, TiHeartFullOutline, TiPlus, TiSpanner } from 'react-icons/ti'
import Link from 'next/link'
import Image from 'next/image'

const Bar = () => {
  return (
    <div className='h-16 w-full fixed bottom-0 gradient flex justify-around'>

    {/**home link */}

    <Link href={'/'}>
       <TiHome/>
    </Link>    

    {/**liked link */}

    <Link href={'/'}>
       <TiHeartFullOutline/>
    </Link>  

     {/**add link */}

     <Link href={'/'}>
       <TiPlus/>
    </Link>  

     {/**add link */}

     <Link href={'/'}>
       <TiSpanner/>
    </Link>  


     {/**profile link */}

    <Link href={'/'}>
       <Image width={100} height={100} alt='profile-picture' 
       src={'https://cdn-icons-png.flaticon.com/512/6073/6073873.png'}
       className='h-10 w-10'
       
       />
    </Link> 
   
    

    </div>
  )
}

export default Bar