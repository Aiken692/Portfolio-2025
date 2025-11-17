import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const SinglePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <Hero />
      
      {/* About Sections */}
      <Expertise />
      <Journey />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
    </motion.div>
  );
};

export default SinglePage;