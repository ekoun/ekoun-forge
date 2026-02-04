import React from 'react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from '../hooks/useLanguage';
import { Card } from './ui/card';
import { ExternalLink } from 'lucide-react';
import marifil1 from '../../assets/marifil1.png';
import marilfi2 from '../../assets/marilfi2.png';

// Images
const creativeImages = [
  marifil1,
  marilfi2,
  "https://images.unsplash.com/photo-1759563871371-eb0ec31824a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1760037034804-2dce280659e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
];

const webImages = [
  "https://images.unsplash.com/photo-1717994818193-266ff93e3396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1636777530577-a075553f4520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1717994818193-266ff93e3396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
];

export function Projects() {
  const { t } = useLanguage();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '32px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '24px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
        }
      }
    ]
  }; 

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-montserrat font-semibold text-3xl md:text-4xl mb-6 text-black dark:text-white"
          >
            {t('nav.projects')}
          </motion.h2>
          <div className="w-20 h-1 bg-[#8B5CF6] mx-auto rounded-full" />
        </div>

        {/* Creative Slider */}
        <div className="mb-20">
          <h3 className="font-montserrat font-medium text-2xl mb-8 pl-4 border-l-4 border-[#8B5CF6] text-black dark:text-white">
            {t('projects.creative')}
          </h3>
          <div className="mx-[-10px]">
            <Slider {...sliderSettings}>
              {creativeImages.map((img, idx) => (
                <div key={idx} className="px-4">
                  <a
                    href={img}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('projects.view')}
                    className="relative w-full group overflow-hidden rounded-xl h-[400px] block"
                  >
                    <img src={img} alt={`Project ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="font-montserrat text-white font-bold text-lg tracking-widest border border-white px-6 py-2">
                        {t('projects.view')}
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Web Grid */}
        <div>
          <h3 className="font-montserrat font-medium text-2xl mb-8 pl-4 border-l-4 border-[#8B5CF6] text-black dark:text-white">
            {t('projects.web')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-xl h-[300px] cursor-pointer"
              >
                <img src={img} alt={`Web Project ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="font-montserrat text-white font-bold text-lg">{t('projects.web_project')} {idx + 1}</h4>
                  <p className="font-poppins text-gray-300 text-sm">{t('projects.development')}</p>
                  <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-sm">
                    <ExternalLink className="text-white w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
