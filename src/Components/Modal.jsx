import React, { useState, useEffect } from 'react';


export const CentralModal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null
  const closeModalFromBg = (e) => {
    if (e.target.id == 'bg') closeModal()
  }

  return (
    <div className="fixed w-full h-screen inset-0 z-40 bg-black/40 flex justify-center items-center backdrop-blur-[0px]"
      id='bg'
      onClick={closeModalFromBg}
    >
        {children}
      {/* <div className={`relative bg-white w-full max-w-[380px] md:max-w-[580px]  h-[auto] min-h-[328px] md:min-h-[428px] shadow rounded-md `}>
        

      </div> */}
    </div>
  );
}



const GeneralModal = ({ children, isOpen, closeModal }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModalFromBg = (e) => {
    if (e.target.id == 'bg') closeModal()
  }

  useEffect(() => {
    // console.log(isOpen);

    if(isOpen == true){
      setShowModal(true);
    }
    else {
      setTimeout(() => {
        setShowModal(false)
      }, 375);
    }
  }, [isOpen])
  

  // if (!isOpen) return null

  // else if (isOpen) {
    return (
      <div className={`fixed w-full h-screen inset-0 bg-black/40 flex justify-end items-center backdrop-blur-xs z-30 transition-all ease-in-out duration-75  ${showModal ? ' opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none' }`}
        id='bg'
        onClick={closeModalFromBg}
      >
        <div className={`bg-white absolute top-0 left-[100%]  shadow w-full max-w-[440px] h-full transition-all ease-in-out duration-300 delay-75  ${ isOpen ? 'meuvv' : ''} `} >
          
          {children}
  
        </div>
      </div>
    );
  // }

  
}

export default GeneralModal

