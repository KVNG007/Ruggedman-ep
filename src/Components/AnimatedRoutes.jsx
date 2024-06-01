import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Landing from '../Routes/Landing/Landing'
import Music from '../Routes/Music/Music'
import Tour from '../Routes/Tour/Tour'
import Videos from '../Routes/Videos/Videos'
import About from '../Routes/About/About'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/music' element={<Music />} />
            <Route exact path='/tour' element={<Tour />} />
            <Route exact path='/videos' element={<Videos />} />
            <Route exact path='/about' element={<About />} />

            <Route path='*' element={<Navigate to={'/'} replace={true} />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes