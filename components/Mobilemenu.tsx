import React from 'react'
import { useStateContext } from '../context/StateContext';

const Mobilemenu = () => {

  const { showMenu, setShowMenu } = useStateContext();

  if(showMenu){
    document.body.style.position = 'fixed'
    document.body.style.overflow = 'hidden'
  }
  
 

  return (
   <>
       <div className='fixed bg-[var(--fade)] z-20 w-full h-screen top-16 ' onClick={()=> setShowMenu(false)}/> 

       <div className='app-light right-0 z-20 h-[100vh] top-16 w-52 absolute'>

       </div>
   </>
  )
}

export default Mobilemenu