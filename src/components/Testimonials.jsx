import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

const getTestimonialContent = (testimonial, language) => {
  return {
    text: language === 'hi' ? testimonial.text.hi : testimonial.text.en,
    service: language === 'hi' ? testimonial.service.hi : testimonial.service.en,
  };
};

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <div key="half" className="relative">
          <Star size={16} className="text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export const Testimonials = () => {
  const { t, currentLanguage } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // Duplicate testimonials for infinite seamless scrolling
  const extendedTestimonials = [
    ...salonConfig.testimonials,
    ...salonConfig.testimonials,
  ];
  const totalCards = extendedTestimonials.length;

  // Responsive card width with viewport constraints
  let cardWidth = 280;
  if (viewportWidth >= 768) cardWidth = 300;
  if (viewportWidth >= 1024) cardWidth = 320;

  // Ensure card doesn't exceed 90% of viewport on small screens
  if (viewportWidth < 600) {
    cardWidth = Math.min(cardWidth, viewportWidth * 0.85);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalCards]);

  // Measure container width on mount and resize
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setViewportWidth(containerRef.current.offsetWidth);
      }
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  // Measure card height for proper container sizing
  useEffect(() => {
    const measureCardHeight = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    };

    // Measure after a small delay to ensure card is rendered
    const timer = setTimeout(measureCardHeight, 100);
    window.addEventListener('resize', measureCardHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureCardHeight);
    };
  }, [cardWidth]);

  const gap = 24; // gap-6 = 24px
  const cardWithGap = cardWidth + gap;

  // Calculate offset to center the current testimonial in the viewport
  const cardPosition = currentIndex * cardWithGap;
  const offset = viewportWidth / 2 - cardPosition - cardWidth / 2;

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

        {/* Testimonials Carousel Container */}
        <div className="flex justify-center w-full">
          <div
            ref={containerRef}
            className="w-full max-w-6xl py-8"
            style={{
              overflow: 'hidden',
              minHeight: cardHeight ? `${cardHeight * 1.05 + 64}px` : 'auto'
            }}
          >
            <motion.div
              className="flex gap-6 px-4"
              animate={{ x: offset }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.6,
              }}
            >
              {extendedTestimonials.map((testimonial, index) => {
                const isCenter = index === currentIndex;
                const isFirstCard = index === 0;
                return (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    ref={isFirstCard ? cardRef : null}
                    className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-lg border border-rose-200 dark:border-rose-800/30"
                    style={{ width: cardWidth }}
                    animate={{
                      scale: isCenter ? 1.05 : 0.95,
                      opacity: isCenter ? 1 : 0.6,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 15,
                      duration: 0.6,
                    }}
                  >
                    {/* Rating Stars */}
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base line-clamp-4">
                      "{getTestimonialContent(testimonial, currentLanguage).text}"
                    </p>

                    {/* Testimonial Author */}
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-rose-600 dark:text-rose-400 text-sm">
                        {getTestimonialContent(testimonial, currentLanguage).service}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
