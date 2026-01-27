import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AppProvider } from '@/app/context/AppContext';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { AgencySection } from '@/app/components/AgencySection';
import { ServicesSection } from '@/app/components/ServicesSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { AnimatedBackground } from '@/app/components/AnimatedBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950/20 transition-colors duration-300">
        {/* Global animated background */}
        <AnimatedBackground />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          ) : (
            <>
              <Header />
              <main className="relative z-10">
                <Hero />
                <AgencySection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </AppProvider>
  );
}