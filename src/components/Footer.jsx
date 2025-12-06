import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

export const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: 'header.home', href: '#home' },
    { label: 'header.services', href: '#services' },
    { label: 'header.gallery', href: '#gallery' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: salonConfig.socialLinks.instagram,
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: salonConfig.socialLinks.facebook,
      label: 'Facebook',
    },
    {
      icon: MessageCircle,
      href: salonConfig.socialLinks.whatsapp,
      label: 'WhatsApp',
    },
  ];

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-serif font-bold mb-3 text-amber-400">
              {salonConfig.businessInfo.name}
            </h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {t(link.label)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.followUs')}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-amber-500/20 text-amber-400 hover:text-amber-300 rounded-full hover:bg-amber-500/40 hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 rounded-full" />

        {/* Bottom Footer */}
        <motion.div
          className="text-center space-y-2 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>{t('footer.copyright')}</p>
          <p>{t('footer.madeWith')}</p>
        </motion.div>
      </div>
    </footer>
  );
};
