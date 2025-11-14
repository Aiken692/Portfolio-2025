import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Projects', href: '#projects' },
        { name: 'Journey', href: '#journey' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: 'https://github.com/walterruganzu', external: true },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/walterruganzu', external: true },
        { name: 'Twitter', href: 'https://twitter.com/walterruganzu', external: true },
        { name: 'Email', href: 'mailto:walter.ruganzu@example.com', external: true },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resume', href: '#', external: true },
        { name: 'Blog', href: '#', external: true },
        { name: 'Case Studies', href: '#', external: true },
        { name: 'Testimonials', href: '#', external: true },
      ],
    },
  ];

  return (
    <footer className="bg-dark-950 border-t border-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-display font-bold gradient-text mb-4">WR</h3>
              <p className="text-dark-400 mb-6 leading-relaxed">
                Full-Stack Developer specializing in Backend, Cloud, and scalable solutions.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: '💻', link: 'https://github.com/walterruganzu', label: 'GitHub' },
                  { icon: '💼', link: 'https://linkedin.com/in/walterruganzu', label: 'LinkedIn' },
                  { icon: '🐦', link: 'https://twitter.com/walterruganzu', label: 'Twitter' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-dark-900 border border-dark-800 rounded-lg hover:border-primary-500 hover:bg-dark-800 transition-all duration-300 text-xl"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-dark-100 font-display font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-dark-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-dark-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              © {currentYear} Walter Ruganzu. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-dark-500 hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-dark-500 hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-30"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;