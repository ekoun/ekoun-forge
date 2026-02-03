import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import logoImg from '../../assets/logo.png';

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const currentCount = Math.floor(progress * (to - from) + from);
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export function Agency() {
  const { t } = useLanguage();

  const stats = [
    { value: 1, label: t('agency.stats.years'), suffix: "+" },
    { value: 2, label: t('agency.stats.projects'), suffix: "+" },
    { value: 50, label: t('agency.stats.satisfaction'), suffix: "%" },
  ];

  return (
    <section id="agency" className="relative py-24 bg-gray-50 dark:bg-zinc-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="font-montserrat font-semibold text-3xl md:text-5xl mb-8 text-black dark:text-white relative inline-block">
              {t('agency.title')}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#8B5CF6] rounded-full" />
            </h2>
            
            <div className="prose dark:prose-invert max-w-lg">
              <p className="font-['EB_Garamond'] text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 font-medium">
                {t('agency.description')}
              </p>
              <p className="font-poppins text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {t('agency.description.long')}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Large Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-[300px] md:h-[500px] w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-zinc-800 rounded-3xl overflow-hidden border border-white/50 dark:border-white/5 shadow-2xl"
          >
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#8B5CF6] opacity-20 dark:opacity-30 blur-[80px] rounded-full animate-pulse-slow" />
            
            {/* Floating Logo in Black Square */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-8 bg-black rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(139,92,246,0.3)]"
            >
               <img 
                 src={logoImg} 
                 alt="EKOUN FORGE Emblem" 
                 className="w-32 h-32 md:w-48 md:h-48 object-contain"
               />
            </motion.div>

            {/* Decorative Patterns */}
            <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:20px_20px]" />
          </motion.div>

        </div>
      </div>

      {/* Stats Bar - Full Width */}
      <div className="w-full border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-2 md:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="py-8 md:py-16 flex flex-col items-center justify-center text-center group hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors duration-300"
              >
                <div className="font-montserrat font-bold text-3xl md:text-6xl text-[#8B5CF6] mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-poppins font-medium text-xs md:text-lg tracking-wide uppercase text-gray-800 dark:text-gray-200 max-w-[100px] md:max-w-none mx-auto leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
