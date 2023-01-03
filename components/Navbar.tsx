import React from 'react'
import { TiThMenu} from 'react-icons/ti'
import { FaSearch} from 'react-icons/fa'

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
          <button type='submit' className='p-2 gradient rounded-r-sm'><FaSearch className='text-white' /></button>
        </form>
       </div>

      {/**menu and more */}

      <div>
        <TiThMenu className='h-6 w-6 text-[var(--gradient)]'/>
      </div>
    </div>
  )
}

export default Navbar