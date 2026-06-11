'use client';

import type { Language } from '@/data/games';

interface SiteFooterProps {
  language: Language;
}

export default function SiteFooter({ language }: SiteFooterProps) {
  const copy = {
    zh: {
      footer: 'GameHub Arcade - 精选许可证友好的浏览器小游戏',
      about: '关于我们',
      privacy: '隐私政策',
      terms: '服务条款',
      contact: '联系我们',
      copyright: `© ${new Date().getFullYear()} GameHub Arcade. 保留所有权利。`,
    },
    en: {
      footer: 'GameHub Arcade - Curated browser games with clear licenses',
      about: 'About Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Us',
      copyright: `© ${new Date().getFullYear()} GameHub Arcade. All rights reserved.`,
    },
  }[language];

  return (
    <footer className="site-footer">
      <p>{copy.footer}</p>
      <nav className="footer-links">
        <a href="/about/">{copy.about}</a>
        <a href="/privacy/">{copy.privacy}</a>
        <a href="/terms/">{copy.terms}</a>
        <a href="/contact/">{copy.contact}</a>
      </nav>
      <p className="footer-copyright">{copy.copyright}</p>
    </footer>
  );
}
