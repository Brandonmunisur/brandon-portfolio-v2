import { useReveal } from '../hooks/useReveal.js'
import { ArrowIcon, GithubIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  const ref = useReveal()
  return (
    <section className="contact-section shell reveal" id="contact" ref={ref}>
      <div className="contact-glow" />
      <p className="eyebrow">Let’s build something useful</p>
      <h2>Looking for a full-stack engineer who can think beyond the ticket?</h2>
      <p>I’m open to software engineering roles, collaborative product work and challenging projects where I can contribute across the stack and keep growing.</p>
      <div className="contact-actions">
        <a className="button button-light" href="mailto:brandonmunisur250@gmail.com"><MailIcon /> Email Brandon <ArrowIcon /></a>
        <a className="button button-outline-light" href="https://github.com/Brandonmunisur" target="_blank" rel="noreferrer"><GithubIcon /> View GitHub</a>
      </div>
    </section>
  )
}
