import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../Components/Nav'


const Videos = () => {
  return (
    <motion.div className='w-[100dvw] h-[100dvh] bg-white '
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.6, ease: 'easeInOut'}}}
        exit={{opacity: 0}}
    >
        {/* <Nav /> */}
        Videos
    </motion.div>
  )
}

export default Videos