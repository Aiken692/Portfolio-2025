import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Expertise = () => {
  const [activeTab, setActiveTab] = useState('backend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'tools', label: 'Tools & Others' },
  ];

  const expertise = {
    backend: [
      { name: 'C# / .NET Core', level: 95, icon: '🔷' },
      { name: 'ASP.NET', level: 90, icon: '⚡' },
      { name: 'Node.js', level: 88, icon: '🟢' },
      { name: 'NestJS', level: 85, icon: '🔴' },
      { name: 'Python (Django/FastAPI)', level: 82, icon: '🐍' },
      { name: 'SQL / NoSQL', level: 90, icon: '🗄️' },
    ],
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'TypeScript', level: 88, icon: '💙' },
      { name: 'JavaScript', level: 92, icon: '💛' },
      { name: 'Tailwind CSS', level: 90, icon: '🎨' },
      { name: 'HTML5 / CSS3', level: 95, icon: '🌐' },
    ],
    cloud: [
      { name: 'AWS (Certified)', level: 85, icon: '☁️' },
      { name: 'Docker', level: 88, icon: '🐳' },
      { name: 'CI/CD', level: 82, icon: '🔄' },
      { name: 'Kubernetes', level: 75, icon: '☸️' },
      { name: 'IaaS / PaaS', level: 80, icon: '🏗️' },
      { name: 'Serverless', level: 78, icon: '⚡' },
    ],
    tools: [
      { name: 'Git / GitHub', level: 95, icon: '📦' },
      { name: 'VS Code', level: 98, icon: '💻' },
      { name: 'Visual Studio', level: 90, icon: '🔧' },
      { name: 'Figma', level: 75, icon: '🎨' },
      { name: 'Postman', level: 92, icon: '📮' },
      { name: 'Linux', level: 85, icon: '🐧' },
    ],
  };

  return (
    <section id="expertise" className="section-padding bg-theme-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-theme-secondary max-w-2xl mx-auto">
            A comprehensive skill set spanning backend development, cloud architecture, and modern web technologies
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-theme-tertiary text-theme-secondary hover:bg-theme-card hover:text-theme-primary border border-theme-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {expertise[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-theme-primary group-hover:text-primary-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-primary-400 font-bold">{skill.level}%</span>
                </div>
                <div className="relative h-2 bg-theme-tertiary rounded-full overflow-hidden border border-theme-primary">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-theme-primary mb-8">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'AWS Certified Cloud Practitioner', icon: '☁️', color: 'from-orange-500 to-orange-600' },
              { name: '5+ Years Experience', icon: '🏆', color: 'from-primary-500 to-primary-600' },
              { name: 'Full-Stack Expert', icon: '⚡', color: 'from-purple-500 to-purple-600' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className={`px-6 py-4 bg-gradient-to-r ${cert.color} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <span className="text-white font-semibold">{cert.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;