import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circle Path length for progress
  const circleLength = 100; // circumference approximated
  const strokeDashoffset = useTransform(scaleX, [0, 1], [circleLength, 0]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Remonter en haut de la page"
        title="Remonter en haut"
        className="relative w-12 h-12 flex items-center justify-center bg-white dark:bg-zinc-900 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
      >
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 36 36"
        >
          {/* Background Circle */}
          <path
            className="text-gray-200 dark:text-zinc-800"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Progress Circle */}
          <motion.path
            className="text-[#8B5CF6]"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="100"
            style={{ pathLength: scaleX }}
          />
        </svg>
        <ArrowUp className="w-5 h-5 text-[#8B5CF6] group-hover:-translate-y-1 transition-transform" />
      </button>
    </motion.div>
  );
}
