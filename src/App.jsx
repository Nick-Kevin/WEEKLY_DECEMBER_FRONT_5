import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current
      if (element) {
        const { top } = element.getBoundingClientRect()
        const isVisible = top < window.innerHeight
        setIsVisible(isVisible)
      }
    }

    window.addEventListener('scroll', onWindScroll)
    return () => {
      window.removeEventListener('scroll', onWindScroll)
    }
  }, [])

  const classes = `transition-opacity duration-1000
    ${ isVisible ? 'opacity-100' : 'opacity-0' } 
  `

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mb-[200vh]'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <RevealOnScroll>
        <h1>Vite + React</h1>
      </RevealOnScroll>      
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
    </>
  )
}

export default App
