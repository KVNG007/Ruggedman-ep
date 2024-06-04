import React from 'react'

export const Footer2= () => {
    return (
        <footer className='relative bg-black'>
            <div className='relative z-20 h-[100dvh] w-full bg-black/90 flex flex-col justify-between'>

                <div className="w-full h-full flex flex-col px-[30px]  items-center justify-center">
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
                        
                        <a href='#' className='text-brand_yellow font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com or +234703131979</a>
                        <button className='self-start text-brand_yellow font-nunito border-b border-brand_yellow mt-1 '>
                            SUBMIT
                        </button>
                    </section>
                </div>

                <div className="w-full border-t-none md:border-t-[0.1px] px-[25px] border-white py-4 text-[10px] copy flex items-center justify-center">
                    <h3 className="text-white uppercase font-nunito flex flex-wrap md:flex-row  items-center justify-center gap-3 font-light">
                        <span>Copyright ruggedman &copy;</span> <span>Privacy Policy</span> <span>Terms & Conditions</span> <span>Cookie Choices</span> Do Not Sell My Personal Information
                    </h3>
                </div>
            </div>
            
            <h1 className="absolute z-10 left-0 bottom-2 text-[4em] md:text-[8em] font-semibold font-crimson text-brand_yellow">
                Newsletter
            </h1>
      </footer>
    )
  }

const Footer = () => {
  return (
    <footer className='relative bg-black'>
        <div className='relative z-20 h-[100dvh] w-full  bg-black/90 flex flex-col justify-between'>

            <div className="w-full h-full px-[30px] flex flex-col  items-center justify-center">
                <h1 className="font-bold font-crimson text-[3em] text-center md:text-[3.8em] text-brand_yellow">
                    Booking & Enquires
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
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito'><span className='text-red-500 text-base'>*</span> EVENT</label>
                        <input type="text" name="name" id=""  className='h-6 bg-white w-full px-4 outline-none '/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito'><span className='text-red-500 text-base'>*</span> COUNTRY</label>
                        <input type="text" name="name" id=""  className='h-6 bg-white w-full px-4 outline-none '/>
                    </aside>
                    <a href='#' className='text-brand_yellow font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com or +234703131979</a>
                    <button className='self-start text-brand_yellow font-nunito border-b border-brand_yellow mt-1 '>
                        SUBMIT
                    </button>
                </section>
            </div>

            <div className="w-full border-t-none md:border-t-[0.1px] px-[25px] border-white py-4 text-[10px] copy flex items-center justify-center">
                <h3 className="text-white uppercase font-nunito flex flex-wrap md:flex-row  items-center justify-center gap-3 font-light">
                    <span>Copyright ruggedman &copy;</span> <span>Privacy Policy</span> <span>Terms & Conditions</span> <span>Cookie Choices</span> Do Not Sell My Personal Information
                </h3>
            </div>
        </div>
        
        <h1 className="absolute z-10 left-0 bottom-2 text-[4em] md:text-[8em] font-semibold font-crimson text-brand_yellow">
            Booking & Enquires
        </h1>

    </footer>
  )
}

export default Footer