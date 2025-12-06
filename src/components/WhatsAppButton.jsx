import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { salonConfig } from '../config/salonConfig';
import { formatSalonName } from '../utils/salonNameFormatter';

export const WhatsAppButton = () => {
  const { t } = useLanguage();
  const { salonName } = useParams();

  const displayName = salonName ? formatSalonName(salonName) : salonConfig.businessInfo.name;

  const whatsappMessage = salonConfig.whatsappTemplate.replace(
    '{salonName}',
    displayName
  );

  const whatsappUrl = `https://wa.me/${salonConfig.businessInfo.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      title={t('common.chatOnWhatsapp')}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
        alt="WhatsApp"
        className="w-7 h-7 drop-shadow-sm"
      />
    </motion.a>
  );
};
