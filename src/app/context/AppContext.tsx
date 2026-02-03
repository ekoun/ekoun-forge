import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Header
    'nav.agency': 'Agence',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Loading
    'loading.text': 'Chargement…',
    
    // Hero
    'hero.title.line1': 'Design stratégique',
    'hero.title.line2': 'créatif',
    'hero.title.line3': 'orienté performance',
    'hero.cta.view': 'Voir nos réalisations',
    'hero.cta.start': 'Démarrer un projet',
    'hero.scroll': 'Défiler',
    
    // Agency
    'agency.label': 'AGENCE',
    'agency.title': 'Une expertise digitale au service de votre vision',
    'agency.p1': 'Ekoun Digital Forge est une agence de design stratégique et digital qui transforme vos idées en expériences digitales exceptionnelles. Notre approche combine créativité, innovation et performance pour créer des solutions qui marquent les esprits.',
    'agency.p2': 'Nous croyons que chaque projet est unique et mérite une attention particulière. Notre équipe multidisciplinaire travaille main dans la main avec vous pour comprendre vos objectifs et créer des solutions sur mesure qui dépassent vos attentes.',
    'agency.p3': 'Notre expertise couvre tous les aspects du digital, du design graphique au développement web, en passant par la stratégie digitale et l\'expérience utilisateur. Nous sommes passionnés par ce que nous faisons et cela se reflète dans chaque projet.',
    'agency.stat1.value': '5+',
    'agency.stat1.label': 'Ans d\'expertise',
    'agency.stat2.value': '120+',
    'agency.stat2.label': 'Projets réalisés',
    'agency.stat3.value': '98%',
    'agency.stat3.label': 'Clients satisfaits',
    
    // Services
    'services.label': 'SERVICES',
    'services.title': 'Des solutions complètes pour tous vos besoins digitaux',
    'services.design.title': 'Design Graphique',
    'services.design.desc': 'Création d\'identités visuelles uniques et mémorables qui reflètent l\'essence de votre marque.',
    'services.design.feat1': 'Identité visuelle & branding',
    'services.design.feat2': 'Design d\'interface moderne',
    'services.design.feat3': 'Supports print & digital',
    'services.design.feat4': 'Illustrations & iconographie',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Sites web performants, scalables et optimisés pour offrir une expérience utilisateur exceptionnelle.',
    'services.web.feat1': 'Sites web responsive',
    'services.web.feat2': 'Applications web complexes',
    'services.web.feat3': 'E-commerce & plateformes',
    'services.web.feat4': 'Optimisation & performance',
    'services.strategy.title': 'Stratégie Digitale',
    'services.strategy.desc': 'Stratégies digitales sur mesure pour maximiser votre présence en ligne et atteindre vos objectifs.',
    'services.strategy.feat1': 'Audit & analyse digitale',
    'services.strategy.feat2': 'SEO & référencement',
    'services.strategy.feat3': 'Content strategy',
    'services.strategy.feat4': 'Analytics & reporting',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Conception d\'expériences utilisateur intuitives et engageantes centrées sur vos utilisateurs.',
    'services.uiux.feat1': 'Research & personas',
    'services.uiux.feat2': 'Wireframing & prototyping',
    'services.uiux.feat3': 'Tests utilisateurs',
    'services.uiux.feat4': 'Design systems',
    
    // Projects
    'projects.label': 'PROJETS',
    'projects.title': 'Nos réalisations qui font la différence',
    'projects.creative.title': 'Projets Créatifs',
    'projects.web.title': 'Projets Web',
    'projects.creative.1': 'Identité Visuelle Premium',
    'projects.creative.2': 'Campagne Marketing Digital',
    'projects.creative.3': 'Design Editorial Moderne',
    'projects.creative.4': 'Branding & Packaging',
    'projects.web.1': 'Plateforme E-commerce',
    'projects.web.2': 'Application SaaS',
    'projects.web.3': 'Site Corporate',
    'projects.web.4': 'Portfolio Interactif',
    
    // Contact
    'contact.label': 'CONTACT',
    'contact.title': 'Parlons de votre projet',
    'contact.subtitle': 'Prêt à transformer votre vision en réalité ? Contactez-nous dès aujourd\'hui.',
    'contact.info.title': 'Nos coordonnées',
    'contact.info.email': 'Email',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.location': 'Localisation',
    'contact.info.location.value': 'Dakar, Sénégal',
    'contact.info.social': 'Réseaux sociaux',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.success': 'Message envoyé avec succès ! Nous vous répondrons sous peu.',
    'contact.form.error': 'Veuillez remplir tous les champs requis.',
    
    // Footer
    'footer.tagline': 'Design stratégique au service de la performance',
    'footer.links': 'Liens rapides',
    'footer.services': 'Services',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.copyright': '© 2026 Ekoun Digital Forge – Conçu avec',
    'footer.copyright.end': 'pour la performance digitale',
  },
  en: {
    // Header
    'nav.agency': 'Agency',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Loading
    'loading.text': 'Loading…',
    
    // Hero
    'hero.title.line1': 'Strategic design',
    'hero.title.line2': 'creative',
    'hero.title.line3': 'performance-driven',
    'hero.cta.view': 'View our work',
    'hero.cta.start': 'Start a project',
    'hero.scroll': 'Scroll',
    
    // Agency
    'agency.label': 'AGENCY',
    'agency.title': 'Digital expertise at the service of your vision',
    'agency.p1': 'Ekoun Digital Forge is a strategic and digital design agency that transforms your ideas into exceptional digital experiences. Our approach combines creativity, innovation and performance to create solutions that make an impact.',
    'agency.p2': 'We believe that every project is unique and deserves special attention. Our multidisciplinary team works hand in hand with you to understand your objectives and create tailor-made solutions that exceed your expectations.',
    'agency.p3': 'Our expertise covers all aspects of digital, from graphic design to web development, including digital strategy and user experience. We are passionate about what we do and it shows in every project.',
    'agency.stat1.value': '5+',
    'agency.stat1.label': 'Years of expertise',
    'agency.stat2.value': '120+',
    'agency.stat2.label': 'Projects completed',
    'agency.stat3.value': '98%',
    'agency.stat3.label': 'Satisfied clients',
    
    // Services
    'services.label': 'SERVICES',
    'services.title': 'Complete solutions for all your digital needs',
    'services.design.title': 'Graphic Design',
    'services.design.desc': 'Creating unique and memorable visual identities that reflect the essence of your brand.',
    'services.design.feat1': 'Visual identity & branding',
    'services.design.feat2': 'Modern interface design',
    'services.design.feat3': 'Print & digital materials',
    'services.design.feat4': 'Illustrations & iconography',
    'services.web.title': 'Web Development',
    'services.web.desc': 'High-performance, scalable and optimized websites to deliver an exceptional user experience.',
    'services.web.feat1': 'Responsive websites',
    'services.web.feat2': 'Complex web applications',
    'services.web.feat3': 'E-commerce & platforms',
    'services.web.feat4': 'Optimization & performance',
    'services.strategy.title': 'Digital Strategy',
    'services.strategy.desc': 'Tailored digital strategies to maximize your online presence and achieve your goals.',
    'services.strategy.feat1': 'Digital audit & analysis',
    'services.strategy.feat2': 'SEO & referencing',
    'services.strategy.feat3': 'Content strategy',
    'services.strategy.feat4': 'Analytics & reporting',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.desc': 'Designing intuitive and engaging user experiences centered on your users.',
    'services.uiux.feat1': 'Research & personas',
    'services.uiux.feat2': 'Wireframing & prototyping',
    'services.uiux.feat3': 'User testing',
    'services.uiux.feat4': 'Design systems',
    
    // Projects
    'projects.label': 'PROJECTS',
    'projects.title': 'Our work that makes a difference',
    'projects.creative.title': 'Creative Projects',
    'projects.web.title': 'Web Projects',
    'projects.creative.1': 'Premium Visual Identity',
    'projects.creative.2': 'Digital Marketing Campaign',
    'projects.creative.3': 'Modern Editorial Design',
    'projects.creative.4': 'Branding & Packaging',
    'projects.web.1': 'E-commerce Platform',
    'projects.web.2': 'SaaS Application',
    'projects.web.3': 'Corporate Website',
    'projects.web.4': 'Interactive Portfolio',
    
    // Contact
    'contact.label': 'CONTACT',
    'contact.title': 'Let\'s talk about your project',
    'contact.subtitle': 'Ready to turn your vision into reality? Contact us today.',
    'contact.info.title': 'Our contact details',
    'contact.info.email': 'Email',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.location': 'Location',
    'contact.info.location.value': 'Dakar, Senegal',
    'contact.info.social': 'Social media',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Message sent successfully! We will respond to you shortly.',
    'contact.form.error': 'Please fill in all required fields.',
    
    // Footer
    'footer.tagline': 'Strategic design at the service of performance',
    'footer.links': 'Quick links',
    'footer.services': 'Services',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of use',
    'footer.copyright': '© 2026 Ekoun Digital Forge – Designed with',
    'footer.copyright.end': 'for digital performance',
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
