import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useViewMode } from '../contexts/ViewModeContext';
import ViewModeToggle from './ViewModeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const { isSinglePage } = useViewMode();

  const handleNavClick = (sectionId = null) => {
    setIsMobileMenuOpen(false);
    
    if (isSinglePage && sectionId) {
      // Smooth scroll to section in single page mode
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path) => {
    if (isSinglePage) {
      // In single page mode, highlight based on scroll position
      return false; // We could implement scroll-based active states later
    }
    return location.pathname === path;
  };

  const getNavLink = (item) => {
    if (isSinglePage) {
      // In single page mode, return section IDs for smooth scrolling
      const sectionMap = {
        '/': 'home',
        '/about': 'expertise',
        '/projects': 'projects',
        '/contact': 'contact'
      };
      return sectionMap[item.path] || 'home';
    }
    return item.path;
  };

  const handleNavItemClick = (item) => {
    if (isSinglePage) {
      handleNavClick(getNavLink(item));
    } else {
      handleNavClick();
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-lg border-b border-dark-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-2xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WR
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              isSinglePage ? (
                <button
                  key={item.name}
                  onClick={() => handleNavItemClick(item)}
                  className={`transition-colors duration-300 relative group ${
                    isActive(item.path) ? 'text-primary-400' : 'text-dark-300 hover:text-primary-400'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </motion.div>
                </button>
              ) : (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className={`transition-colors duration-300 relative group ${
                      isActive(item.path) ? 'text-primary-400' : 'text-dark-300 hover:text-primary-400'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </motion.div>
                </Link>
              )
            ))}
            
            {/* Contact Button */}
            {isSinglePage ? (
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-primary text-sm"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.div>
              </button>
            ) : (
              <Link to="/contact">
                <motion.div
                  className="btn-primary text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.div>
              </Link>
            )}

            {/* View Mode Toggle */}
            <ViewModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-dark-100 rounded-full"
                animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-dark-100 rounded-full"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-dark-100 rounded-full"
                animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-lg border-t border-dark-800"
          >
            <div className="container-custom py-6 space-y-4">
              {navItems.map((item, index) => (
                isSinglePage ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavItemClick(item)}
                    className={`block transition-colors duration-300 py-2 w-full text-left ${
                      isActive(item.path) ? 'text-primary-400' : 'text-dark-300 hover:text-primary-400'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.div>
                  </button>
                ) : (
                  <Link key={item.name} to={item.path} onClick={handleNavClick}>
                    <motion.div
                      className={`block transition-colors duration-300 py-2 ${
                        isActive(item.path) ? 'text-primary-400' : 'text-dark-300 hover:text-primary-400'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                )
              ))}
              
              {/* Mobile Contact Button */}
              {isSinglePage ? (
                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn-primary w-full text-center block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Let's Talk
                  </motion.div>
                </button>
              ) : (
                <Link to="/contact" onClick={handleNavClick}>
                  <motion.div
                    className="btn-primary w-full text-center block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Let's Talk
                  </motion.div>
                </Link>
              )}

              {/* Mobile View Mode Toggle */}
              <div className="pt-4 border-t border-dark-800">
                <ViewModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;