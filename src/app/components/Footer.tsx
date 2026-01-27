import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';
import logo from '../../assets/logo.png';
export const Footer: React.FC = () => {
  const { t } = useApp();

  const quickLinks = [
    { key: 'nav.agency', href: '#agency' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const services = [
    'services.design.title',
    'services.web.title',
    'services.strategy.title',
    'services.uiux.title',
  ];

  const legal = [
    { key: 'footer.legal', href: '#' },
    { key: 'footer.privacy', href: '#' },
    { key: 'footer.terms', href: '#' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Ekoun Digital Forge" 
                className="w-12 h-12 rounded-xl shadow-lg"
              />
              <span className="text-lg font-['Montserrat_Alternates'] font-bold">
                EKOUN DIGITAL<br />FORGE
              </span>
            </div>
            <p className="text-gray-400 font-['Inter'] text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-['Montserrat_Alternates'] font-bold mb-4">
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-violet-400 transition-colors font-['Inter'] text-sm"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-['Montserrat_Alternates'] font-bold mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 font-['Inter'] text-sm">
                    {t(service)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-['Montserrat_Alternates'] font-bold mb-4">
              Légal
            </h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors font-['Inter'] text-sm"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 dark:border-gray-900"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-400 font-['Inter']">
            <span>{t('footer.copyright')}</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              <Heart className="w-4 h-4 text-red-500 inline" fill="currentColor" />
            </motion.span>
            <span>{t('footer.copyright.end')}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};