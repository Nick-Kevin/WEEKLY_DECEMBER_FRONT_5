import { useState, useEffect, useRef } from "react";

function SetElementOnScroll ({ children }) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)
  
    useEffect(() => {
      const onWindScroll = () => {
        const element = ref.current      
        if (element) {
          const { top } = element.getBoundingClientRect()
          const isVisible = top < window.innerHeight - element.clientHeight && top > 0
          setIsVisible(isVisible)
        }
      }
  
      window.addEventListener('scroll', onWindScroll)
      return () => {
        window.removeEventListener('scroll', onWindScroll)
      }
    })
  
    return (
      <div ref={ref}>
        {
          isVisible ?
          (
            <>
              {children}
            </>
          ) : ''
        }
      </div>
    )
  }

export default SetElementOnScroll
