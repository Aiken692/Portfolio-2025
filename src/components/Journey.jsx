import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Journey = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2019',
      title: 'Started Full-Stack Journey',
      company: 'Self-Learning & Freelance',
      description: 'Began professional development career, focusing on web technologies and building client projects.',
      achievements: [
        'Mastered HTML, CSS, JavaScript fundamentals',
        'Built 10+ client websites',
        'Learned React and Node.js',
      ],
      icon: '🚀',
    },
    {
      year: '2020',
      title: 'Backend Developer',
      company: 'Tech Startup',
      description: 'Specialized in backend development with C# and .NET Core, building scalable APIs and microservices.',
      achievements: [
        'Developed RESTful APIs serving 100K+ users',
        'Implemented microservices architecture',
        'Reduced API response time by 40%',
      ],
      icon: '⚡',
    },
    {
      year: '2021',
      title: 'Senior Full-Stack Developer',
      company: 'Enterprise Solutions',
      description: 'Led development of enterprise applications with focus on cloud infrastructure and DevOps practices.',
      achievements: [
        'Architected cloud-native solutions on AWS',
        'Mentored junior developers',
        'Implemented CI/CD pipelines',
      ],
      icon: '☁️',
    },
    {
      year: '2022',
      title: 'AWS Certified Cloud Practitioner',
      company: 'Amazon Web Services',
      description: 'Achieved AWS certification, validating expertise in cloud architecture and best practices.',
      achievements: [
        'Earned AWS Cloud Practitioner certification',
        'Designed multi-region architectures',
        'Optimized cloud costs by 30%',
      ],
      icon: '🏆',
    },
    {
      year: '2023-2024',
      title: 'Lead Backend Engineer',
      company: 'Current Position',
      description: 'Leading backend development initiatives, focusing on scalability, performance, and cloud-native solutions.',
      achievements: [
        'Managing team of 5 developers',
        'Architecting systems handling 10M+ requests/day',
        'Implementing advanced DevOps practices',
      ],
      icon: '👨‍💻',
    },
  ];

  return (
    <section id="journey" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            5+ years of continuous growth, learning, and delivering impactful solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-3xl shadow-lg shadow-primary-500/50"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <motion.div
                    className="card group hover:scale-105 transition-transform duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-bold">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-primary-400 font-semibold mb-3">{item.company}</p>
                    <p className="text-dark-400 mb-4 leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                          className="flex items-start gap-2 text-dark-300 text-sm"
                        >
                          <span className="text-primary-500 mt-1">✓</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Years Experience', icon: '📅' },
            { number: '50+', label: 'Projects Completed', icon: '🚀' },
            { number: '10M+', label: 'API Requests/Day', icon: '⚡' },
            { number: '99.9%', label: 'Uptime Achieved', icon: '✅' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-display font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;