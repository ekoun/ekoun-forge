import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '@/app/context/AppContext';
import logo from '../../assets/logo.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const { t } = useApp();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-center">
        {/* Logo avec animations pulse et glow */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative inline-block"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-violet-500 blur-3xl opacity-50 rounded-full"></div>
            
            {/* Logo personnalisé */}
            <img 
              src={logo} 
              alt="Ekoun Digital Forge" 
              className="relative w-32 h-32 rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Nom de l'agence */}
        <motion.h1
          className="text-3xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          EKOUN DIGITAL FORGE
        </motion.h1>

        {/* Texte de chargement */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 font-['Inter'] flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t('loading.text')}
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ●
          </motion.span>
        </motion.p>

        {/* Barre de progression */}
        <motion.div
          className="w-48 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mx-auto mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-purple-600"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};