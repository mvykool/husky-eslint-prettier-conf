import React from 'react'
import {BsGearFill} from 'react-icons/bs'
import { FaSearch} from 'react-icons/fa'
import { useStateContext } from '../context/StateContext'
import Mobilemenu from './Mobilemenu'

const Navbar = () => {

 
  //open menu

  const { showMenu, setShowMenu } = useStateContext();

  //lock scrolling when modals are opened 


if (typeof window !== "undefined") {
  let body = window.document.body;

 if(showMenu === true){
  body.style.position = 'fixed'
  body.style.overflow = 'hidden'
}else {
  body.style.position = 'relative'
  body.style.overflow = 'auto'
}
}


  return (
    <div className='h-16 bg-[var(--bg-nav)] fixed w-full navbar flex justify-around items-center z-50'>
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

      {/*open config*/}

      
       <BsGearFill className='h-6 w-6 text-[var(--gradient)] hover:scale-125 duration-100 hover:rotate-180 'onClick={() => setShowMenu(true)}/>
     

       {showMenu && <Mobilemenu/>}

    </div>
  )
}

export default Navbar