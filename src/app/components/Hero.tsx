import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-12 md:pt-32 md:pb-0 bg-white dark:bg-[#050505] transition-colors">
      
      {/* Light Mode Premium Background Image */}
      <div className="absolute inset-0 z-0 block dark:hidden pointer-events-none">
        <div className="absolute inset-0 bg-white/70 z-10" /> {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white z-10" /> {/* Soft fade to match section blend */}
        <img 
          src="https://images.unsplash.com/photo-1764437835882-19c6e06776bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
          alt="Light Background Texture" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Dark Mode Premium Background Image */}
      <div className="absolute inset-0 z-0 hidden dark:block pointer-events-none">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505] z-10" /> {/* Vignette fade to match section blend */}
        <img 
          src="https://images.unsplash.com/photo-1715936745853-2fbed4fb33ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
      </div>

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#8B5CF6] opacity-[0.04] dark:opacity-[0.06] rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8B5CF6] opacity-[0.03] dark:opacity-[0.05] rounded-full blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-5xl w-full"
        >
          {/* Mobile: 3-line layout, Desktop: original */}
          <h1 className="font-montserrat font-bold leading-[1.2] md:leading-[1.1] text-black dark:text-white mb-10 uppercase text-center break-words w-full">
            {/* Mobile Layout */}
            <span className="block md:hidden text-[clamp(26px,6vw,28px)] tracking-tight">
              <span className="block text-black dark:text-white">DESIGN STRATÉGIQUE</span>
              <span className="block text-[#8B5CF6] drop-shadow-[0_0_25px_rgba(139,92,246,0.2)] my-2">AU SERVICE DE LA</span>
              <span className="block text-black dark:text-white">PERFORMANCE DIGITALE</span>
            </span>

            {/* Desktop Layout */}
            <span className="hidden md:block text-[clamp(2rem,6vw,5.5rem)]">
              <span className="block">{t('hero.title.1')}</span>
              <span className="block text-[#8B5CF6] drop-shadow-[0_0_25px_rgba(139,92,246,0.2)]">{t('hero.title.2')}</span>
              <span className="block">{t('hero.title.3')}</span>
            </span>
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mt-4 w-full md:w-auto md:mt-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto md:min-w-[180px] h-[52px] md:h-auto shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.23)] transition-shadow"
            >
              {t('hero.cta.projects')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto md:min-w-[180px] h-[48px] md:h-auto"
            >
              {t('hero.cta.start')} <Rocket className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-black/20 to-transparent dark:via-white/20" />
      </motion.div>
    </section>
  );
}
