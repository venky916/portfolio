import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Internship from './components/Internship';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="conatainer mx-auto px-20">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Internship />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
