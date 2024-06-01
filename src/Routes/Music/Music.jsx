import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../Components/Nav'

const Music = () => {
  return (
    <motion.div className='w-[100dvw] h-[100dvh] bg-white'
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.6, ease: 'easeInOut'}}}
        exit={{opacity: 0}}
    >
        {/* <Nav /> */}
        Music
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>It amet consectetur adipisicing elit. Natus et aspernatur qui labore maxime temporibus quae alias ipsa! Voluptatibus sit sapiente sequi facilis!</p>
        <p>Doloribus, odio incidunt? Ratione a dolorum aliquam ducimus fuga, tempora officiis porro quos accusamus illo deleniti perferendis corrupti hic ipsa, aperiam, dolores illum vel labore atque maxime deserunt ex doloribus. Veritatis neque illum temporibus maxime eius, repellat praesentium pariatur voluptates consequuntur saepe vero totam mollitia voluptatum tempore odit delectus cum nihil eos magni eligendi eaque nobis magnam? Quia, impedit voluptatem nisi harum ipsa praesentium itaque voluptatibus cupiditate officia.</p>
    </motion.div>
  )
}

export default Music