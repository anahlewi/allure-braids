import { MotionConfig } from 'framer-motion';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Marquee from './components/Marquee/Marquee.jsx';
import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import Portfolio from './sections/Portfolio/Portfolio.jsx';
import Book from './sections/Book/Book.jsx';
import Testimonials from './sections/Testimonials/Testimonials.jsx';
import Contact from './sections/Contact/Contact.jsx';
import { clients } from './data/content.js';

export default function App() {
  return (
    // Respects the visitor's OS "reduce motion" setting across every animation.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee items={clients.map((c) => c.name)} />
        <About />
        <Portfolio />
        <Testimonials />
        <Book />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
