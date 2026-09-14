import { useEffect, useState } from 'react'

const roles = ['Full Stack Engineer', 'React Developer', 'API Builder', 'Product-minded Developer']

export default function RoleTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="role-ticker" aria-live="polite">
      <span key={roles[index]}>{roles[index]}</span>
    </span>
  )
}
