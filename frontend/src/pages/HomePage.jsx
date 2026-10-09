import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIsWelcare from '../components/WhatIsWelcare';
import HowCanWeHelp from '../components/HowCanWeHelp';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsWelcare />
        <HowCanWeHelp />
        <Services />
        <Contact />
      </main>
    </>
  );
}
