import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import TechTicker from './components/TechTicker';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Testimonials from './components/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#06070d' }}>
      <ScrollProgress />
      <CursorSpotlight />
      <Navbar />
      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <TechTicker />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
