import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

const getServiceContent = (service, language) => {
  return {
    name: language === 'hi' ? service.name.hi : service.name.en,
    description: language === 'hi' ? service.description.hi : service.description.en,
  };
};

export const Services = () => {
  const { t, currentLanguage } = useLanguage();

  // Map services to images
  const serviceImageMap = {
    1: '/images/hair_styling.png', // Haircut & Styling
    2: '/images/hair_coloring.png', // Hair Coloring
    3: '/images/bridal_makeup.png', // Bridal Makeup
    4: '/images/facial_treatments.png', // Facial Treatments
    5: '/images/manicure_pedicure.png', // Manicure & Pedicure
    6: '/images/hair_spa.png', // Hair Spa & Treatment
    7: '/images/threading_waxing.png', // Threading & Waxing
    8: '/images/skin_care.png', // Skin Care
  };


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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Floating animation on hover
  const floatingVariants = {
    hover: {
      y: [0, -12, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300"
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
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Masonry Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
          style={{ columnGap: '24px', rowGap: '24px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {salonConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-rose-200 dark:border-rose-800/30 break-inside-avoid h-80"
              style={{ breakInside: 'avoid' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={floatingVariants.hover}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={serviceImageMap[service.id]}
                  alt={service.name.en}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 transition-all duration-300 group-hover:to-black/60" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Service Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                    {getServiceContent(service, currentLanguage).name}
                  </h3>
                  <p className="text-rose-100 text-sm md:text-base mb-3 line-clamp-2">
                    {getServiceContent(service, currentLanguage).description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-rose-300 font-bold text-lg">
                      {service.price}
                    </p>
                    <motion.div
                      className="w-8 h-1 bg-rose-500 rounded-full"
                      whileHover={{ width: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Hover Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundPosition: '200% 0',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg font-medium cursor-pointer"
            whileHover={{ color: '#e11d48', scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {t('services.viewAll')}
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
};
