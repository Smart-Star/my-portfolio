import {
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Portfolio,
  Skillls,
  TechStack,
} from './components';

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Skillls />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
