import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

export const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === salonConfig.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === salonConfig.testimonials.length - 1 ? 0 : prev + 1
    );
    setAutoplay(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? salonConfig.testimonials.length - 1 : prev - 1
    );
    setAutoplay(false);
  };

  // Get testimonials in carousel order (show 4: 1 before, center, 2 after)
  const getCarouselIndex = (offset) => {
    return (currentIndex + offset + salonConfig.testimonials.length) % salonConfig.testimonials.length;
  };

  return (
    <section className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonial Carousel - Multiple Cards */}
        <div
          className="flex items-center justify-center gap-4 md:gap-6 px-4 overflow-hidden"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Left Card */}
          {salonConfig.testimonials.length > 0 && (
            <motion.div
              className="flex-shrink-0 w-40 bg-white dark:bg-gray-700 rounded-2xl p-5 hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={salonConfig.testimonials[getCarouselIndex(-1)].avatar}
                alt="Testimonial"
                className="w-10 h-10 rounded-full object-cover mb-3 mx-auto"
              />
              <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-3 mb-3">
                "{salonConfig.testimonials[getCarouselIndex(-1)].text.en}"
              </p>
              <p className="font-display text-sm text-rose-600 dark:text-rose-400">
                {salonConfig.testimonials[getCarouselIndex(-1)].name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {salonConfig.testimonials[getCarouselIndex(-1)].service.en}
              </p>
            </motion.div>
          )}

          {/* Center Featured Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex-shrink-0 w-full md:w-96 bg-gradient-to-b from-gray-700 to-gray-800 dark:from-gray-900 dark:to-gray-950 rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ boxShadow: '0 30px 60px rgba(225, 29, 72, 0.2)' }}
            >
              {/* Featured Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <motion.img
                  src={salonConfig.testimonials[currentIndex].avatar}
                  alt={salonConfig.testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 text-white">
                <motion.div
                  className="flex gap-3 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {Array.from({ length: salonConfig.testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>

                <motion.p
                  className="text-sm md:text-base mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "{salonConfig.testimonials[currentIndex].text.en}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-display text-xl text-white mb-1">
                    {salonConfig.testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-300">
                    {salonConfig.testimonials[currentIndex].service.en}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Card */}
          {salonConfig.testimonials.length > 0 && (
            <motion.div
              className="flex-shrink-0 w-40 bg-white dark:bg-gray-700 rounded-2xl p-5 hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={salonConfig.testimonials[getCarouselIndex(1)].avatar}
                alt="Testimonial"
                className="w-10 h-10 rounded-full object-cover mb-3 mx-auto"
              />
              <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-3 mb-3">
                "{salonConfig.testimonials[getCarouselIndex(1)].text.en}"
              </p>
              <p className="font-display text-sm text-rose-600 dark:text-rose-400">
                {salonConfig.testimonials[getCarouselIndex(1)].name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {salonConfig.testimonials[getCarouselIndex(1)].service.en}
              </p>
            </motion.div>
          )}

          {/* Right Arrow - Mobile */}
          <motion.button
            onClick={handleNext}
            className="md:hidden flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="text-gray-700 dark:text-gray-300 w-8 h-8" />
          </motion.button>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Arrow Buttons */}
          <motion.button
            onClick={handlePrev}
            className="p-3 hover:bg-rose-100 dark:hover:bg-rose-900/30 rounded-full transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="Previous"
          >
            <ChevronLeft className="text-rose-600 dark:text-rose-400 w-6 h-6" />
          </motion.button>

          {/* Navigation Dots */}
          <div className="flex gap-2">
            {salonConfig.testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-rose-500 w-8 h-3'
                    : 'bg-gray-300 dark:bg-gray-600 w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <motion.button
            onClick={handleNext}
            className="p-3 hover:bg-rose-100 dark:hover:bg-rose-900/30 rounded-full transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="Next"
          >
            <ChevronRight className="text-rose-600 dark:text-rose-400 w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
