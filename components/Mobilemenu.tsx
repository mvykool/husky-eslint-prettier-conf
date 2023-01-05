import React from 'react'
import { useStateContext } from '../context/StateContext';
import { motion, AnimatePresence} from 'framer-motion'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0, x: 100},
  show: { opacity: 1, x:0,
  transition: {ease: "easeOut", duration: 1, delay: 0.5}
  },
  exit: { opacity: 0, x:100,
    transition: {ease: "easeOut", duration: 0.5, delay: 0.1}
    }
} 
  

const Mobilemenu = () => {

  const { showMenu, setShowMenu } = useStateContext();

  if(showMenu){
    document.body.style.position = 'fixed'
    document.body.style.overflow = 'hidden'
  }
  
 

  return (
   <>
       <div className='fixed bg-[var(--fade)] z-20 w-full h-screen top-0 ' onClick={()=> setShowMenu(false)}/> 

       <motion.div 
        variants={sectionVariant}
       initial="hidden"
       animate='show'
       exit={{ opacity: 0 }}
        className='app-light right-0 z-20 h-[100vh] top-0 w-52 absolute'>

       </motion.div>
   </>
  )
}

export default Mobilemenu