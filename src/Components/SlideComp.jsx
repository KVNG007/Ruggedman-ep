import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const SlideComp = ({currentSlide, index, identifier}) => {
    const tl2 = useRef();
    const overlayRef = useRef();
    

    useEffect(() => {
        tl2.current = gsap.timeline({
            paused:true
        })


        //2nd TL
        tl2.current.to(overlayRef.current, {
            width:"0%",
            duration:0.25,
            ease:'expo.inOut'
        }).to(overlayRef.current,{
            width:"100%",
            right:0,
            left: 'unset',
            ease:'expo.inOut'
        }).to(`.${identifier}`,{
            color: "black",
            opacity: 1,
            duration:0,
        })
        .to(overlayRef.current,{
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
        <div key={index} className="image-holder h-full w-full  flex flex-row items-center justify-center">
            <div className="relative bg-red-500 h-full aspect-square flex items-center justify-center">
                <span className='overlay' ref={overlayRef}></span>
                <p className={`${identifier}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
            </div>
            <div className="bg-purple-200 h-full aspect-square flex items-center justify-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, culpa.</p>
            </div>
        </div>
    )
}

export default SlideComp