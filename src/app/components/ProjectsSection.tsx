import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const ProjectsSection: React.FC = () => {
  const { t } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const creativeProjects = [
    {
      title: t('projects.creative.1'),
      image: 'https://images.unsplash.com/photo-1740059020488-ba2541d7f907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY5MDE2Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: t('projects.creative.2'),
      image: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc2OTA1MjQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: t('projects.creative.3'),
      image: 'https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2OTEwMTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: t('projects.creative.4'),
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY5MDMxNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const webProjects = [
    {
      title: t('projects.web.1'),
      image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY5MTAyODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: t('projects.web.2'),
      image: 'https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2OTEwMTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
    },
    {
      title: t('projects.web.3'),
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MDU5MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['WordPress', 'PHP', 'MySQL'],
    },
    {
      title: t('projects.web.4'),
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY5MDMxNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'Firebase', 'PWA'],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % creativeProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + creativeProjects.length) % creativeProjects.length);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    const swipeThreshold = 50;

    if (deltaX <= -swipeThreshold) {
      nextSlide();
    } else if (deltaX >= swipeThreshold) {
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
      
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
            {t('projects.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white">
            {t('projects.title')}
          </h2>
        </motion.div>

        {/* Creative Projects Slider */}
        <div className="mb-20">
          <h3 className="text-2xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-8">
            {t('projects.creative.title')}
          </h3>

          <div className="relative">
            {/* Slider */}
            <div className="overflow-hidden rounded-2xl mx-auto w-full max-w-[420px] sm:max-w-none">
              <motion.div
                className="flex w-full touch-pan-x"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {creativeProjects.map((project, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 relative aspect-square sm:aspect-[4/3] lg:aspect-[16/9]"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-['Montserrat_Alternates'] font-bold text-white">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-violet-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Pagination dots */}
              <div className="flex gap-2">
                {creativeProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-7 sm:w-8 bg-violet-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-violet-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Web Projects Grid */}
        <div>
          <h3 className="text-2xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-8">
            {t('projects.web.title')}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, rotateY: 5 }}
                className="group relative rounded-xl overflow-hidden transition-all duration-300"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  perspective: 1000,
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
                }}
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-['Montserrat_Alternates'] font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-white text-xs rounded-full font-['Inter']"
                        style={{
                          background: 'rgba(139, 92, 246, 0.8)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
