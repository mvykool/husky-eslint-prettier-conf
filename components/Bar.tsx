import React from 'react'
import { TiHome, TiHeartFullOutline, TiPlus, TiThSmall  } from 'react-icons/ti'
import Link from 'next/link'
import Image from 'next/image'

const Bar = () => {
  return (
    <div className='h-14 w-full space-x-2 fixed bottom-0 gradient flex justify-around items-center z-30'>

    {/**home link */}

    <Link href={'/'}>
       <TiHome className='bar-icons'/>
    </Link>    

     {/**category link */}

     <Link href={'/category'}>
        <TiThSmall className='bar-icons'/>
      </Link> 

     {/**add link */}

     <Link href={'/'}>
       <TiPlus className='bar-icons p-1 rounded-full border-2 border-white'/>
    </Link>  

      {/**liked link */}

      <Link href={'/'}>
       <TiHeartFullOutline className='bar-icons'/>
    </Link> 

    
     {/**profile link */}

    <Link href={'/'}>
       <Image width={100} height={100} alt='profile-picture' 
       src={'https://cdn-icons-png.flaticon.com/512/6073/6073873.png'}
       className='h-9 w-9 border-4 border-white rounded-full'
       
       />
    </Link> 
   
    

    </div>
  )
}

export default Bar