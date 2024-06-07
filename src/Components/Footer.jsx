import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export const Footer2= () => {
    const formRef2 = useRef();

    const [messageDetails, setMessageDetails] = useState({
        name: '',
        email: '',
        country: ''
    })

    const sendEmail = (e) => {
        e.preventDefault();

        toast.success('Sending response...', {position: 'bottom-center', duration: 2000});

        emailjs
        .sendForm('service_ndejjoo', 'template_qlqd5j9', formRef2.current, {
            publicKey: 'W0g6-fmIquGkzcrwz',
        })
        .then(
            () => {
                console.log('SUCCESS!');
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
    
    return (
        <footer className='relative z-30 bg-black'>
            <div className='relative z-20 h-[100dvh] w-full bg-black/90 flex flex-col justify-between'>

                <div className="w-full h-full flex flex-col px-[30px]  items-center justify-center">
                    <h1 className="font-bold font-crimson text-[3.8em] text-brand_yellow mb-8 md:mb-0">
                        Newsletter
                    </h1>

                    <form onSubmit={handleSendEmail} className="w-full max-w-[480px] flex flex-col gap-2 text-black" ref={formRef2}>
                        <aside className='flex flex-col gap-1'>
                            <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> NAME</label>
                            <input type="text" name="from_name" id="from_name"  className='h-8 py-1  bg-white w-full px-4 outline-none ' value={messageDetails.name} onChange={({target}) => setMessageDetails(prev => ({...prev, name: target.value }))}/>
                        </aside>
                        <aside className='flex flex-col gap-1'>
                            <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> EMAIL</label>
                            <input type="text" name="from_email" id=""  className='h-8 py-1  bg-white w-full px-4 outline-none '  value={messageDetails.email} onChange={({target}) => setMessageDetails(prev => ({...prev, email: target.value }))}/>
                        </aside>
                        <aside className='flex flex-col gap-1'>
                            <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> COUNTRY</label>
                            <input type="text" name="from_country" id=""  className='h-8 py-1  bg-white w-full px-4 outline-none '  value={messageDetails.country} onChange={({target}) => setMessageDetails(prev => ({...prev, country: target.value }))}/>
                        </aside>
                        <a  href="mailto:ruggedy01@gmail.com" className='text-brand_yellow font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com or +234703131979</a>
                        <button type='submit' className='self-start text-brand_yellow font-nunito border-b border-brand_yellow mt-1 ' onClick={handleSendEmail}>
                            SUBMIT
                        </button>
                </form>
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

    const formRef = useRef();

    const [messageDetails, setMessageDetails] = useState({
        name: '',
        email: '',
        country: '',
        phone_number: '',
        event: '',
    })

    const sendEmail = (e) => {
        e.preventDefault();
        toast.success('Sending response...', {position: 'bottom-center', duration: 2000});

        emailjs
        .sendForm('service_kmetm2p', 'template_g5lazwo', formRef.current, {
            publicKey: 'W0g6-fmIquGkzcrwz',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setMessageDetails({
                    name: '',
                    email: '',
                    country: '',
                    phone_number: '',
                    event: '',
                });
                toast.success('Your message has been sent successfully.', {duration: 2000, position: 'bottom-center'})
            },
        (error) => {
            console.log('FAILED...', error.text);
            toast.error('OOps something went wrong, please try again.', {duration: 2000, position: 'bottom-center'})
            },
        );
    };
                  
    const handleSendEmail = (e) => {
        e.preventDefault();
        if(!messageDetails.name || !messageDetails.email || !messageDetails.country || !messageDetails.phone_number ){
            console.log(messageDetails);
            return toast.warning('Please complete the form to continue', {position: 'bottom-center', duration: 2000})
        }
        else if(messageDetails.phone_number.length <= 10 ){
            return toast.warning('Please enter a valid phone number', {position: 'bottom-center', duration: 2000})
        }
        else if(!messageDetails.email.includes('@')  || !messageDetails.email.includes('.') || messageDetails.email.length <= 5  ){
            return toast.warning('Please enter a valid email address', {position: 'bottom-center', duration: 2000})
        }
        else {
            sendEmail(e);
        }
    }

  return (
    <footer className='relative  z-30  bg-black'>
        <div className='relative z-20 h-[100dvh] w-full  bg-black/90 flex flex-col justify-between'>

            <div className="w-full h-full px-[30px] flex flex-col  items-center justify-center">
                <h1 className="font-bold font-crimson text-[3em] text-center md:text-[3.8em] text-brand_yellow leading-10 md:leading-loose">
                    Bookings & Enquires
                </h1>

                <form onSubmit={handleSendEmail} className="w-full max-w-[480px] flex flex-col gap-2 text-black" ref={formRef}>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> NAME</label>
                        <input type="text" name="from_name" id="from_name"  className='h-8 py-1  bg-white w-full px-4 outline-none ' value={messageDetails.name} onChange={({target}) => setMessageDetails(prev => ({...prev, name: target.value }))}/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> EMAIL</label>
                        <input type="text" name="from_email" id=""  className='h-8 py-1  bg-white w-full px-4 outline-none '  value={messageDetails.email} onChange={({target}) => setMessageDetails(prev => ({...prev, email: target.value }))}/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> PHONE</label>
                        <input type="text" name="from_phone_number" id=""  className='h-8 py-1  bg-white w-full px-4 outline-none '  value={messageDetails.phone_number} onChange={({target}) => setMessageDetails(prev => ({...prev, phone_number: target.value }))}/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> EVENT</label>
                        <input type="text" name="from_event" id=""  className='h-8 py-1  bg-white w-full px-4 outline-none '  value={messageDetails.event} onChange={({target}) => setMessageDetails(prev => ({...prev, event: target.value }))}/>
                    </aside>
                    <aside className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xs font-nunito text-white'><span className='text-red-500 text-base'>*</span> COUNTRY</label>
                        <input type="text" name="from_country" id=""  className='h-8 py-1  bg-white w-full px-4 outline-none '  value={messageDetails.country} onChange={({target}) => setMessageDetails(prev => ({...prev, country: target.value }))}/>
                    </aside>
                    <a  href="mailto:ruggedy01@gmail.com" className='text-brand_yellow font-nunito text-[9px] uppercase text-center py-2'>ruggedy01@gmail.com or +234703131979</a>
                    <button type='submit' className='self-start text-brand_yellow font-nunito border-b border-brand_yellow mt-1 ' onClick={handleSendEmail}>
                        SUBMIT
                    </button>
                </form>
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