import React from 'react'
import {BsGearFill} from 'react-icons/bs'
import { FaSearch} from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-16 bg-[var(--bg-nav)] fixed w-full navbar flex justify-around items-center'>
      {/**logo */}
       <h1 className='gradient-text'>Descry</h1>
      {/**search */}
       <div>
        <form className='flex items-center justify-center'>
          <input 
          type="search"
          placeholder='search'
          className='px-2 py-1 rounded-l-sm outline-none w-[50vw]' />
          <button type='submit' className='p-2 bg-[var(--search)] rounded-r-sm'><FaSearch className='text-white' /></button>
        </form>
       </div>

      {/**go to categories*/}

      <Link href={'/'}>
       <BsGearFill className='h-6 w-6 text-[var(--gradient)]'/>
    </Link>  
    </div>
  )
}

export default Navbar