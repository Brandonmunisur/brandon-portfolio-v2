import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import StackMarquee from './components/StackMarquee.jsx'
import Projects from './components/Projects.jsx'
import GitHubActivity from './components/GitHubActivity.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CursorGlow from './components/CursorGlow.jsx'

export default function App() {
  return (
    <>
      <CursorGlow />
      <div className="background-grid" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <StackMarquee />
        <Projects />
        <GitHubActivity />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
