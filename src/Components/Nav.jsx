import React, { useState } from 'react'
import '../index.css'
import { Link, useLocation } from 'react-router-dom'
import { GrApple } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Nav = () => {
  const location = useLocation().pathname;

  const [showNav, setShowNav] = useState(false);
  const [showSub, setShowSub] = useState(false);
  
  return (
    <nav className={`w-full fixed z-50 top-0 left-0 px-[30px] bg-transparent  flex flex-row items-center justify-center md:justify-between transition-all ease-in-out duration-[600ms]
       ${location == '/' ? 'text-white bg-blacks' : 'text-black bg-whites'}
    `}
    >
      <div className={`absolute contents md:hidden top-0 left-0 w-screen h-screen ${showNav ? 'backdrop-blur-sm pointer-events-auto' : 'pointer-events-none'} `} onClick={()=> setShowNav(prev => !prev)}>
        
        <div className={`flex flex-col items-center justify-between gap-[20dvh] w-[80dvw] h-screen absolute top-0 right-[100%] bg-black text-white transition-all ease-in-out duration-300
          ${showNav ? 'translate-x-[100%]' : 'translate-x-[0%]'} py-[10dvh] px-[30px]
        `}        
        >
          <nav className="h-full flex flex-col items-center justify-around font-ninito pt-8">
            {/* <Link to={`/music`}>MUSIC</Link> */}
            <Link to={`/music`}>MUSIC</Link>
            <Link to={`/videos`}>VIDEOS</Link>
            <Link to={`/about`}>ABOUT</Link>
            <Link to={`/tour`}>TOUR</Link>
          </nav>

          <div className='w-full flex flex-row items-center justify-around '>
            <a href={`#`} targest='_blank' >
              <GrApple color='white' />
            </a>

            <a href={`https://www.facebook.com/Ruggedman.Opomulero?mibextid=ZbWKwLf`} target='_blank' >
              <ImFacebook2 color='white' />
            </a>

            <a href={`https://www.instagram.com/ruggedybaba?igsh=b2FydGxhcHk3bnJr`} target='_blank' >
              <FaInstagram color='white' />
            </a>

            <a href={`#`} targest='_blank' >
              <FaSpotify color='white' />
            </a>

            <a href={`https://x.com/RuggedyBaba?t=PSeWnDqxOHQBs1ezATyIgA&s=09`} target='_blank' >
              <FaTwitter color='white' />
            </a>

            <a href={`https://youtube.com/@ruggedmantv?si=fZWAD1Fzls1zkwoz`} target='_blank' >
              <FaYoutube color='white' />
            </a>

            <a href={`#`} targest='_blank' >
              <SiGmail color='white' />
            </a>
        </div>
        </div>
        
      </div>

      <div className={`flex md:hidden flex-col justify-around w-10 aspect-square ham ${showNav ? 'ham-active' : ''}`}
        onClick={()=> setShowNav(prev => !prev)}
      >
        <span className={`w-full h-1  ${location == '/' || showNav ? "bg-white" : "bg-black"}`}></span>
        <span className={`w-full h-1  ${location == '/' || showNav ? "bg-white" : "bg-black"}`}></span>
        <span className={`w-full h-1  ${location == '/' || showNav ? "bg-white" : "bg-black"}`}></span>
      </div>

      <Link to={'/'} className=''>
        <img src="/assets/R-Logo.png" alt="" className={`h-20 md:h-24`}/>
      </Link>

      <div className="hidden md:flex flex-row items-center gap-10 font-normal text-sm">
        {/* <Link to={`/music`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/music' ? 'font-bold text-brand_yellow' : ''}`} >MUSIC</Link> */}
        <div to={`/music`} className={`relative nav-link transition-all ease-in-out duration-300 
          ${location.includes('music') ? 'font-bold text-brand_yellow' : ''} `} 
          onClick={()=> setShowSub(prev => !prev)}
        >
          <span>MUSIC</span>
            <div className={`absolute top-[150%] left-0 flex flex-col gap-2 transition-all ease-in-out duration-300 ${showSub ? 'translate-y-[0%]' : 'translate-y-[-50%] opacity-0 pointer-events-none' } `}>
              <Link to={`/music`} className={`w-[100px] whitespace-nowrap h-6 text-[10px] flex items-center justify-center gap-2  ${location.includes('music') ? ' text-black' : ''} hover:gap-4 hover:text-black font-normal font-roboto hover:font-semibold rounded-lg bg-brand_yellow transition-all ease-in-out duration-300`}>
                Situation EP
                <IoIosArrowRoundForward color='inherit' size={12} />
              </Link>
              <Link to={`/music/TMSE`} className={`w-[100px] whitespace-nowrap h-6 text-[10px] flex items-center justify-center gap-2  ${location.includes('music') ? ' text-black' : ''} hover:gap-4 hover:text-black font-normal font-roboto hover:font-semibold rounded-lg bg-brand_yellow transition-all ease-in-out duration-300`}>
                TMSE EP
                <IoIosArrowRoundForward color='inherit' size={12} />
              </Link>
            </div>
          {/* {
            showSub ?
            :
            ''
          } */}

        </div>

        <Link to={`/videos`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/videos' ? 'font-bold text-brand_yellow' : ''}`} onClick={()=> setShowSub(false)} >
          VIDEOS
        </Link>
        <Link to={`/tour`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/tour' ? 'font-bold text-brand_yellow' : ''}`} onClick={()=> setShowSub(false)} >
          TOUR
        </Link>
        <Link to={`/about`} className={`nav-link transition-all ease-in-out duration-300 ${location == '/about' ? 'font-bold text-brand_yellow' : ''}`} onClick={()=> setShowSub(false)} >
          ABOUT
        </Link>
      </div>

      

    </nav>
  )
}

export default Nav