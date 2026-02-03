import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from './hooks/useLanguage';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';

import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Agency } from './components/Agency';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import '@/styles/globals.css';

function MainApp() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-black dark:text-white transition-colors duration-300 font-poppins selection:bg-[#8B5CF6] selection:text-white relative overflow-x-hidden">
      {/* Global Ambient Light for Dark Mode */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#8B5CF6] opacity-0 dark:opacity-[0.03] rounded-full blur-[150px] transition-opacity duration-1000" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500 opacity-0 dark:opacity-[0.02] rounded-full blur-[150px] transition-opacity duration-1000" />
      </div>

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <Agency />
            <Services />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
