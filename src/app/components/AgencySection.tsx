import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '@/app/context/AppContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const AgencySection: React.FC = () => {
  const { t } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment1 = 1 / steps;
    const increment2 = 2 / steps;
    const increment3 = 3 / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setStat1(Math.min(5, currentStep * increment1));
      setStat2(Math.min(120, currentStep * increment2));
      setStat3(Math.min(98, currentStep * increment3));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="agency"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-['Inter'] font-semibold tracking-wider mb-4">
            {t('agency.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white">
            {t('agency.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 font-['Inter'] leading-relaxed">
              {t('agency.p1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-['Inter'] leading-relaxed">
              {t('agency.p2')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-['Inter'] leading-relaxed">
              {t('agency.p3')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {Math.round(stat1)}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-['Inter']">
                  {t('agency.stat1.label')}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {Math.round(stat2)}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-['Inter']">
                  {t('agency.stat2.label')}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {Math.round(stat3)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-['Inter']">
                  {t('agency.stat3.label')}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Logo floating */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Placeholder image - Remplaçable */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MDU5MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ekoun Digital Forge Agency"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-purple-600/20 mix-blend-multiply" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 border-4 border-violet-500"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-3xl font-['Montserrat_Alternates'] font-bold">
                    EDF
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};