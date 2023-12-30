import { useState, useEffect, useRef } from "react";

function RevealOnScroll ({ children, reveal }) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)
  
    useEffect(() => {
      const onWindScroll = () => {
        const element = ref.current
        if (element) {
          const { top } = element.getBoundingClientRect()
          const isVisible = top < window.innerHeight && top + 150 > 0
          setIsVisible(isVisible)
        }
      }
  
      window.addEventListener('scroll', onWindScroll)
      return () => {
        window.removeEventListener('scroll', onWindScroll)
      }
    }, [])
  
    const classes = `transition-opacity duration-1000 ${reveal}
      ${ isVisible ? 'opacity-100 active' : 'opacity-0' } 
    `
  
    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    )
  }

export default RevealOnScroll