/*
 * @Author: 新西兰的肉夹馍
 * @Date: 2026-05-20 18:43:39
 * @LastEditTime: 2026-06-11 22:55:36
 * @FilePath: /小游戏网站/gamesite/src/app/page.tsx
 * @Description:
 * 在这个虚拟的空间里，我试图捕捉真实的自我，与世界分享。
 */
'use client';

import { useState, useMemo } from 'react';
import { publicGames, categories } from '@/data/games';
import GameCard from '@/components/GameCard';
import LanguageToggle from '@/components/LanguageToggle';
import SiteFooter from '@/components/SiteFooter';
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
      introTitle: '欢迎来到 GameHub Arcade',
      introBody: '我们精心挑选了一组许可证清晰、可商用的开源 HTML5 浏览器小游戏。所有游戏都无需下载、无需安装，打开网页即可畅玩。每款游戏都附带完整的玩法说明、操作指南和高分技巧。',
      featureCards: [
        {
          icon: '🎮',
          title: '即开即玩',
          body: '无需下载任何客户端，打开浏览器即可畅玩所有游戏。',
        },
        {
          icon: '📜',
          title: '许可证透明',
          body: '每个游戏页清晰标注原作者、许可证类型和源码链接。',
        },
        {
          icon: '🌐',
          title: '中英双语',
          body: '自动根据浏览器语言切换中英文界面，照顾全球玩家。',
        },
      ],
      categoryTitle: '游戏分类',
      categoryCards: [
        { key: 'puzzle', name: '益智', desc: '锻炼逻辑与策略的脑力挑战' },
        { key: 'shooting', name: '射击', desc: '紧张刺激的太空与街机射击' },
        { key: 'racing', name: '赛车', desc: '速度与反应并重的竞速体验' },
        { key: 'strategy', name: '策略', desc: '考验布局和资源管理的深度玩法' },
        { key: 'board', name: '棋类', desc: '经典棋盘上的智慧博弈' },
      ],
      faqTitle: '常见问题',
      faqs: [
        {
          q: '网站上的游戏都是免费的吗？',
          a: '是的，所有游戏完全免费，无需注册或登录。',
        },
        {
          q: '游戏是否支持手机？',
          a: '大部分游戏支持触屏操作，少部分老游戏更适合键盘鼠标。每款游戏页都提供全屏和新窗口入口。',
        },
        {
          q: '我可以贡献游戏吗？',
          a: '欢迎！请通过"联系我们"页面与我们取得联系，提交您的开源 HTML5 游戏。',
        },
        {
          q: '游戏是否安全？',
          a: '所有游戏均来自知名的开源项目，源代码公开可查。我们对每个游戏都进行了许可证和内容审核。',
        },
      ],
    },
    en: {
      eyebrow: 'LICENSE-SAFE HTML5 ARCADE',
      title: 'GameHub Arcade',
      subtitle: 'Retro browser games you can play instantly',
      search: 'Search games...',
      empty: 'No matching games found',
      introTitle: 'Welcome to GameHub Arcade',
      introBody: 'We have carefully curated a collection of open-source HTML5 browser games with clear, commercial-friendly licenses. No downloads, no installations — just open the page and play. Every game comes with detailed instructions, control guides, and high-score tips.',
      featureCards: [
        {
          icon: '🎮',
          title: 'Instant Play',
          body: 'No client to install. Open your browser and start playing right away.',
        },
        {
          icon: '📜',
          title: 'Transparent Licensing',
          body: 'Every game page credits the original author, license type, and source code link.',
        },
        {
          icon: '🌐',
          title: 'Bilingual',
          body: 'Automatic Chinese/English interface based on your browser language.',
        },
      ],
      categoryTitle: 'Game Categories',
      categoryCards: [
        { key: 'puzzle', name: 'Puzzle', desc: 'Brain-teasing logic and strategy challenges' },
        { key: 'shooting', name: 'Shooter', desc: 'Intense space and arcade shooting action' },
        { key: 'racing', name: 'Racing', desc: 'Speed and reflex combined for racing thrills' },
        { key: 'strategy', name: 'Strategy', desc: 'Deep tactics and resource management' },
        { key: 'board', name: 'Board', desc: 'Classic board-game battles of wits' },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'Are the games free to play?',
          a: 'Yes, all games are completely free. No registration or login required.',
        },
        {
          q: 'Do the games work on mobile?',
          a: 'Most games support touch controls, though a few older titles work better with a keyboard. Each game page offers fullscreen and new-window options.',
        },
        {
          q: 'Can I contribute a game?',
          a: 'Absolutely! Please reach out via our Contact page to submit your open-source HTML5 game.',
        },
        {
          q: 'Are the games safe?',
          a: 'All games come from well-known open-source projects with publicly available source code. We review the license and content of every game we host.',
        },
      ],
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

      <section className="home-intro">
        <h2 style={{ color: 'var(--accent-cyan)', fontSize: 22, marginBottom: 10 }}>
          {copy.introTitle}
        </h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 15 }}>
          {copy.introBody}
        </p>
        <div className="home-intro-grid">
          {copy.featureCards.map((card) => (
            <div key={card.title} className="home-intro-card">
              <span className="icon" aria-hidden="true">
                {card.icon}
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

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

      <h2 className="home-section-title">{copy.categoryTitle}</h2>
      <section className="home-categories">
        {copy.categoryCards.map((cat) => (
          <button
            key={cat.key}
            className="home-category-tile"
            onClick={() => {
              setActiveCategory(cat.key);
              document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <h4>{cat.name}</h4>
            <p>{cat.desc}</p>
          </button>
        ))}
      </section>

      <h2 className="home-section-title">{copy.faqTitle}</h2>
      <section className="home-faq">
        {copy.faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <SiteFooter language={language} />
    </>
  );
}
