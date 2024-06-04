import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // const deviceHeight = useState(window.innerHeight);
  // const pageHeight = useState(document?.body?.offsetHeight)
  const [scrollHeight, setScrollHeight ] = useState(window.scrollY);

  const scrollBackToTop = () => {
    if(  (window.scrollY + (window.innerHeight / 2)) < ( document.body.offsetHeight / 2)  ) {
      // console.log('before the middle');
      // console.log(window.scrollY, (document.body.offsetHeight / 2));
      window.scrollTo({top: document.body.offsetHeight, left: 0, behavior: 'smooth'})
    }
    else if(  (window.scrollY + (window.innerHeight / 2)) > ( document.body.offsetHeight / 2)  ) {
      // console.log('past the middle');
      // console.log(window.scrollY, (document.body.offsetHeight / 2));
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    // console.log('scroll progress is ' + window.scrollY);
    // console.log("device height is " + window.innerHeight);
    // console.log('some div is ' + document?.body?.offsetHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      setScrollHeight(window.scrollY)
    })
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setScrollHeight(window.scrollY);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button className={`fixed z-40 w-6 h-6 flex items-center justify-center bottom-10 right-10 rounded-full shadow-special bg-black transition-all duration-300 ease-out
      ${ Number(scrollHeight + (window.innerHeight / 2)) < Number( document.body.offsetHeight / 2) ? 'rotate-180' : ''}
    `}
       title="scroll to top"
      onClick={scrollBackToTop}
    >
      <BiChevronUp size={30} color="white" />
    </button>
  );
}