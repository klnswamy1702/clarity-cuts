'use client';

import { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import PhotoLab from '@/components/sections/PhotoLab';
import Workflow from '@/components/sections/Workflow';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import VideoLightbox from '@/components/ui/VideoLightbox';

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* Cinematic Hero Section */}
        <Hero onWatchShowreel={() => setShowreelOpen(true)} />

        {/* Dual-Mode Portfolio Showcase */}
        <Portfolio />

        {/* Interactive Before/After AI Photo Lab */}
        <PhotoLab />

        {/* The Clarity Pipeline (Workflow) */}
        <Workflow />

        {/* Services & Client Packages */}
        <Services />

        {/* High-Converting Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Showreel Modal */}
      {showreelOpen && (
        <VideoLightbox
          videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4"
          title="CLARITY CUTS — Official 2024 AI Showreel by Charan"
          onClose={() => setShowreelOpen(false)}
        />
      )}
    </div>
  );
}
