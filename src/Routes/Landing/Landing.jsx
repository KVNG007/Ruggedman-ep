import React, { useEffect, useRef, useState } from 'react'
import 'animate.css'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';
import Nav from '../../Components/Nav';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import gsap from 'gsap';
import SlideComp from '../../Components/SlideComp';


const Landing = () => {

  const tl2 = useRef();


  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["ookan", "eeji", 'eeta', 'eerin', 'aarun', 'eefa', 'eeje' , 'eejo'];

  const Popup = (props) => {
    const {title, className, top, left} = props;

    return (
      <div className={`hidden bg-accent absolute ${className} px-4 py-2 md:flex items-center justify center uppercase text-white text-[12px] rounded-md font-light`}>
        {title}
      </div>
    )
  }


  useEffect(() => {


    tl2.current = gsap.timeline({
      paused:true
    })



    //2nd TL
    tl2.current.to(".overlay", {
      width:"0%",
      duration:0.25,
      ease:'expo.inOut'
    }).to(".overlay",{
      width:"100%",
      right:0,
      left: 'unset',
      ease:'expo.inOut'
    }).to(".cover",{
      color: "black",
      opacity: 1,
      duration:0,
    })
    .to(".overlay",{
      width:"0%",
      ease:'expo.inOut',
      // duration: 0.25
    })


  }, [])

  useEffect(() => {
    currentSlide == 2 ? tl2.current.play() : tl2.current.reverse();

  }, [currentSlide]);

  return (
    <motion.div className='w-[100dvw] bg-black flex flex-col text-white'
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { duration: 0.6, ease: 'easeInOut'}}}
      exit={{opacity: 0}}
    >
      {/* <Nav /> */}
      <header className='landing relative w-full h-[75dvh] pt-10 md:pt-0 md:h-screen bg-black px-[4%] '>
        <img src="/assets/ruggedman-copy-1.png" alt="" className='hidden md:block absolute md:h-full md:w-auto bottom-0 left-[50%] translate-x-[-50%]' />
        <img src="/assets/ruggedman-1-mobile.png" alt="" className='block md:hidden absolute  md:h-full md:w-auto bottom-0 left-[50%] translate-x-[-50%]' />

        <div className="relative w-full h-full flex items-center justify-center ">
          <Popup title='Nigerian rapper' className={`top-[30dvh] left-[15.5dvw]`} />
          <Popup title='ACTOR' className={`top-[39dvh] left-[30dvw]`} />
          <Popup title='un peace ambassador' className={`top-[75dvh] left-[79dvw]`} />
          <Popup title='humanitarian' className={`top-[31dvh] left-[79dvw]`} />
          <Popup title='un peace ambassador' className={`top-[39dvh] left-[65dvw]`} />
          <Popup title='Radio show host' className={`top-[75dvh] left-[15.5dvw]`} />

          <img src="/assets/ruggedman-header.png" alt=""  className='relative z-40 w-full mt-[70%] md:w-[62.5dvw] md:mt-16'/>
        </div>
      </header>

      <section className="music w-full h-screen px-[30px] bg-white flex flex-col items-center justify-center">
        <h1 className='text-[5em] font-[600] font-crimson text-brand_yellow'>Music</h1>
        <Swiper
          className='w-full h-[65dvh]'
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          loop={true}
          onSlideChange={(swipe) => setCurrentSlide(swipe.realIndex + 1)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="relative bg-red-500 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-purple-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide> 

          <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="relative bg-fuchsia-400 h-full aspect-square flex items-center justify-center">
                <span className={`overlay`}></span>
                <p className='cover'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-purple-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide> 

          <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="bg-blue-500 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-pink-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide> 

          <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="bg-green-500 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-orange-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide> 

          <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="bg-red-500 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-purple-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide> 

          <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="bg-blue-500 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-pink-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide> 

          <SwiperSlide className='flex flex-row items-center justify-center'>
            <div className="image-holder h-full w-full  flex flex-row items-center justify-center">
              <div className="bg-green-500 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
              <div className="bg-orange-200 h-full aspect-square flex items-center justify-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
              </div>
            </div>
          </SwiperSlide>  */}

          {
            slides.map((slide, i) => {
              return (
                <SwiperSlide>
                  <SlideComp key={i}currentSlide={currentSlide} index={i} identifier={slide}/>
                </SwiperSlide>
              )
            })
          }




          {/* navigation navigation navigation navigation navigation navigation */}
          <div className="h-max absolute z-20 bottom-0 left-[50%] translate-x-[-sa50%] flex flex-col gap-[2px]">
            <div className="prev eswiper-button-prev h-10 aspect-square bg-black flex items-center justify-center">
              <BsChevronLeft size={25} color='white' />
            </div>
            <div className="next eswiper-button-next h-10 aspect-square bg-black flex items-center justify-center">
              <BsChevronRight size={25} color='white' />
            </div>
          
          </div>       

        </Swiper>

        <div className="flex flex-row items-center justify-center gap-2 mt-4">
         {
            slides.map((slide, i) => {
              return (
                <span key={i} className={`w-2 h-2 border border-black rounded-full transition-all ease-in-out duration-300 animate__animated animate_a_slow
                 ${i == currentSlide - 1 ? 'bg-company_red  animate__headShake ' : ''} `}
                >

                </span>
              )
            } 
          )
          }
         </div>

      </section>


    </motion.div>
  )
}

export default Landing