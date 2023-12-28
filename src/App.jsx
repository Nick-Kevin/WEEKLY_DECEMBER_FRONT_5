import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevealOnScroll from './components/animations/RevealOnScroll'
import SetElementOnScroll from './components/animations/SetElementOnScroll'
import { Bounce } from 'react-reveal'

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
      <SetElementOnScroll>
        <Bounce left>
          <h1>Vite + React</h1>
        </Bounce>
      </SetElementOnScroll>
      <RevealOnScroll>        
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
      </RevealOnScroll>
      <div className='h-96'>
      </div>   
    </>
  )
}

export default App
