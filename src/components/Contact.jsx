import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // TODO: Replace with your serverless function endpoint
      // Example: AWS Lambda, Vercel Function, or Netlify Function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again or email directly.',
      });
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'walter.ruganzu@example.com',
      link: 'mailto:walter.ruganzu@example.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Walter Ruganzu',
      link: 'https://linkedin.com/in/walterruganzu',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: '@walterruganzu',
      link: 'https://github.com/walterruganzu',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Available Remotely',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-dark-100 mb-6">
                Get In Touch
              </h3>
              <p className="text-dark-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <div className="text-dark-500 text-sm">{info.label}</div>
                        <div className="text-dark-100 font-semibold group-hover:text-primary-400 transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <div className="text-dark-500 text-sm">{info.label}</div>
                        <div className="text-dark-100 font-semibold">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <h4 className="text-dark-400 text-sm font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', icon: '💻', link: 'https://github.com/walterruganzu' },
                  { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/walterruganzu' },
                  { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/walterruganzu' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-dark-950 border border-dark-800 rounded-lg hover:border-primary-500 hover:bg-dark-900 transition-all duration-300 text-2xl"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-950 border border-dark-800 rounded-lg text-dark-100 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-950 border border-dark-800 rounded-lg text-dark-100 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-dark-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-950 border border-dark-800 rounded-lg text-dark-100 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-950 border border-dark-800 rounded-lg text-dark-100 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {formStatus.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                >
                  {formStatus.error}
                </motion.div>
              )}

              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: formStatus.submitting ? 1 : 1.02 }}
                whileTap={{ scale: formStatus.submitting ? 1 : 0.98 }}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;