'use client';

import { useState, useMemo } from 'react';
import { games, categories } from '@/data/games';
import GameCard from '@/components/GameCard';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return games.filter((game) => {
      const catMatch = activeCategory === 'all' || game.category.includes(activeCategory);
      const searchMatch =
        !term ||
        game.title.toLowerCase().includes(term) ||
        game.description.toLowerCase().includes(term) ||
        game.tags.some((t) => t.toLowerCase().includes(term));
      return catMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">GameHub</h1>
        <p className="site-subtitle">15+款精选开源HTML5小游戏，点开即玩</p>
      </header>

      <nav className="nav-bar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`nav-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="search-wrap">
        <input
          type="text"
          className="search-input"
          placeholder="搜索游戏..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="game-grid">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {filteredGames.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#777', padding: '60px 20px' }}>
            没有找到匹配的游戏
          </div>
        )}
      </main>

      {/* AdSense placeholder */}
      <div className="ad-placeholder" style={{ margin: '20px auto', maxWidth: '1400px' }}>
        Google AdSense 广告位（审核通过后替换此处）
      </div>

      <footer className="site-footer">
        <p>GameHub - 基于开源游戏构建 · 仅供学习交流</p>
        <p style={{ marginTop: 6, fontSize: 12 }}>
          本站所有游戏资源均来自GitHub开源项目，遵循各自开源许可证
        </p>
      </footer>
    </>
  );
}
