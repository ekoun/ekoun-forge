import React from 'react';
import { motion } from 'motion/react';
import { Palette, Code, TrendingUp, Smartphone, Check } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export const ServicesSection: React.FC = () => {
  const { t } = useApp();

  const services = [
    {
      icon: Palette,
      titleKey: 'services.design.title',
      descKey: 'services.design.desc',
      features: [
        'services.design.feat1',
        'services.design.feat2',
        'services.design.feat3',
        'services.design.feat4',
      ],
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Code,
      titleKey: 'services.web.title',
      descKey: 'services.web.desc',
      features: [
        'services.web.feat1',
        'services.web.feat2',
        'services.web.feat3',
        'services.web.feat4',
      ],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      titleKey: 'services.strategy.title',
      descKey: 'services.strategy.desc',
      features: [
        'services.strategy.feat1',
        'services.strategy.feat2',
        'services.strategy.feat3',
        'services.strategy.feat4',
      ],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Smartphone,
      titleKey: 'services.uiux.title',
      descKey: 'services.uiux.desc',
      features: [
        'services.uiux.feat1',
        'services.uiux.feat2',
        'services.uiux.feat3',
        'services.uiux.feat4',
      ],
      gradient: 'from-blue-500 to-violet-600',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-['Inter'] font-semibold tracking-wider mb-4">
            {t('services.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white max-w-3xl mx-auto">
            {t('services.title')}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-8 transition-all duration-300 dark:bg-white/5"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.1)',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-violet-500 to-purple-600" />
              
              {/* Violet glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-4">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 font-['Inter'] mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-200 font-['Inter']"
                    >
                      <Check className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};