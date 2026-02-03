import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import logoImg from '../../assets/logo.png';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const TikTok = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const XIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: TikTok, href: '#', label: 'TikTok' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: XIcon, href: '#', label: 'X (Twitter)' },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-zinc-900 py-12 md:py-16 transition-colors">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="EKOUN FORGE" className="w-8 h-8 object-contain" />
              <span className="font-montserrat font-bold text-lg text-black dark:text-white">EKOUN FORGE</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-black dark:text-white mb-6">{t('footer.links')}</h4>
            <ul className="space-y-4">
              {['Agency', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] transition-colors">
                    {t(`nav.${item.toLowerCase()}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-black dark:text-white mb-6">{t('nav.services')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] transition-colors">{t('services.graphic')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] transition-colors">{t('services.web')}</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#8B5CF6] transition-colors">{t('services.strategy')}</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-montserrat font-semibold text-black dark:text-white mb-6">{t('footer.follow')}</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#8B5CF6] hover:text-white transition-all hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-zinc-900 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
