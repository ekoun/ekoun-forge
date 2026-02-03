import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    "nav.agency": "Agence",
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.theme": "Thème",
    "nav.mode.light": "Mode Clair",
    "nav.mode.dark": "Mode Sombre",
    "nav.language": "Langue",
    "hero.title.1": "Design stratégique",
    "hero.title.2": "au service de la",
    "hero.title.3": "performance digitale",
    "hero.subtitle": "Nous forgeons des expériences numériques mémorables qui allient esthétique premium et résultats concrets.",
    "hero.cta.projects": "Voir nos projets",
    "hero.cta.start": "Démarrer un projet",
    "agency.stats.years": "Années d'expertise",
    "agency.stats.projects": "Projets réalisés",
    "agency.stats.satisfaction": "Clients satisfaits",
    "agency.title": "L'Agence",
    "agency.description": "EKOUN FORGE est bien plus qu'une agence de design. Nous sommes vos partenaires stratégiques dans la transformation digitale, créant des ponts entre votre vision et votre audience.",
    "agency.description.long": "Notre approche fusionne la rigueur technique avec une vision artistique audacieuse. Chaque pixel compte, chaque interaction est pensée pour convertir et séduire. Nous transformons vos défis en opportunités digitales tangibles.",
    "services.graphic": "Design Graphique",
    "services.web": "Développement Web",
    "services.strategy": "Stratégie Digitale",
    "services.branding": "Branding & Identité",
    "services.desc.graphic": "Création de visuels percutants pour tous vos supports de communication.",
    "services.desc.web": "Sites web performants, responsive et optimisés pour le référencement.",
    "services.desc.strategy": "Analyse et conseils pour maximiser votre impact et votre ROI digital.",
    "services.desc.branding": "Identité visuelle unique qui incarne vos valeurs et marque les esprits.",
    "projects.creative": "Création & Design",
    "projects.view": "VOIR",
    "projects.web_project": "Projet Web",
    "projects.development": "Développement",
    "projects.web": "Développement & Web",
    "form.required": "Requis",
    "form.too_short": "Message trop court",
    "contact.title": "Parlons de votre projet",
    "contact.name": "Votre nom",
    "contact.email": "Votre email",
    "contact.service": "Service souhaité",
    "contact.message": "Votre message",
    "contact.submit": "Envoyer",
    "contact.success": "Message préparé ! Redirection vers WhatsApp...",
    "footer.rights": "Conçu avec ❤️ pour la performance digitale",
    "footer.links": "Liens rapides",
    "footer.follow": "Suivez-nous",
    "footer.copyright": "© 2026 EKOUN FORGE. Tous droits réservés.",
  },
  en: {
    "nav.agency": "Agency",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.theme": "Theme",
    "nav.mode.light": "Light Mode",
    "nav.mode.dark": "Dark Mode",
    "nav.language": "Language",
    "hero.title.1": "Strategic design",
    "hero.title.2": "for digital",
    "hero.title.3": "performance",
    "hero.subtitle": "We forge memorable digital experiences combining premium aesthetics with concrete results.",
    "hero.cta.projects": "View our projects",
    "hero.cta.start": "Start a project",
    "agency.stats.years": "Years of expertise",
    "agency.stats.projects": "Projects completed",
    "agency.stats.satisfaction": "Client satisfaction",
    "agency.title": "The Agency",
    "agency.description": "EKOUN FORGE is more than a design agency. We are your strategic partners in digital transformation, bridging your vision and your audience.",
    "agency.description.long": "Our approach merges technical rigor with a bold artistic vision. Every pixel counts, every interaction is designed to convert and seduce. We transform your challenges into tangible digital opportunities.",
    "services.graphic": "Graphic Design",
    "services.web": "Web Development",
    "services.strategy": "Digital Strategy",
    "services.branding": "Branding & Identity",
    "services.desc.graphic": "Creation of impactful visuals for all your communication channels.",
    "services.desc.web": "High-performance, responsive websites optimized for SEO.",
    "services.desc.strategy": "Analysis and advice to maximize your impact and digital ROI.",
    "services.desc.branding": "Unique visual identity that embodies your values and leaves a mark.",
    "projects.creative": "Creative & Design",
    "projects.view": "VIEW",
    "projects.web_project": "Web Project",
    "projects.development": "Development",
    "projects.web": "Development & Web",
    "form.required": "Required",
    "form.too_short": "Message too short",
    "contact.title": "Let's talk about your project",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.service": "Service needed",
    "contact.message": "Your message",
    "contact.submit": "Send",
    "contact.success": "Message ready! Redirecting to WhatsApp...",
    "footer.rights": "Crafted with ❤️ for digital performance",
    "footer.links": "Quick links",
    "footer.follow": "Follow Us",
    "footer.copyright": "© 2026 EKOUN FORGE. All rights reserved.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return a fallback context if provider is missing
    // This allows components to render in isolation (e.g. Figma previews)
    return {
      language: 'fr',
      setLanguage: () => {},
      t: (key: string) => translations['fr'][key] || key
    };
  }
  return context;
}
