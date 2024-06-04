import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const SlideComp = ({currentSlide, slide, index, identifier}) => {

    const tl2 = useRef();
    const overlayRef = useRef();
    

    useEffect(() => {
        tl2.current = gsap.timeline({
            paused:true
        })


        //2nd TL
        tl2.current.to(`.${slide?.key}`, {
            width:"0%",
            duration:0.25,
            ease:'expo.inOut'
        }).to(`.${slide?.key}`,{
            width:"100%",
            right:0,
            left: 'unset',
            ease:'expo.inOut'
        }).to(`.${identifier}`,{
            color: "black",
            opacity: 1,
            duration:0,
        })
        .to(`.${slide?.key}`,{
            width:"0%",
            ease:'expo.inOut',
            // duration: 0.25
        })


    }, [])

    useEffect(() => {
        console.log(currentSlide, index, currentSlide == index);

        currentSlide -1 == index ? tl2.current.play() : tl2.current.reverse();

    }, [currentSlide]);


    return (
        <div key={index} className="image-holder h-full w-full  flex flex-col md:flex-row items-center justify-center">
            <div className="relative h-full aspect-square flex items-center justify-center">
                <span className={`${slide?.key}`} ></span>

                <p className={`${identifier} h-full w-full `} style={{backgroundImage: `url(${slide?.link})`}}>
                    

                </p>
            </div>


            <div className="bg-white h-full aspect-square flex flex-col items-start justify-center text-center pl-0 md:pl-[80px] text-black">
                <div className="w-full flex flex-col items-center md:items-start ">
                    <p className='font-nunito text-xs'>Released {slide?.content?.release_date}</p>

                    <h2 className={`font-crimson text-[1.75em] py-2 relative z-30 bg-white transition-all ease-in-out duration-300 delay-1000
                        ${currentSlide -1 == index ? 'mt-0 mb-0' : 'mt-[-60px] mb-[-50px]'}
                    `}                    
                    >
                        {slide?.content?.album_name}
                    </h2>

                    <div className="w-full flex items-center justify-center md:justify-start">
                    <Link className={`w-max font-nunito text-sm font-semibold border-b border-black  transition-all ease-in-out duration-300 delay-500
                        
                        `}
                        > 
                            STREAM / DOWNLOAD
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideComp