import React from 'react'
import '../index.css'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const location = useLocation().pathname;

  
  return (
    <nav className={`w-full fixed z-50 top-0 left-0 px-[30px] bg-transparent  flex flex-row items-center justify-between transition-all ease-in-out duration-[600ms]
       ${location == '/' ? 'text-white bg-blacks' : 'text-black bg-whites'}
    `}
    >
        <Link to={'/'}>
          <img src="/assets/R-Logo.png" alt="" className={`h-24`}/>
        </Link>

        <div className="hidden md:flex flex-row items-center gap-6 font-normal text-sm">
          <Link to={`/music`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/music' ? 'font-bold text-brand_yellow' : ''}`} >MUSIC</Link>
          <Link to={`/videos`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/videos' ? 'font-bold text-brand_yellow' : ''}`} >VIDEOS</Link>
          <Link to={`/tour`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/tour' ? 'font-bold text-brand_yellow' : ''}`} >TOUR</Link>
          <Link to={`/about`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/about' ? 'font-bold text-brand_yellow' : ''}`} >ABOUT</Link>
        </div>
    </nav>
  )
}

export default Nav