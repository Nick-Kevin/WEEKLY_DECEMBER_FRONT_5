import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SetElementOnScroll from './components/animations/SetElementOnScroll'
import { Fade, Slide } from 'react-reveal'
import StickyNavbar2 from './components/sections/header/StickyNavbar2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StickyNavbar2/>
      <div className='mb-[200vh] mt-20'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <SetElementOnScroll>
          <h1>
            <Fade left>
              Vite + React
            </Fade>
          </h1>
      </SetElementOnScroll>
      <div className='h-[200vh]'>
      </div> 
      <SetElementOnScroll>        
        <Slide bottom>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Slide>
      </SetElementOnScroll>  
      <div className='h-[200vh]'>
      </div>    
    </>
  )
}

export default App
