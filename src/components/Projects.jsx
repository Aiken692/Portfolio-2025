import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Cloud-Native E-Commerce Platform',
      description: 'Scalable microservices architecture built with .NET Core, deployed on AWS with auto-scaling capabilities.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['C#', '.NET Core', 'AWS', 'Docker', 'Microservices'],
      featured: true,
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      description: 'High-performance dashboard processing millions of events per second using Node.js and React.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Node.js', 'React', 'WebSocket', 'MongoDB', 'Redis'],
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'AI-Powered Content Management System',
      description: 'Intelligent CMS with AI-driven content recommendations and automated workflows.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'AI/ML'],
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'DevOps Automation Suite',
      description: 'Comprehensive CI/CD pipeline automation with infrastructure as code and monitoring.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
      tags: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS'],
      featured: false,
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'Serverless API Gateway',
      description: 'High-performance API gateway handling 10M+ requests daily with AWS Lambda.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Node.js'],
      featured: false,
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            A showcase of production-ready applications demonstrating expertise in full-stack development and cloud architecture
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="relative group rounded-2xl overflow-hidden bg-dark-950 border border-dark-800 hover:border-primary-500/50 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-primary-500 text-white text-sm font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-display font-bold text-dark-100 mb-4 group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-dark-400 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-dark-900 border border-dark-800 rounded-lg text-primary-400 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Other Projects - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold text-dark-100 mb-8">More Projects</h3>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex-shrink-0 w-80 snap-center"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative group rounded-xl overflow-hidden bg-dark-950 border border-dark-800 hover:border-primary-500/50 transition-all duration-500 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-display font-bold text-dark-100 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-dark-400 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-dark-900 border border-dark-800 rounded text-primary-400 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <motion.a
                            href={project.github}
                            className="flex-1 px-4 py-2 bg-dark-900 text-dark-300 text-sm font-semibold rounded-lg hover:bg-dark-800 hover:text-primary-400 transition-all duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Code
                          </motion.a>
                          <motion.a
                            href={project.demo}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Demo
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/walterruganzu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;