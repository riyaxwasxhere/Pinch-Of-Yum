import React, { useEffect, useRef } from 'react'
import './Scroller.css'
import gsap from 'gsap'

const Scroller = (props) => {
  const stripRef = useRef(null)

  useEffect(() => {
    const strip = stripRef.current
    const totalWidth = strip.scrollWidth / 2

    gsap.to(strip, {
        x: -totalWidth/2,
        duration: 10,
        ease: "linear",
        repeat: -1,
    })
  }, [])

  return (
    <div id='scroll-wrapper'>
      <div id='scroll-strip' ref={stripRef}>
             <h1 className="scroll-item">BuzzFeed</h1>
             <h1 className="scroll-item">PureFlow</h1>
             <h1 className="scroll-item">BRIT+CO</h1>
             <h1 className="scroll-item">POPSUGAR</h1>
             <h1 className="scroll-item">THE EVERYGIRL</h1>
             <h1 className="scroll-item">kitchen</h1>
             {/* duplicates for seamless loop */}
             <h1 className="scroll-item">BuzzFeed</h1>
             <h1 className="scroll-item">PureFlow</h1>
             <h1 className="scroll-item">BRIT+CO</h1>
             <h1 className="scroll-item">POPSUGAR</h1>
             <h1 className="scroll-item">THE EVERYGIRL</h1>
             <h1 className="scroll-item">kitchen</h1>
        </div>
    </div>
  )
}

export default Scroller
