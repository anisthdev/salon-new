import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useDarkMode } from '../hooks/useDarkMode';
import { salonConfig } from '../config/salonConfig';
import { formatSalonName } from '../utils/salonNameFormatter';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();
  const { t, toggleLanguage, currentLanguage } = useLanguage();
  const { salonName } = useParams();

  const displayName = salonName ? formatSalonName(salonName) : salonConfig.businessInfo.name;

  const navLinks = [
    { label: 'header.home', href: '#home' },
    { label: 'header.services', href: '#services' },
    { label: 'header.gallery', href: '#gallery' },
    { label: 'header.contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        className="fixed w-full top-0 z-40 bg-white dark:bg-gray-950 shadow-sm transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <a href="#" className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-400">
                {displayName}
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {t(link.label)}
                </motion.a>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Toggle dark mode"
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className="px-3 py-2 text-sm font-medium border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-yellow-50 dark:from-rose-900/20 dark:to-yellow-900/20 text-rose-700 dark:text-rose-300 rounded-lg hover:shadow-md transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentLanguage === 'en' ? 'HI' : 'EN'}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} className="text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} className="text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 space-y-2 px-4">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {t(link.label)}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};
