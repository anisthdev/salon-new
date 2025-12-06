import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

export const Hero = () => {
  const { t } = useLanguage();

  const whatsappMessage = salonConfig.whatsappTemplate.replace(
    '{salonName}',
    salonConfig.businessInfo.name
  );

  const whatsappUrl = `https://wa.me/${salonConfig.businessInfo.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image - Beautiful Fashion/Beauty Model */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero.png')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Elegant Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-4 md:px-8 lg:px-16">
        <motion.div
          className="text-left max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {salonConfig.businessInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl font-display text-amber-300 mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {salonConfig.businessInfo.tagline}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-100 mb-12 leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.subtitle', 'Experience luxury beauty treatments tailored just for you')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(185, 28, 28, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('common.bookOnWhatsapp')}
            </motion.a>

            {/* View Services CTA */}
            <motion.button
              onClick={() => handleScroll('services')}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta2')}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
