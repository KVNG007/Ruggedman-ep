import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../../Components/Nav'
import { Link } from 'react-router-dom'
import { GrApple } from 'react-icons/gr'
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagram, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Footer2 } from '../../Components/Footer'


const Tour = () => {
  return (
    <motion.div className='w-[100dvw] h-[100dvh] bg-white pt-[80px]'
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.6, ease: 'easeInOut'}}}
        exit={{opacity: 0}}
    >
      <header className="relative h-[80dvh] pb-12 w-full flex flex-col bg-white ">
        <h1 className="text-[4em] font-[600] font-crimson text-brand_yellow text-center">
          Tour
        </h1>

        <div className="w-full h-full flex flex-col pt-8 text-black ">

          <aside className=" w-full h-full flex flex-col items-center justify-center ">
            <article className="flex flex-col items-center gap-4 ">
              <h2 className="font-crimson text-[2em] md:text-[5em] whitespace-nowrap text-black font-normal">
                COMING SOON
              </h2>

              <div className="flex items-center flex-row gap-3 mt-2">
                <span className='text-xs pr-3'>FOLLOW</span>
                  {/* <GrApple color='black' />
                  <ImFacebook2 color='black' />
                  <FaInstagram color='black' />
                  <FaSpotify color='black' />
                  <FaTwitter color='black' />
                  <FaYoutube color='black' />
                  <SiGmail color='black' /> */}
                  <a href={`#`} targest='_blank' >
                    <GrApple color='black' />
                  </a>

                  <a href={`https://www.facebook.com/Ruggedman.Opomulero?mibextid=ZbWKwLf`} target='_blank' >
                    <ImFacebook2 color='black' />
                  </a>

                  <a href={`https://www.instagram.com/ruggedybaba?igsh=b2FydGxhcHk3bnJr`} target='_blank' >
                    <FaInstagram color='black' />
                  </a>

                  <a href={`#`} targest='_blank' >
                    <FaSpotify color='black' />
                  </a>

                  <a href={`https://x.com/RuggedyBaba?t=PSeWnDqxOHQBs1ezATyIgA&s=09`} target='_blank' >
                    <FaTwitter color='black' />
                  </a>

                  <a href={`https://youtube.com/@ruggedmantv?si=fZWAD1Fzls1zkwoz`} target='_blank' >
                    <FaYoutube color='black' />
                  </a>

                  <a href={`#`} targest='_blank' >
                    <SiGmail color='black' />
                  </a>
              </div>

            </article>
          </aside>

        </div>


      </header>

      {/* <footer className='relative bg-black'>
        <div className='relative z-20 h-[100dvh] w-full bg-black/90 flex flex-col justify-between'>

            <div className="w-full h-full flex flex-col  items-center justify-center">
                <h1 className="font-bold font-crimson text-[3.8em] text-brand_yellow">
                    Newsletter
                </h1>

                <section className="w-full max-w-[480px] flex flex-col gap-2 text-white">
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito'><span className='text-red-500 text-base'>*</span> NAME</label>
                        <input type="text" name="name" id=""  className='h-6 bg-white w-full px-4 outline-none '/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito'><span className='text-red-500 text-base'>*</span> EMAIL</label>
                        <input type="text" name="name" id=""  className='h-6 bg-white w-full px-4 outline-none '/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito'><span className='text-red-500 text-base'>*</span> PHONE</label>
                        <input type="text" name="name" id=""  className='h-6 bg-white w-full px-4 outline-none '/>
                    </aside>
                    
                    <span className='text-brand_yellow font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com, smileglobal@gmail.com or +234703131979</span>
                    <button className='self-start text-brand_yellow font-nunito border-b border-brand_yellow mt-1 '>
                        SUBMIT
                    </button>
                </section>
            </div>

            <div className="w-full border-t-[0.1px] border-white py-4 text-[10px] copy flex items-center justify-center">
                <h3 className="text-white uppercase font-nunito flex flex-row items-center justify-center gap-3 font-light">
                    <span>Copyright ruggedman &copy;</span> <span>Privacy Policy</span> <span>Terms & Conditions</span> <span>Cookie Choices</span> Do Not Sell My Personal Information
                </h3>
            </div>
        </div>
        
        <h1 className="absolute z-10 left-0 bottom-2 text-[8em] font-semibold font-crimson text-brand_yellow">
            Newsletter
        </h1>

      </footer> */}
      <Footer2 />
    </motion.div>
  )
}

export default Tour