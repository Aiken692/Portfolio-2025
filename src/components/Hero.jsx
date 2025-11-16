import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';
import profilePhoto from '../assets/profile-photo.jpg';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#0ea5e9"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
            <AnimatedSphere />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/80 to-dark-950 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 container-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
                Full-Stack Developer & Cloud Specialist
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              <span className="block text-dark-100">Walter Ruganzu</span>
              <span className="block gradient-text mt-2">Software Engineer</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-dark-300 mb-12 leading-relaxed"
            >
              Architecting Scalable Solutions in the Cloud with{' '}
              <span className="text-primary-400 font-semibold">4+ years</span> of experience
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 blur-xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Photo container with border */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profilePhoto}
                  alt="Walter Ruganzu"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-6 items-center"
        >
          <span className="text-dark-500 text-sm font-medium">Tech Stack:</span>
          {['.NET', 'React', 'Next.js', 'Blazor', 'Node.js', 'AWS'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 bg-dark-900/50 border border-dark-800 rounded-lg text-dark-300 text-sm font-medium hover:border-primary-500/50 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
              document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-dark-500 text-sm">Scroll for Impact</span>
            <svg
              className="w-6 h-6 text-primary-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;