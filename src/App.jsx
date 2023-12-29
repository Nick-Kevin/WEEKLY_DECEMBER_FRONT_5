import './App.css'
import StickyNavbar2 from './components/sections/header/StickyNavbar2'
import illustrations from './assets/images/hero-desktop-a38b0fd77b6c.webp'
import illustrationsMobile from './assets/images/hero-mobile-7163f4f5de41.webp'
import BuildFromHere from './components/sections/main/BuildFromHere'

function App() {
  return (
    <>      
      <div className='relative z-0 top-0 right-0'>
        <img
          src={illustrations}
          className='absolute top-0 left-[67%] hidden sm:block'
          style={{width:'min(1118px, max(100vh, 100vw))'}}
          alt="hero"
        />
        <img
          src={illustrationsMobile}
          className='absolute top-0 w-full block sm:hidden'
          alt="hero"
        />
      </div>
      <StickyNavbar2/>
      <main className='px-4 sm:px-11 lg:px-4'>
        <BuildFromHere/>
      </main> 
    </>
  )
}

export default App
