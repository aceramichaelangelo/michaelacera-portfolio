import React from 'react';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { WebProjects } from '@/components/sections/WebProjects';
import { MobileProjects } from '@/components/sections/MobileProjects';
import { Timeline } from '@/components/sections/Timeline';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="relative bg-[#030014] text-slate-100 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <ScrollProgress />
      <Navbar />

      {/* Main landing container */}
      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <WebProjects />
        <MobileProjects />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
