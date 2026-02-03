import React from 'react';
import { motion } from 'motion/react';
import { Palette, Code, TrendingUp, Fingerprint } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Card } from './ui/card';

export function Services() {
  const { t } = useLanguage();

  const services = [
    { 
      icon: Palette, 
      title: t('services.graphic'), 
      desc: t('services.desc.graphic')
    },
    { 
      icon: Code, 
      title: t('services.web'), 
      desc: t('services.desc.web')
    },
    { 
      icon: TrendingUp, 
      title: t('services.strategy'), 
      desc: t('services.desc.strategy')
    },
    { 
      icon: Fingerprint, 
      title: t('services.branding'), 
      desc: t('services.desc.branding')
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold text-3xl md:text-4xl mb-6 text-black dark:text-white"
          >
            {t('nav.services')}
          </motion.h2>
          <div className="w-20 h-1 bg-[#8B5CF6] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-8 group transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center mb-6 group-hover:bg-[#8B5CF6] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#8B5CF6] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-4 text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="font-poppins text-lg text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
