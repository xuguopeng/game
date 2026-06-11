'use client';

import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/i18n/useLanguage';

interface StaticPageHeaderProps {
  activeKey: 'home' | 'about' | 'privacy' | 'terms' | 'contact';
}

export default function StaticPageHeader({ activeKey }: StaticPageHeaderProps) {
  const { language, setLanguage } = useLanguage();

  const copy = {
    zh: {
      brand: 'GameHub Arcade',
      home: '首页',
      games: '全部游戏',
      about: '关于我们',
      privacy: '隐私政策',
      terms: '服务条款',
      contact: '联系我们',
    },
    en: {
      brand: 'GameHub Arcade',
      home: 'Home',
      games: 'All Games',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
    },
  }[language];

  const links = [
    { key: 'home', href: '/', label: copy.home },
    { key: 'games', href: '/#games', label: copy.games },
    { key: 'about', href: '/about/', label: copy.about },
    { key: 'privacy', href: '/privacy/', label: copy.privacy },
    { key: 'terms', href: '/terms/', label: copy.terms },
    { key: 'contact', href: '/contact/', label: copy.contact },
  ] as const;

  return (
    <nav className="game-topbar">
      <a href="/" className="brand-link" aria-label={copy.home}>
        {copy.brand}
      </a>
      <div className="topbar-actions">
        {links.map((link) => {
          const isActive = link.key === activeKey;
          const isGamesLink = link.key === 'games';
          return (
            <a
              key={link.key}
              href={link.href}
              className={`topbar-link ${isActive ? 'topbar-link-active' : ''}`}
            >
              {isGamesLink ? '🎮 ' : ''}
              {link.label}
            </a>
          );
        })}
        <LanguageToggle language={language} onChange={setLanguage} />
      </div>
    </nav>
  );
}
