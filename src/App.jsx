import { useEffect, useLayoutEffect, useState } from 'react'
import './App.scss'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './Components/Nav'
import AnimatedRoutes from './Components/AnimatedRoutes'


function App() {
  const location = useLocation().pathname;
  const [bg, setBg] = useState('bg-black')

  const body = document.body;

  useEffect(() => {
    if(location == '/') {
      setTimeout(() => {
        body.style.backgroundColor = 'black'
      }, 750);
    }
    else{
      setTimeout(() => {
        body.style.backgroundColor = 'white'
      }, 750);
    }
  }, [location])

  
  return (
    <main className={`App `}>
    {/* <main className={`App ${bg}`}> */}
      <Nav />
      <AnimatedRoutes />
    
    </main>
  )
}

export default App
