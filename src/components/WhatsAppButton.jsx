import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';

export const WhatsAppButton = () => {
  const { t } = useLanguage();
  const whatsappMessage = salonConfig.whatsappTemplate.replace(
    '{salonName}',
    salonConfig.businessInfo.name
  );

  const whatsappUrl = `https://wa.me/${salonConfig.businessInfo.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      title={t('common.chatOnWhatsapp')}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};
