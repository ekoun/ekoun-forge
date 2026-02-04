import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Briefcase, Layers, Image as ImageIcon, Mail } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../hooks/useLanguage';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = ['agency', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open + focus management + close on Escape/hashchange
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    // When opened, move focus to first link for accessibility
    if (isMobileMenuOpen) {
      setTimeout(() => {
        firstLinkRef.current?.focus?.();
      }, 80);
    }

    // Close on Escape key
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    // Close on hash change/navigation to keep menu consistent
    const onHash = () => setIsMobileMenuOpen(false);

    window.addEventListener('keydown', onKey);
    window.addEventListener('hashchange', onHash);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', onHash);
    };
  }, [isMobileMenuOpen]);


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navLinks = [
    { name: t('nav.agency'), href: '#agency', id: 'agency', icon: Briefcase },
    { name: t('nav.services'), href: '#services', id: 'services', icon: Layers },
    { name: t('nav.projects'), href: '#projects', id: 'projects', icon: ImageIcon },
    { name: t('nav.contact'), href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-black/5 dark:border-white/10 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 relative flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-[110]">
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden">
             <img 
               src={logoImg} 
               alt="EKOUN FORGE" 
               className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(139,92,246,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)] transition-all duration-300"
             />
          </div>
          <span className={`font-montserrat font-semibold text-lg md:text-xl tracking-tight transition-colors ${isMobileMenuOpen ? 'text-black dark:text-white' : 'text-black dark:text-white group-hover:text-[#8B5CF6]'}`}>
            EKOUN FORGE
          </span>
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-montserrat text-xs lg:text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative group py-2
                ${activeSection === link.id 
                  ? 'text-[#8B5CF6]' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6]'
                }`}
            >
              {link.name}
              {/* Active/Hover Glow & Underline */}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6] transition-all duration-300 transform origin-center
                ${activeSection === link.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-70'}`} 
              />
              
              {/* Soft Glow Background on Hover */}
              <span className="absolute inset-0 bg-[#8B5CF6]/5 rounded-lg scale-0 group-hover:scale-110 transition-transform duration-300 -z-10" />
            </a>
          ))}
        </nav>
        
        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 relative z-[110]">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-gray-500 hover:text-[#8B5CF6] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-sm font-bold uppercase text-gray-500 hover:text-[#8B5CF6] transition-colors"
          >
            <span>{language}</span>
          </button>
        </div>

        {/* Mobile Menu Button - Hamburger / Close Animation */}
        <button
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className={`md:hidden fixed top-5 right-4 z-[100001] p-2 text-gray-600 dark:text-gray-300 hover:text-[#8B5CF6] transition-colors`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Render mobile menu in a portal to guarantee it is independent of parent containers and always fullscreen */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              role="dialog"
              aria-modal="true"
              id="mobile-menu"
              onClick={(e) => { if (e.target === e.currentTarget) setIsMobileMenuOpen(false); }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-screen h-screen z-[99999] md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col pt-16 sm:pt-24 pb-8 px-6 overflow-hidden touch-pan-y"
            >
              {/* Background Gradient Orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[100px] opacity-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[100px] opacity-5 pointer-events-none" />

              {/* Content wrapper: links scroll, footer stays visible */}
              <div className="flex-1 w-full max-w-sm mx-auto flex flex-col">
                {/* Close button */}
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-900 shadow-sm z-50 projects-close"
                >
                  <X size={20} />
                </button>

                {/* Scrollable links area */}
                <div className="overflow-y-auto w-full py-4 flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      ref={idx === 0 ? firstLinkRef : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 + idx * 0.06, duration: 0.36, ease: "easeOut" }}
                      className="group flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-300 hover:bg-[#8B5CF6]/5"
                    >
                      <div className="p-3 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 shadow-sm">
                        <link.icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-montserrat text-2xl font-bold uppercase tracking-wider text-gray-900 dark:text-white group-hover:text-[#8B5CF6] transition-colors">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Footer (always visible) */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.36 }}
                  className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-white/10 w-full"
                >
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-poppins mb-1">{t('nav.theme')}</span>
                    <button
                      onClick={toggleTheme}
                      aria-label="Toggle theme"
                      className="flex items-center gap-2 text-sm font-semibold font-montserrat uppercase text-gray-900 dark:text-gray-100"
                    >
                      {theme === 'dark' ? (
                        <>
                           <Sun size={18} className="text-[#8B5CF6]" /> {t('nav.mode.light')}
                        </>
                      ) : (
                        <>
                           <Moon size={18} className="text-[#8B5CF6]" /> {t('nav.mode.dark')}
                        </>
                      )}
                    </button>
                  </div>

                  <div className="h-8 w-[1px] bg-gray-200 dark:bg-white/10" />

                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-400 font-poppins mb-1">{t('nav.language')}</span>
                    <button
                      onClick={toggleLanguage}
                      aria-label="Toggle language"
                      className="text-sm font-bold font-montserrat uppercase text-gray-900 dark:text-gray-100 flex items-center gap-2"
                    >
                      {language === 'fr' ? 'Français' : 'English'}
                      <span className="text-[#8B5CF6]">▼</span>
                    </button>
                  </div>
                </motion.div>
              </div>
                
              {/* Footer Actions (raised so visible without scrolling) */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.36 }}
                className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100 dark:border-white/10 w-full"
              >
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-poppins mb-1">{t('nav.theme')}</span>
                  <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="flex items-center gap-2 text-sm font-semibold font-montserrat uppercase text-gray-900 dark:text-gray-100"
                  >
                    {theme === 'dark' ? (
                      <>
                         <Sun size={18} className="text-[#8B5CF6]" /> {t('nav.mode.light')}
                      </>
                    ) : (
                      <>
                         <Moon size={18} className="text-[#8B5CF6]" /> {t('nav.mode.dark')}
                      </>
                    )}
                  </button>
                </div>

                <div className="h-8 w-[1px] bg-gray-200 dark:bg-white/10" />

                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400 font-poppins mb-1">{t('nav.language')}</span>
                  <button
                    onClick={toggleLanguage}
                    aria-label="Toggle language"
                    className="text-sm font-bold font-montserrat uppercase text-gray-900 dark:text-gray-100 flex items-center gap-2"
                  >
                    {language === 'fr' ? 'Français' : 'English'}
                    <span className="text-[#8B5CF6]">▼</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>, document.body
      )}
    </header>
  );
}
