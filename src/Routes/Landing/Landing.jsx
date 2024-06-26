import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
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
import { toast } from 'sonner';
import { IoCloseOutline } from 'react-icons/io5';


const Landing = () => { 

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);  

  const slides = [
    { key: 'ookan-overlay', id : 'ookan', link: '/assets/albums/Album-1.png', content: {release_date: 'Released 2005', album_name: 'Thy Album Come', link: 'https://empire.ffm.to/themichaelstephensexperiment' } },
    
    { key: 'eeji-overlay', id : 'eeji', link: '/assets/albums/Album-2.png', content: {release_date: 'Released 2017', album_name: 'Rugeddy Baba', link: 'https://empire.ffm.to/themichaelstephensexperiment' } },
    
    { key: 'eeta-overlay', id : 'eeta', link: '/assets/albums/Album-3.jpg', content: {release_date: 'Released 2009', album_name: 'Untouchable', link: 'https://empire.ffm.to/themichaelstephensexperiment' } },
    
    { key: 'eerin-overlay', id : 'eerin', link: '/assets/albums/Album-1.png', content: {release_date: 'Released 2016', album_name: 'Money Making Music', link: 'https://empire.ffm.to/themichaelstephensexperiment' } },
    
    { key: 'aarun-overlay', id : 'aarun', link: '/assets/albums/Album-5.jpg', content: {release_date: 'Released 2024', album_name: 'Situation EP', link: 'https://empire.ffm.to/themichaelstephensexperiment' } }
  ];

  const Popup = (props) => {
    const {title, className, top, left} = props;

    return (
      <div className={`hidden bg-accent absolute ${className} px-4 py-2 md:flex items-center justify center uppercase text-white text-[12px] rounded-md font-light`}>
        {title}
      </div>
    )
  }


  const formRef3 = useRef();

  const [messageDetails, setMessageDetails] = useState({
    name: '',
    email: '',
    country: ''
  })

  const sendEmail = (e) => {
      e.preventDefault();

      toast.success('Sending response...', {position: 'bottom-center', duration: 2000});

      emailjs
      .sendForm('service_ndejjoo', 'template_qlqd5j9', formRef3.current, {
          publicKey: 'W0g6-fmIquGkzcrwz',
      })
      .then(
          () => {
              console.log('SUCCESS!');
              setShowModal(false);
              setMessageDetails({
                name: '',
                email: '',
                country: '',
              });
              toast.success('Subscription successful.', {duration: 2000, position: 'bottom-center'})
          },
      (error) => {
          console.log('FAILED...', error.text);
          toast.error('OOps something went wrong, please try again.', {duration: 2000, position: 'bottom-center'})
          },
      );
  };
                
  const handleSendEmail = (e) => {
      e.preventDefault();
      if(!messageDetails.name || !messageDetails.email || !messageDetails.country ){
          console.log(messageDetails);
          return toast.warning('Please complete the form to continue', {position: 'bottom-center', duration: 2000})
      }
      else if(!messageDetails.email.includes('@')  || !messageDetails.email.includes('.') || messageDetails.email.length <= 5  ){
          return toast.warning('Please enter a valid email address', {position: 'bottom-center', duration: 2000})
      }
      else {
          // console.log(messageDetails);
          sendEmail(e);
      }
  }





  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 2500);
  }, [])


  return (
    <motion.div
      className="w-[100dvw] bg-black flex flex-col text-white pt-[60px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } }}
      exit={{ opacity: 0 }}
    >
      {/* <Nav /> */}
      
      <header className="landing relative w-full h-[70dvh] pt-10 md:pt-0 md:h-screen bg-black px-[4%] ">
        <img
          src="/assets/AK7A8310-no-bg.png"
          alt=""
          className="hidsden md:block absolute md:h-full md:w-auto bottom-0 left-[50%] translate-x-[-50%]"
        />
        {/* <img
          src="/assets/ruggedman-1-mobile.png"
          alt=""
          className="block md:hidden absolute  md:h-full md:w-auto bottom-0 left-[50%] translate-x-[-50%]"
        /> */}

        <div className="relative w-full h-full flex items-center justify-center ">
          <Popup
            title="Nigerian rapper"
            className={`top-[30dvh] left-[13.5dvw] floating`}
          />
          <Popup title="ACTOR" className={`top-[39dvh] left-[28dvw] floating-2`} />
          <Popup
            title="un peace ambassador"
            className={`top-[75dvh] left-[77dvw] floating-3`}
          />
          <Popup title="humanitarian" className={`top-[31dvh] left-[77dvw] floating-3`} />
          <Popup
            title="un peace ambassador"
            className={`top-[39dvh] left-[63dvw] floating-2`}
          />
          <Popup
            title="Radio show host"
            className={`top-[75dvh] left-[13.5dvw] floating-1`}
          />

          <img
            src="/assets/ruggedman-header.png"
            alt=""
            className="relative z-40 w-full mt-[60%] md:w-[62.5dvw] md:mt-16"
          />
        </div>
        
        <div className=' absolute right-8 top-[50%] translate-y-[-50%] bg-accent hidden md:flex flex-col gap-4 p-2 py-4 rounded-md key'>
          <a href={`#`} className='cursor-pointer'>
            <GrApple color='white' />
          </a>

          <a href={`https://www.facebook.com/Ruggedman.Opomulero?mibextid=ZbWKwLf`} target='_blank' className='cursor-pointer'>
            <ImFacebook2 color='white' />
          </a>

          <a href={`https://www.instagram.com/ruggedybaba?igsh=b2FydGxhcHk3bnJr`} target='_blank' className='cursor-pointer'>
            <FaInstagram color='white' />
          </a>

          <a href={`#`} target='_blank' className='cursor-pointer'>
            <FaSpotify color='white' />
          </a>

          <a href={`https://x.com/RuggedyBaba?t=PSeWnDqxOHQBs1ezATyIgA&s=09`} target='_blank' className='cursor-pointer'>
            <FaTwitter color='white' />
          </a>

          <a href={`https://youtube.com/@ruggedmantv?si=fZWAD1Fzls1zkwoz`} target='_blank' className='cursor-pointer'>
            <FaYoutube color='white' />
          </a>

          <a href={`href="mailto:ruggedy01@gmail.com`}>
            <SiGmail color='white' />
          </a>

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

      <section className="bg-brand_yel1ow">
        <img src="/assets/QR.jpg" alt="" className="w-full" />
      </section>

      <Footer />

      <CentralModal isOpen={showModal} closeModal={()=> setShowModal(false)} >
        <div className='relative z-20  mt-[7.5%] p-8 py-[40px] w-full max-w-[480px]  bg-[#0F0F11] flex flex-col justify-between'>

          <div className="absolute top-3 right-3 flex items-center justify-center cursor-pointer"
            onClick={()=> setShowModal(false)}
          >
            <IoCloseOutline color={`white`} size={35} />
          </div>

          <div className="w-full h-full flex flex-col  text-white text-left drop-shadow-sm">
              <h1 className="font-light text-2xl font-crimson text-center pt-2">
                Newsletter
              </h1>

              <form onSubmit={handleSendEmail} className="w-full flex flex-col gap-3 text-white font-roboto" ref={formRef3}>
                  <aside className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-[10px] font-bold font-nunito'><span className='text-xs'>*</span> NAME</label>
                    <input type="text" name="from_name" id=""  
                      className='h-7 bg-transparent border-b border-white w-full px-4 outline-none rounded-none '
                      value={messageDetails.name} onChange={({target}) => setMessageDetails(prev => ({...prev, name: target.value }))}
                    />
                  </aside>
                  <aside className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-[10px] font-bold font-nunito'><span className='text-xs'>*</span> EMAIL</label>
                    <input type="text" name="from_email" id=""  
                      className='h-7 bg-transparent border-b border-white w-full px-4 outline-none rounded-none '
                      value={messageDetails.email} onChange={({target}) => setMessageDetails(prev => ({...prev, email: target.value }))}
                    />
                  </aside>
                  <aside className='flex flex-col gap-1'>
                    <label htmlFor="name" className='text-[10px] font-bold font-nunito'><span className='text-xs'>*</span> CHOOSE COUNTRY</label>
                    <input type="text" name="from_country" id=""  
                      className='h-7 bg-transparent border-b border-white w-full px-4 outline-none rounded-none '
                      value={messageDetails.country} onChange={({target}) => setMessageDetails(prev => ({...prev, country: target.value }))}
                    />
                  </aside> 
                  <h2 className='font-nunito text-[10px]' >SUBSCRIBE TO EMAIL UPDATES FROM:</h2>   
                  <div className="flex flex-row items-center gap-2">
                    <input type="checkbox" name=""className="accent-black w-4 h-4 cursor-pointer" />
                    <p className="text-sm font-crimson">You approve to get newsletter from Ruggedman</p>
                  </div>
                  <p className="text-left font-nunito text-[10px] uppercase">
                    Emails will be sent by or on behalf of Universal Music Group 2220
                    Colorado Avenue, Santa Monica, CA 90404 (310) 865-4000. You may
                    withdraw your consent at any time. Privacy Policy /  <br />
                    do not sell my personal information  
                  </p>              
                  <a  href="mailto:ruggedy01@gmail.com" className='text-white font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com or +234703131979</a>
                  <button type='submit' className='self-start text-white  text-xs font-nunito border-b border-white mt-1 ' onClick={handleSendEmail}>
                      SUBMIT
                  </button>
              </form>
          </div>
        </div>
      </CentralModal>
    </motion.div>
  );
}

export default Landing