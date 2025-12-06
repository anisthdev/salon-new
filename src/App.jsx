import { Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { WorkingHours } from './components/WorkingHours';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <WorkingHours />
        <Testimonials />
        <Location />
        <Footer />
        <WhatsAppButton />
      </div>
    </Suspense>
  );
}

export default App;
