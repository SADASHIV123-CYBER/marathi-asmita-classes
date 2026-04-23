import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Results from './components/Results';
import About from './components/About';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Results />
        <About />
        <Courses />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
}
