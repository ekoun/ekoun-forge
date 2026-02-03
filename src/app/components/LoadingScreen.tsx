import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../../assets/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stage, setStage] = useState<'enter' | 'pulse' | 'exit'>('enter');

  useEffect(() => {
    // Sequence management
    const enterTimer = setTimeout(() => setStage('pulse'), 1000);
    const exitTimer = setTimeout(() => setStage('exit'), 3500); // Extended duration
    const completeTimer = setTimeout(() => onComplete(), 4500); // Allow exit animation to finish

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow Effect Background */}
        <motion.div
          className="absolute inset-0 bg-[#8B5CF6] rounded-full blur-[60px] opacity-0"
          animate={{
            opacity: stage === 'pulse' ? [0.1, 0.3, 0.1] : 0,
            scale: stage === 'pulse' ? [0.8, 1.2, 0.8] : 0.5,
          }}
          transition={{
            duration: 2,
            repeat: stage === 'pulse' ? Infinity : 0,
            ease: "easeInOut"
          }}
          style={{ width: '150px', height: '150px', zIndex: 0 }}
        />

        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
          animate={{
            opacity: stage === 'exit' ? 0 : 1,
            scale: stage === 'pulse' ? 1 : stage === 'exit' ? 1.1 : 1, // Pulse handled separately or subtly here
            y: stage === 'exit' ? -20 : 0,
            filter: stage === 'exit' ? 'blur(10px)' : 'blur(0px)',
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="relative z-10"
        >
           <motion.img 
             src={logoImg} 
             alt="EKOUN FORGE" 
             className="w-24 h-24 md:w-32 md:h-32 object-contain"
             animate={{
               scale: stage === 'pulse' ? [1, 1.05, 1] : 1
             }}
             transition={{
               duration: 2,
               repeat: Infinity,
               ease: "easeInOut"
             }}
           />
        </motion.div>
        
        {/* Progress Line */}
        <motion.div 
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-[2px] bg-gray-100 dark:bg-zinc-800 overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 'enter' ? 0 : stage === 'exit' ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="h-full bg-[#8B5CF6]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
