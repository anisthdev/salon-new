import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

export const WorkingHours = () => {
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
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
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
            {t('workingHours.title')}
          </h2>
        </motion.div>

        {/* Working Hours Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {salonConfig.workingHours.map((hour, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center border border-rose-200 dark:border-rose-800/30 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{
                boxShadow: '0 10px 40px rgba(225, 29, 72, 0.15)',
              }}
            >
              {/* Discount Badge for Monday */}
              {hour.discount && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  EXTRA DISCOUNT
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <Calendar className="w-8 h-8 text-rose-600" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {hour.day}
              </h3>
              <p className="text-rose-600 dark:text-rose-400 font-medium">
                {hour.hours}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            📞 {salonConfig.businessInfo.phone}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
            📧 {salonConfig.businessInfo.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
