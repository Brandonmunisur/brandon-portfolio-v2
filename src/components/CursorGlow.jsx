import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const move = (event) => {
      if (!ref.current) return
      ref.current.style.transform = `translate3d(${event.clientX - 250}px, ${event.clientY - 250}px, 0)`
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
