import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

export const Location = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contact"
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
            {t('location.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('location.subtitle')}
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Map */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-96"
            variants={itemVariants}
            whileHover={{
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            }}
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.3240577039127!2d${salonConfig.location.lng}!3d${salonConfig.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x${salonConfig.location.lng}%2C${salonConfig.location.lat}!2s${encodeURIComponent(salonConfig.businessInfo.address)}!5e0!3m2!1sen!2sin!4v`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Salon Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Address */}
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t('location.address')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {salonConfig.businessInfo.address}
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.a
              href={`tel:${salonConfig.businessInfo.phone}`}
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-amber-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t('location.phone')}
                </h3>
                <p className="text-amber-700 dark:text-amber-400 hover:text-amber-800">
                  {salonConfig.businessInfo.phone}
                </p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${salonConfig.businessInfo.email}`}
              className="flex gap-4"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-amber-600 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {t('location.email')}
                </h3>
                <p className="text-amber-700 dark:text-amber-400 hover:text-amber-800">
                  {salonConfig.businessInfo.email}
                </p>
              </div>
            </motion.a>

            {/* Get Directions Button */}
            <motion.div
              className="pt-4"
              variants={itemVariants}
            >
              <motion.a
                href={salonConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation size={20} />
                {t('location.getDirections')}
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
