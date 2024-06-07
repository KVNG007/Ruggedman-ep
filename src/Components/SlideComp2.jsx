import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const SlideComp2 = ({currentSlide, slide, index, identifier}) => {

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
        <div key={index} className="image-holder h-max md:h-full w-full  flex flex-col md:flex-row items-center justify-center">

            <div className="relative h-[275px]  md:h-full aspect-square flex items-center justify-center">
                <span className={`${slide?.key}`} ></span>

                <p className={`${identifier} h-full w-full `} style={{backgroundImage: `url(${slide?.link})`}}>
                    

                </p>
            </div>


            <div className="bg-white h-[275px] md:h-full aspect-square flex flex-col items-start justify-center text-center md:text-left  pl-0 md:pl-[80px] text-black">
                <div className="w-full flex flex-col items-center md:items-start ">
                    <p className='font-nunito text-xs'>{slide?.content?.release_date}</p>

                    <h2 className={`font-crimson text-[1.75em] w-full text-center md:text-left py-2 relative z-30 bg-white transition-all ease-in-out duration-300 delay-1000
                        ${currentSlide -1 == index ? 'mt-0 mb-0' : 'mt-[-60px] mb-[-50px]'}
                    `}                    
                    >
                        {slide?.content?.album_name}
                    </h2>

                        <p className={`w-[320px] md:w-full max-w-[600px] h-max font-nunito text-xs text-center md:text-left font-semibold transition-all ease-in-out duration-300 delay-500 whitespace-normal 
                            ${currentSlide -1 == index ? 'opacity-100' : 'opacity-0'}
                        `}
                        > 
                            {slide?.content?.description}
                        </p>
                    {/* <div className="w-full flex items-center justify-center md:justify-start mt-5 max-w-300px">
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SlideComp2