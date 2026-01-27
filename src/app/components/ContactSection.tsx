import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle, CheckCircle } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export const ContactSection: React.FC = () => {
  const { t, language } = useApp();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Numéro WhatsApp de l'entreprise (remplacer par le vrai numéro)
  const WHATSAPP_NUMBER = '221000000000'; // Format: code pays + numéro sans espaces ni symboles

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    // Afficher l'animation de succès
    setFormStatus('success');
    setIsRedirecting(true);

    // Format du message WhatsApp
    const whatsappMessage = `Bonjour, je suis ${formState.name}
Email : ${formState.email}
Sujet : ${formState.subject || 'Non spécifié'}
Message : ${formState.message}`;

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Rediriger vers WhatsApp après l'animation
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      setFormStatus('idle');
      setIsRedirecting(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full text-sm font-['Inter'] font-semibold tracking-wider mb-4">
            {t('contact.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-['Inter'] max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info.title')}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:contact@ekoundigitalforge.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="p-3 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-['Inter']">
                      {t('contact.info.email')}
                    </div>
                    <div className="font-['Inter'] font-medium text-gray-900 dark:text-white">
                      contact@ekoundigitalforge.com
                    </div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/221000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all group"
                >
                  <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-['Inter']">
                      {t('contact.info.whatsapp')}
                    </div>
                    <div className="font-['Inter'] font-medium text-gray-900 dark:text-white">
                      +221 00 000 00 00
                    </div>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md"
                >
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-['Inter']">
                      {t('contact.info.location')}
                    </div>
                    <div className="font-['Inter'] font-medium text-gray-900 dark:text-white">
                      {t('contact.info.location.value')}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.info.social')}
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                  { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
                  { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="rounded-2xl shadow-xl p-8 dark:bg-white/5"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                boxShadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
              }}
            >
              <h3 className="text-2xl font-['Montserrat_Alternates'] font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.form.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white font-['Inter'] focus:border-violet-500 focus:outline-none transition-colors"
                    required
                  />
                  <label
                    className={`absolute left-4 font-['Inter'] transition-all pointer-events-none ${
                      focusedField === 'name' || formState.name
                        ? 'top-2 text-xs text-violet-500'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {t('contact.form.name')}
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white font-['Inter'] focus:border-violet-500 focus:outline-none transition-colors"
                    required
                  />
                  <label
                    className={`absolute left-4 font-['Inter'] transition-all pointer-events-none ${
                      focusedField === 'email' || formState.email
                        ? 'top-2 text-xs text-violet-500'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {t('contact.form.email')}
                  </label>
                </div>

                {/* Subject */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 pt-6 pb-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white font-['Inter'] focus:border-violet-500 focus:outline-none transition-colors"
                  />
                  <label
                    className={`absolute left-4 font-['Inter'] transition-all pointer-events-none ${
                      focusedField === 'subject' || formState.subject
                        ? 'top-2 text-xs text-violet-500'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {t('contact.form.subject')}
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full px-4 pt-6 pb-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white font-['Inter'] focus:border-violet-500 focus:outline-none transition-colors resize-none"
                    required
                  />
                  <label
                    className={`absolute left-4 font-['Inter'] transition-all pointer-events-none ${
                      focusedField === 'message' || formState.message
                        ? 'top-2 text-xs text-violet-500'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {t('contact.form.message')}
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg font-['Inter'] font-medium flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300"
                >
                  {t('contact.form.submit')}
                  <Send className="w-5 h-5" />
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="relative overflow-hidden"
                    >
                      <div className="p-6 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <div className="flex flex-col items-center gap-3">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 200,
                              damping: 15,
                              delay: 0.1 
                            }}
                          >
                            <div className="relative">
                              <motion.div
                                className="absolute inset-0 bg-green-500 rounded-full"
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-white" />
                              </div>
                            </div>
                          </motion.div>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-green-700 dark:text-green-400 font-['Inter'] font-medium text-center"
                          >
                            {language === 'fr' 
                              ? 'Message préparé ! Redirection vers WhatsApp...' 
                              : 'Message prepared! Redirecting to WhatsApp...'}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg font-['Inter'] text-center"
                    >
                      {t('contact.form.error')}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};