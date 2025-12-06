import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Gallery data with images from what_we_do directory
  const galleryImages = [
    {
      id: 1,
      url: '/images/what_we_do/spa_and_relaxation_therapy.png',
      alt: 'Spa and Relaxation Therapy',
      category: 'Spa',
      height: 'h-72',
    },
    {
      id: 2,
      url: '/images/what_we_do/professional_makeup_artistry.png',
      alt: 'Professional Makeup Artistry',
      category: 'Makeup',
      height: 'h-80',
    },
    {
      id: 3,
      url: '/images/what_we_do/beautiful_bridal_makeup.png',
      alt: 'Beautiful Bridal Makeup',
      category: 'Bridal',
      height: 'h-72',
    },
    {
      id: 4,
      url: '/images/what_we_do/luxury_nail_art.png',
      alt: 'Luxury Nail Art',
      category: 'Nails',
      height: 'h-64',
    },
    {
      id: 5,
      url: '/images/what_we_do/premium_facial_treatment.png',
      alt: 'Premium Facial Treatment',
      category: 'Facials',
      height: 'h-80',
    },
    {
      id: 6,
      url: '/images/what_we_do/elegant_hair_styling.png',
      alt: 'Elegant Hair Styling',
      category: 'Hair Styling',
      height: 'h-64',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  return (
    <section
      id="gallery"
      className="section-padding bg-white dark:bg-gray-800 transition-colors duration-300"
    >
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
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Gallery Bento Grid (3x3) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => {
            // Define grid positions for bento layout
            let gridClass = '';
            if (index === 0) gridClass = 'md:col-span-2'; // Item 1: spans 2 columns
            if (index === 1) gridClass = 'md:row-span-2'; // Item 2: spans 2 rows
            if (index === 2) gridClass = 'md:row-span-2'; // Item 3: spans 2 rows
            // Items 3, 4, 5 get default 1x1

            return (
              <motion.div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ${gridClass}`}
                variants={itemVariants}
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* Image */}
                <motion.img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="text-white text-center"
                  >
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                    <p className="text-sm font-medium mt-2">{t('common.view')}</p>
                  </motion.div>
                </motion.div>

                {/* Category Label - Elegant Handwritten Typography */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <p className="font-display text-white text-center text-3xl md:text-4xl font-medium tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                    {image.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            autoFocus
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title="Close (ESC)"
            >
              <X size={32} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[80vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <motion.img
                key={selectedImageIndex}
                src={galleryImages[selectedImageIndex].url}
                alt={galleryImages[selectedImageIndex].alt}
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation Buttons */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Previous (LEFT)"
              >
                <ChevronLeft size={32} />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Next (RIGHT)"
              >
                <ChevronRight size={32} />
              </motion.button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
