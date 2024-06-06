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
import { RuggedIcon } from '../../Components/Icons';







const TMSE = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);
    
    const slides = [
        { key: 'ookan-overlay', id : 'ookan', link: '/assets/tmse-cover.jpg', content: {release_date: '2005', album_name: 'Thy Album Come', link: '' } },
        { key: 'eeji-overlay', id : 'eeji', link: '/assets/tmse-cover.jpg', content: {release_date: '2017', album_name: 'Rugeddy Baba', link: '' } },
        { key: 'eerin-overlay', id : 'eerin', link: '/assets/tmse-cover.jpg', content: {release_date: '2016', album_name: 'Money Making Music', link: '' } },
        { key: 'aarun-overlay', id : 'aarun', link: '/assets/tmse-cover.jpg', content: {release_date: '2024', album_name: 'Situation EP', link: '' } }
    ];


  return (
    <div className='flex flex-col h-max'>

        <section className="relative h-max w-[100dvw] flex flex-col bg-white  pt-[70px]  md:pt-[50px]">
            <h1 className="text-[3em] h-max md:text-[3em] font-bold font-nunito  text-brand_yellow text-center leading-[1em] px-[30px] my-10 drop-shadow-xl">
                The <br /> Michael Stephens <br /> Experiment
            </h1>

            <div className="w-full h-full flex flex-col md:flex-row bg-white text-black">
                <aside className="w-full md:w-[40%] bg-black h-full flex items-end justify-start">
                    <img
                    src="/assets/AK7A8305-Edit.jpg"
                    alt=""
                    className="w-[82%] "
                    />
                </aside>

                <aside className="w-full h-auto md:w-[66%] md:pl-[40px] h-ffull flex items-center justify-center font-nunito">
                    <article className="flex flex-col items-center justify-center gap-4 md:gap-10 py-6 md:py-0  px-[30px] md:pr-[100px] md:pl-0">
                        <section className="flex flex-col gap-1">
                            <h3 className='text-accent font-bold'>RuggedMan Set to Drop Highly Anticipated EP "T.M.S.E" on June 7th, 2024</h3>
                            <p className="text-[15px] leading-6">
                                
                                <span className="text-brand_yellow font-bold">Lagos, Nigeria </span>– May 30, 2024 – Renowned Nigerian rapper and music producer, RuggedMan, is
                                thrilled to announce the release of his new EP titled <span className="font-black"> "T.M.S.E" </span>(The Michael Stephens
                                Experiment) on June 7, 2024. This EP marks another milestone in RuggedMan's illustrious
                                career, showcasing his evolution as an artist and his continued commitment to delivering
                                high-quality music.
                            </p>
                        </section>

                        <section className="flex flex-col gap-1">
                            <h3 className='text-accent font-bold'>A Stellar Lineup of Collaborations</h3>
                            <p className="text-[15px] leading-6">                            
                                <span className="text-brand_yellow font-bold">"T.M.S.E" </span>                            
                            features collaborations with some of the industry's brightest talents, including Jesse
                                Jagz, Eva Alordiah and Mista Styles (formerly Freestyle of Trybesmen). The track "OG," a
                                standout single from the EP, is expected to be a fan favorite, blending powerful lyrics with
                                captivating beats that reflect RuggedMan's unique style and versatility.
                                The EP has four tracks which include <span className="font-black">Og</span>, <span className="font-black">One man ft MCdow</span>, <span className="font-black">Gara</span> and
                                <span className="font-black"> Found Love</span> .
                            </p>
                        </section>

                    </article>
                </aside>
            </div>

        </section>        

        <section className="  h-[100dvh] md:h-[150dvh] w-[100dvw] flex flex-col bg-white  ">

            <div className="relative tmse w-full h-full flex items-center justify-center bg-light_green text-black">
            {/* <img
                src="/assets/tmse-cover.jpg"
                alt=""
                className="h-[90%] absolute bottom-0 left-[50%] translate-x-[-50%] "
            /> */}

            <RuggedIcon className={`w-full max-w-[85dvw] relative z-[55] `} />
            </div>
        </section>

        <section className="relative night-out h-max md:h-[120dvh] w-[100dvw] flex flex-col">
            <div className="flex flex-col w-full h-full bg-black/80 pt-8">
                <h1 className="text-[3em] h-max md:text-[3em] font-bold font-nunito  text-brand_yellow text-left leading-[1em] px-[50px] mb-[-40px] mt-8 drop-shadow-xl">
                    Spot Light
                </h1>
                <div className="w-full h-full flex flex-col-reverse md:flex-row  text-white">
                    <aside className="w-full md:w-[60%] pl-[30px] pr-[30px] md:pl-[60px] md:pr-0 py-4 md:py-0 h-full flex items-center justify-start font-nunito">
                        <article className="flex flex-col gap-8 max-w-[5ssd00px] ">
                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>About RuggedMan</h3>
                                <p className="text-[15px] leading-6">
                                    A graduate of Political Science from Lagos State University (LASU), Ọ̀jọ́, RuggedMan began his
                                    journey in music in 1999. He quickly made a name for himself by producing his own songs and
                                    releasing two well-received tracks that year. Over the years, RuggedMan has solidified his
                                    position as a leading figure in the Nigerian music scene, becoming the most featured rapper in
                                    Nigeria. His albums, all released under his personal label, Rugged Records, have consistently
                                    topped charts and won numerous accolades.
                                </p>
                                <p className="text-[15px] leading-6">
                                    Beyond his music career, RuggedMan is also known for his role as the host of the prestigious NB
                                    Plc sponsored Star Quest Reality TV Talent Show, which he hosted from 2009 to 2011.
                                </p>
                            </section>

                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>Exclusive Access and Streaming</h3>
                                <p className="text-[15px] leading-6">                                    
                                    "T.M.S.E" will be available on all major streaming platforms, including Spotify, Apple Music, and
                                    YouTube. For those seeking exclusive content, there will be special releases available via email.
                                    Fans are encouraged to subscribe to RuggedMan's mailing list for these exclusive updates here:
                                    <a href="https://www.iamruggedman.com/" target='_blank' className='text-accent font-semibold'> www.iamruggedman.com</a>
                                </p>
                                {/* <p className="text-[15px] leading-6">
                                    Beyond his music career, RuggedMan is also known for his role as the host of the prestigious NB
                                    Plc sponsored Star Quest Reality TV Talent Show, which he hosted from 2009 to 2011.
                                </p> */}
                            </section>

                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>Listening Party:</h3>
                                <p className="text-[15px] leading-6">                                    
                                    There will be an exclusive listening and release party for Ruggedman's highly anticipated EP,
                                    "T.M.S.E," scheduled for June 7th, 2024. The event will take place at the esteemed Vaniti Lagos
                                    in Victoria Island. This star-studded celebration will feature appearances by renowned
                                    personalities such as Iyabo Ojo, Mr Macaroni, King Uzi, Eedris Abdulkareem, Durella, Mummy
                                    Wa, and Specikinging. It will be an unforgettable evening of exceptional music, entertainment,
                                    and festivities.
                                </p>
                                <p className="text-[15px] leading-6">
                                    Beyond his music career, RuggedMan is also known for his role as the host of the prestigious NB
                                    Plc sponsored Star Quest Reality TV Talent Show, which he hosted from 2009 to 2011.
                                </p>
                            </section>



                        </article>
                    </aside>

                <aside className="w-full md:w-[40%] h-full flex items-end justify-end">
                    <img src="/assets/rugged-bw.png" alt="" className=" w-full md:w-[90%] " />
                </aside>
                </div>

            </div>
        </section>

        <section className="audit w-full flex flex-col items-center px-[2.5%] py-[70px] bg-accent text-white">
            <h2 className="flex flex-row items-start justify-center gap-4 font-Noto text-lg md:text-[1.5em] max-kw-[600px] leading-[1.2em] h-max overflow-hidden">
            <img
                src="/assets/quotes.png"
                alt=""
                className="mb-8 w-14 rotate-180"
            />{" "}
                <span className='mt-2 leading-8'>The EP is aptly titled because it is a body of work where I decided to experiment with different
                genres of music. It is not the usual rap I am known for, rather it is a way to show the side of
                Ruggedman people aren’t familiar with, I achieved this with the support of amazing song
                writers like Specikinging and Mbryo. This will be understood in the track “Found Love” where
                Fiokee displayed his guitarist art.</span>
            <img src="/assets/quotes.png" alt="" className="mb-8 w-14" />
            </h2>

            <cite className="w-full text-right">RuggedMan</cite>

            <h2 className="text-xs md:text-lg font-Buka text-center mt-8 md:mt-2">
                For more information, interviews, or media inquiries, please contact: Veronica Sule
            </h2>

            <button  className="w-[180px] md:w-[200px] h-[40px] md:h-[40px] text-white tracking-widest text-sm md:text-xs font-medium font-Buka mt-4  flex items-center uppercase
                justify-center rounded-sm bg-black transition-all ease-out duration-300"
            >
            CONTACT US
            </button>
        </section>

        <section className="relative music w-full h-screen px-[30px] bg-white flex flex-col items-center justify-around md:justify-center">
            <h1 className="text-[3em] md:text-[4em] font-[600] font-crimson text-brand_yellow mb-4">
                Tracks
            </h1>

            <Swiper
            className="w-full h-[65dvh]"
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
            <div className="h-max absolute z-20 bottom-0 left-[50%] translate-x-[-50%] md:translate-x-[0%] flex flex-row items-center md:flex-col gap-3  md:gap-[2px]">
                <div className="prev eswiper-button-prev h-8 md:h-10 aspect-square bg-black flex items-center justify-center">
                <BsChevronLeft size={25} color="white" />
                </div>

                <div className="next eswiper-button-next h-8 md:h-10 aspect-square bg-black flex items-center justify-center">
                <BsChevronRight size={25} color="white" />
                </div>
            </div>
            </Swiper>

            <div className="flex flex-row items-center justify-center gap-2 -translate-y-[40px] md:translate-y-0 md:mt-4">
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
        </section>

        <section className="relative ep-info h-max md:h-[120dvh] w-[100dvw] flex flex-col">
            <div className="flex flex-col w-full h-full bg-black/90 pt-8">
                <h1 className="text-[3em] h-max md:text-[2em] font-bold font-nunito  text-brand_yellow text-right leading-[1em] px-[50px]  mt-8 drop-shadow-xl">
                EP PRESS RELEASE FOLLOW-UP
                </h1>
                <div className="w-full h-full flex flex-col-reverse md:flex-row  text-white">

                    <aside className="w-full md:w-[40%] h-auto flex items-center justify-start">
                        <img src="/assets/AK7A8310-Edit.jpg" alt="" className=" w-full md:w-[90%] " />
                    </aside>

                    <aside className="w-full md:w-[60%] pr-[30px] pl-[30px] md:pr-[60px] md:pl-0 py-4 md:py-0 h-full flex items-center justify-start font-nunito">
                        <article className="flex flex-col gap-8 max-w-[5ssd00px] ">
                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>T.M.S.E.</h3>
                                <p className="text-[15px] leading-6">
                                    On June 7, 2024, RuggedMan is scheduled to release the much anticipated EP "T.M.S.E."
                                    Lagos, Nigeria – June 4, 2024 – Following the much-anticipated release of RuggedMan's EP
                                    "T.M.S.E" (The Michael Stephens Experiment) today, the Nigerian music scene is abuzz with
                                    excitement and anticipation. This EP represents a significant milestone in RuggedMan's
                                    illustrious career, showcasing his evolution as an artist and his unwavering commitment to
                                    delivering exceptional music.
                                </p>
                            </section>

                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>Exploring New Horizons</h3>
                                <p className="text-[15px] leading-6">                                    
                                    RuggedMan breaks new ground with "T.M.S.E," experimenting with a wide variety of musical
                                    styles and working with some of the best musicians in the business. With tracks like "OG" and
                                    "Found Love," which have deep melodies and passionate lyrics, RuggedMan's creative vision
                                    and multidimensional artistry are shown to audiences on each EP release.
                                </p>
                            </section>

                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>A Night to Remember</h3>
                                <p className="text-[15px] leading-6">
                                    On June 7, 2024, RuggedMan will have a special listening session and release party at
                                    Victoria Island's renowned Vaniti Lagos to commemorate the publication of "T.M.S.E."
                                    Renowned figures such Iyabo Ojo, Mr. Macaroni, King Uzi, Eedris Abdulkareem,
                                    Durella, Mummy Wa, and Specikinging would make appearances at the star-studded
                                    event. It will be a night to remember as guests are treated to an amazing evening of
                                    music, entertainment, and celebrations.
                                </p>
                            </section>

                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>Reflecting on the EP</h3>
                                <p className="text-[15px] leading-6">                                
                                    In a statement about the EP, RuggedMan shared his inspiration behind the project, stating, "The
                                    EP is aptly titled because it is a body of work where I decided to experiment with different
                                    genres of music. It is not the usual rap I am known for, rather it is a way to show the side of
                                    Ruggedman people aren’t familiar with."
                                </p>
                            </section>

                            <section className="flex flex-col gap-1">
                                <h3 className='font-bold text-brand_yellow'>Continuing the Legacy</h3>
                                <p className="text-[15px] leading-6">                                    
                                    RuggedMan is still dedicated to uplifting and empowering the upcoming generation of
                                    musicians, even as he celebrates the release of "T.M.S.E." RuggedMan is making waves and
                                    leaving a lasting impression on the Nigerian contemporary music scene and beyond with his
                                    timeless style and steadfast passion to his profession.
                                </p>
                            </section>



                        </article>
                    </aside>

                </div>

            </div>
        </section>

        <section className="audit w-full flex flex-col items-center px-[2.5%] py-[30px] bg-accent text-white">
            <h2 className="flex flex-row items-start justify-center gap-4 font-Noto text-lg md:text-[1.5em] max-kw-[600px] leading-[1.2em] h-max overflow-hidden">
                <span className='mt-2 leading-8'>For more information, interviews, or media inquiries about the "T.M.S.E" EP, please contact: Veronica Sule.</span>
            </h2>

            <button  className="w-[180px] md:w-[200px] h-[40px] md:h-[40px] text-white tracking-widest text-sm md:text-xs font-medium font-Buka mt-4  flex items-center uppercase
                justify-center gap-4 rounded-sm bg-black transition-all ease-out duration-300"
            >
                CONTACT US
                <SiGmail color='white' size={17.5} />
            </button>
        </section>
        

        <Footer />
    </div>
  )
}

export default TMSE


