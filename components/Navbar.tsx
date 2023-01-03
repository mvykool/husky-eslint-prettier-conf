import React from 'react'
import { TiThMenu} from 'react-icons/ti'

const Navbar = () => {
  return (
    <div className='h-14 bg-[var(--bg-nav)] fixed w-full navbar flex justify-around items-center'>
      {/**logo */}
       <h1 className='gradient-text'>Descry</h1>
      {/**search */}
       <div>
        <form>
          <input 
          type="search"
          placeholder='search'
          className='px-2 rounded-sm outline-none' />
          <button type='submit'></button>
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