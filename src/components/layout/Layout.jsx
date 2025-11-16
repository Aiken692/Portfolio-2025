import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-dark-950">
      <Navigation />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;