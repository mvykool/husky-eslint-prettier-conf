import React, { useRef} from 'react'
import { useStateContext } from '../context/StateContext';
import { motion, AnimatePresence} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0, x: 100},
  show: { opacity: 1, x:0,
  transition: {ease: "easeOut", duration: 1, delay: 0.3}
  }
} 
  

const Mobilemenu = () => {

  const { showMenu, setShowMenu } = useStateContext();


  const menuRef = useRef<HTMLDivElement | null>(null);
  
 

  return (
   <>
       <div className='fixed bg-[var(--fade)] z-20 w-full h-screen top-0' onClick={()=> setShowMenu(false)}/> 

     {showMenu && (
        <motion.div 
        variants={sectionVariant}
       initial="hidden"
       animate='show'
        className='app-light right-0 z-20 h-[100vh] top-0 w-52 fixed'
        ref={menuRef}
        >

       </motion.div>
     )}
   </>
  )
}

export default Mobilemenu