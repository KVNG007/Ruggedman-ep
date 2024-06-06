import React, { useEffect, useRef, useState } from 'react'
import 'animate.css'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom';
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
import Footer from '../../Components/Footer';
import { CentralModal } from '../../Components/Modal';
import { GrApple } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';


const Landing = () => {

  const tl2 = useRef();


  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // const slides = ["ookan", "eeji", 'eeta', 'eerin', 'aarun', 'eefa', 'eeje' , 'eejo'];

  const slides = [
    { key: 'ookan-overlay', id : 'ookan', link: '/assets/albums/Album-1.png', content: {release_date: '2005', album_name: 'Thy Album Come', link: '' } },
    { key: 'eeji-overlay', id : 'eeji', link: '/assets/albums/Album-2.png', content: {release_date: '2017', album_name: 'Rugeddy Baba', link: '' } },
    { key: 'eeta-overlay', id : 'eeta', link: '/assets/albums/Album-3.jpg', content: {release_date: '2009', album_name: 'Untouchable', link: '' } },
    { key: 'eerin-overlay', id : 'eerin', link: '/assets/albums/Album-1.png', content: {release_date: '2016', album_name: 'Money Making Music', link: '' } },
    { key: 'aarun-overlay', id : 'aarun', link: '/assets/albums/Album-5.jpg', content: {release_date: '2024', album_name: 'Situation EP', link: '' } }
  ];

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


    setTimeout(() => {
      setShowModal(true)
    }, 2500);


  }, [])

  // useEffect(() => {
  //   currentSlide == 2 ? tl2.current.play() : tl2.current.reverse();

  // }, [currentSlide]);

  return (
    <motion.div
      className="w-[100dvw] bg-black flex flex-col text-white pt-[60px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }}
      exit={{ opacity: 0 }}
    >
      {/* <Nav /> */}
      
      <header className="landing relative w-full h-[75dvh] pt-10 md:pt-0 md:h-screen bg-black px-[4%] ">
        <img
          src="/assets/ruggedman-copy-1.png"
          alt=""
          className="hidden md:block absolute md:h-full md:w-auto bottom-0 left-[50%] translate-x-[-50%]"
        />
        <img
          src="/assets/ruggedman-1-mobile.png"
          alt=""
          className="block md:hidden absolute  md:h-full md:w-auto bottom-0 left-[50%] translate-x-[-50%]"
        />

        <div className="relative w-full h-full flex items-center justify-center ">
          <Popup
            title="Nigerian rapper"
            className={`top-[30dvh] left-[15.5dvw] floating`}
          />
          <Popup title="ACTOR" className={`top-[39dvh] left-[30dvw] floating-2`} />
          <Popup
            title="un peace ambassador"
            className={`top-[75dvh] left-[79dvw] floating-3`}
          />
          <Popup title="humanitarian" className={`top-[31dvh] left-[79dvw] floating-3`} />
          <Popup
            title="un peace ambassador"
            className={`top-[39dvh] left-[65dvw] floating-2`}
          />
          <Popup
            title="Radio show host"
            className={`top-[75dvh] left-[15.5dvw] floating-1`}
          />

          <img
            src="/assets/ruggedman-header.png"
            alt=""
            className="relative z-40 w-full mt-[70%] md:w-[62.5dvw] md:mt-16"
          />
        </div>
        
        <div className=' absolute right-8 top-[50%] translate-y-[-50%] bg-accent hidden md:flex flex-col gap-4 p-2 py-4 rounded-md key'>
          <Link to={`#`}>
            <GrApple color='white' />
          </Link>

          <Link to={`https://www.facebook.com/Ruggedman.Opomulero?mibextid=ZbWKwLf`}>
            <ImFacebook2 color='white' />
          </Link>

          <Link to={`https://www.instagram.com/ruggedybaba?igsh=b2FydGxhcHk3bnJr`}>
            <FaInstagram color='white' />
          </Link>

          <Link to={`#`}>
            <FaSpotify color='white' />
          </Link>

          <Link to={`https://x.com/RuggedyBaba?t=PSeWnDqxOHQBs1ezATyIgA&s=09`}>
            <FaTwitter color='white' />
          </Link>

          <Link to={`https://youtube.com/@ruggedmantv?si=fZWAD1Fzls1zkwoz`}>
            <FaYoutube color='white' />
          </Link>

          <Link to={`#`}>
            <SiGmail color='white' />
          </Link>

        </div>

      </header>

      <section className="relative music w-full h-max md:h-screen px-[30px] pb-[20px] bg-white flex flex-col items-center justify-around md:justify-center">
        <h1 className="text-[3.5em] md:text-[5em] font-[600] font-crimson text-brand_yellow my-8 md:my-0">
          Music
        </h1>
        <Swiper
          className="w-full h-max md:h-[65dvh] "
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          loop={true}
          onSlideChange={(swipe) => setCurrentSlide(swipe.realIndex + 1)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide, i) => {
            return (
              <SwiperSlide key={i}>
                <SlideComp
                  slide={slide}
                  key={slide?.id}
                  currentSlide={currentSlide}
                  index={i}
                  identifier={slide.id}
                />
              </SwiperSlide>
            );
          })}

          {/* navigation navigation navigation navigation navigation navigation */}
          {/* <div className="h-max absolute z-20 bottom-0 left-[50%] translate-x-[-50%] md:translate-x-[0%] flex flex-row items-center md:flex-col gap-3  md:gap-[2px]">
            <div className="prev eswiper-button-prev h-8 md:h-10 aspect-square bg-black flex items-center justify-center">
              <BsChevronLeft size={25} color="white" />
            </div>

            <div className="next eswiper-button-next h-8 md:h-10 aspect-square bg-black flex items-center justify-center">
              <BsChevronRight size={25} color="white" />
            </div>
          </div> */}
        </Swiper>

          <div className="h-max  z-20 bottom-0 left-[50%] translate-x-[0%] md:translate-y-[-100%] md:translate-x-[50%] flex flex-row items-center md:flex-col gap-3  md:gap-[2px]">
            <div className="prev eswiper-button-prev h-8 md:h-10 aspect-square bg-black flex items-center justify-center">
              <BsChevronLeft size={25} color="white" />
            </div>

            <div className="next eswiper-button-next h-8 md:h-10 aspect-square bg-black flex items-center justify-center">
              <BsChevronRight size={25} color="white" />
            </div>
          </div>

        <div className="flex flex-row items-center justify-center gap-2 mt-4 md:-mt-10 pb-4">
          {slides.map((slide, i) => {
            return (
              <span
                key={i}
                className={`w-2 h-2 border border-black rounded-full transition-all ease-in-out duration-300 animate__animated animate_a_slow
                 ${
                   i == currentSlide - 1
                     ? "bg-company_red  animate__headShake "
                     : ""
                 } `}
              ></span>
            );
          })}
        </div>

        <Link
          to={`/music`}
          className={`absolute bottom-4 right-4 flex flex-row items-center text-[11px] font-medium text-black gap-6`}
        >
          <div className="flex flex-col items-start gap-1">
            <span>VIEW</span>
            <span>ALL</span>
          </div>

          <hr className="w-12 bg-black h-[2px]" />
        </Link>
      </section>

      <section className="relative px-[30px] h-max md:h-screen w-[100dvw] py-6 md:py-0 flex flex-col items-center justify-around bg-black text-center">
        <h1 className="text-[3.25em] md:text-[4em] py-7 md:py-0 font-[600] font-crimson text-brand_yellow">
          Videos
        </h1>

        <div className="video-holder borsder border-white mb-10">
          <img src="/assets/videos.png" alt="" className=''/>
        </div>

        <Link
          to={`/videos`}
          className={`absolute bottom-4 right-4 flex flex-row items-center text-[11px] font-medium gap-6`}
        >
          <div className="flex flex-col items-start gap-1">
            <span>VIEW</span>
            <span>ALL</span>
          </div>

          <hr className="w-12 bg-white h-[1px]" />
        </Link>
      </section>

      <section className="relative  min-h-[100dvh] w-[100dvw] flex flex-col bg-white ">
        <h1 className="text-[3.5em] md:text-[4em] font-[600] font-crimson text-brand_yellow mt-5 text-center">
          About
        </h1>

        <div className="w-full h-full flex flex-col md:flex-row items-center  text-black">
          <aside className="w-full md:w-[45%] h-full flex items-end justify-start">
            <img src="/assets/rugged-about.png" alt="" className='w-full md:w-[82%] ' />
          </aside>

          <aside className="w-full md:w-[55%] h-full flex items-center justify-start md:justify-start px-[24px] md:px-0">
            <article className="h-full flex flex-col items-center md:items-start justify-center gap-12 md:gap-2 max-w-[500px]">
              <h2 className="font-crimson font-semibold text-[3.5em] pt-12 md:pt-0">
                Ruggedman
              </h2>
              <p className="text-[14px] leading-6">
                One of Nigeria’s most celebrated hip-hop artists. Born Michael
                Ugochukwu Stevens and being 4th in a line of five children was
                tough (talk about attain to) .In addition, moving to Lagos...
              </p>
              <Link to={`/about`} className="w-max text-white text-[10px] bg-accent font-montserrat px-3 mb-8 md:mb-0 h-8 mt-2 flex items-center justify-center rounded-md">
                LEARN MORE
              </Link>
            </article>
          </aside>
        </div>
      </section>

      <CentralModal isOpen={showModal} closeModal={()=> setShowModal(false)} >
        <div className='relative z-20  mt-[7.5%] p-8 py-[40px] w-full max-w-[480px]  bg-[#0F0F11] flex flex-col justify-between'>

          <div className="w-full h-full flex flex-col  text-white text-left drop-shadow-sm">
              <h1 className="font-light text-2xl font-crimson text-center">
                Newsletter
              </h1>

              <section className="w-full flex flex-col gap-3 text-white font-roboto">
                  <aside className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-[10px] font-bold font-nunito'><span className='text-xs'>*</span> NAME</label>
                    <input type="text" name="name" id=""  className='h-7 bg-transparent border-b border-white w-full px-4 outline-none '/>
                  </aside>
                  <aside className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-[10px] font-bold font-nunito'><span className='text-xs'>*</span> EMAIL</label>
                    <input type="text" name="name" id=""  className='h-7 bg-transparent border-b border-white w-full px-4 outline-none '/>
                  </aside>
                  <aside className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-[10px] font-bold font-nunito'><span className='text-xs'>*</span> CHOOSE COUNTRY</label>
                    <input type="text" name="name" id=""  className='h-7 bg-transparent border-b border-white w-full px-4 outline-none '/>
                  </aside>
                  
                  <span className='text-brand_yellow font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com, smileglobal@gmail.com or +234703131979</span>
                  <button className='self-start text-brand_yellow font-nunito border-b border-brand_yellow mt-1 '>
                      SUBMIT
                  </button>
              </section>
          </div>
        </div>
      </CentralModal>

      <Footer />
    </motion.div>
  );
}

export default Landing