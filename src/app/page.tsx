'use client';

import { useState, useMemo } from 'react';
import { publicGames, categories } from '@/data/games';
import GameCard from '@/components/GameCard';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/i18n/useLanguage';

export default function HomePage() {
  const { language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return publicGames.filter((game) => {
      const catMatch = activeCategory === 'all' || game.category.includes(activeCategory);
      const searchMatch =
        !term ||
        game.title.toLowerCase().includes(term) ||
        game.description[language].toLowerCase().includes(term) ||
        game.tags.some((t) => t[language].toLowerCase().includes(term));
      return catMatch && searchMatch;
    });
  }, [activeCategory, searchTerm, language]);

  const copy = {
    zh: {
      eyebrow: 'LICENSE-SAFE HTML5 ARCADE',
      title: 'GameHub Arcade',
      subtitle: '怀旧街机风 HTML5 小游戏，打开浏览器就能玩',
      search: '搜索游戏...',
      empty: '没有找到匹配的游戏',
      footer: 'GameHub Arcade - 只展示许可证清楚、可商用友好的浏览器游戏',
      footerNote: '广告审核前不加载 AdSense 脚本；每个游戏页保留来源和许可证信息。',
    },
    en: {
      eyebrow: 'LICENSE-SAFE HTML5 ARCADE',
      title: 'GameHub Arcade',
      subtitle: 'Retro browser games you can play instantly',
      search: 'Search games...',
      empty: 'No matching games found',
      footer: 'GameHub Arcade - browser games with clear commercial-friendly licenses',
      footerNote: 'AdSense stays off before approval; each game page keeps source and license details.',
    },
  }[language];

  return (
    <>
      <header className="site-header">
        <div className="header-toolbar">
          <span className="site-eyebrow">{copy.eyebrow}</span>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
        <h1 className="site-title">{copy.title}</h1>
        <p className="site-subtitle">{copy.subtitle}</p>
      </header>

      <nav className="nav-bar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`nav-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label[language]}
          </button>
        ))}
      </nav>

      <div className="search-wrap">
        <input
          type="text"
          className="search-input"
          placeholder={copy.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main id="games" className="game-grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} language={language} />
        ))}
        {filteredGames.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#777', padding: '60px 20px' }}>
            {copy.empty}
          </div>
        )}
      </main>

      <footer className="site-footer">
        <p>{copy.footer}</p>
        <p style={{ marginTop: 6, fontSize: 12 }}>
          {copy.footerNote}
        </p>
      </footer>
    </>
  );
}
