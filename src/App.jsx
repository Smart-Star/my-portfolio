import {
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Portfolio,
  Skills,
  TechStack,
} from './components';

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
