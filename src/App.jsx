import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CasualSection from './components/CasualSection';
import ProfessionalSection from './components/ProfessionalSection';
import FeaturedImage from './components/FeaturedImage';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

import {
  heroData,
  casualProjects,
  professionalProjects,
  featuredData,
  contactData
} from './data/portfolio';

export default function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0
  });

  const handleOpenLightbox = (itemsList, index) => {
    setLightboxState({
      isOpen: true,
      items: itemsList,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxState((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  return (
    <div className="min-h-screen relative text-[#0c0c0c] selection:bg-[#ffd000] selection:text-[#0c0c0c]">
      {/* Halftone fixed vignette overlay */}
      <div className="halftone-overlay" />

      {/* Navigation Header */}
      <Navbar heroName={heroData.name} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero data={heroData} />

        {/* Casual Designing Section */}
        <CasualSection
          projects={casualProjects}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Professional Designing Section */}
        <ProfessionalSection
          projects={professionalProjects}
          onOpenProProject={handleOpenLightbox}
        />

        {/* Featured Image 4:3 Section */}
        <FeaturedImage
          data={featuredData}
          onOpenLightbox={handleOpenLightbox}
        />
      </main>

      {/* Social / Contact Footer */}
      <Footer data={contactData} />

      {/* Global Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        items={lightboxState.items}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
