'use client';

import AdSlot from '@/components/AdSlot';
import GameFrame from '@/components/GameFrame';
import LanguageToggle from '@/components/LanguageToggle';
import type { Game } from '@/data/games';
import { getRelatedGames } from '@/data/games';
import { useLanguage } from '@/i18n/useLanguage';

interface GamePageContentProps {
  game: Game;
}

export default function GamePageContent({ game }: GamePageContentProps) {
  const { language, setLanguage } = useLanguage();
  const relatedGames = getRelatedGames(game, 4);

  const copy = {
    zh: {
      brand: 'GameHub Arcade',
      allGames: '全部游戏',
      eyebrow: '在线小游戏',
      play: '开始游戏',
      ready: 'READY',
      fullscreen: '全屏',
      newWindow: '新窗口',
      howToPlay: '怎么玩',
      recommended: '推荐游戏',
      about: '关于这个游戏',
      controls: '操作方式',
      tips: '玩法技巧',
      license: '来源和许可证',
      project: '作者/项目',
      licenseLabel: '许可证',
      sourceLink: '查看原项目',
      licenseLink: '查看许可证',
      faq: '常见问题',
      topAd: '顶部广告',
      sideAd: '侧边广告',
    },
    en: {
      brand: 'GameHub Arcade',
      allGames: 'All Games',
      eyebrow: 'Online browser game',
      play: 'Play Now',
      ready: 'READY',
      fullscreen: 'Fullscreen',
      newWindow: 'New Window',
      howToPlay: 'How to play',
      recommended: 'Recommended',
      about: 'About this game',
      controls: 'Controls',
      tips: 'Tips',
      license: 'Source and license',
      project: 'Author / project',
      licenseLabel: 'License',
      sourceLink: 'View source project',
      licenseLink: 'View license',
      faq: 'FAQ',
      topAd: 'Top ad',
      sideAd: 'Side ad',
    },
  }[language];

  return (
    <main className="game-page">
      <nav className="game-topbar">
        <a href="/" className="brand-link">
          {copy.brand}
        </a>
        <div className="topbar-actions">
          <a href="/#games" className="topbar-link">
            {copy.allGames}
          </a>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
      </nav>

      <header className="game-hero">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{game.title}</h1>
          <p>{game.description[language]}</p>
          <div className="game-tags">
            {game.tags.map((tag) => (
              <span key={tag.en} className="game-tag">
                {tag[language]}
              </span>
            ))}
          </div>
        </div>
        <a href="#play" className="hero-play-button">
          {copy.play}
        </a>
      </header>

      <AdSlot className="ad-slot-top" label={copy.topAd} />

      <section id="play" className="play-layout">
        <div className="play-main">
          <GameFrame
            title={game.title}
            playUrl={game.playUrl}
            fullscreenLabel={copy.fullscreen}
            newWindowLabel={copy.newWindow}
            readyLabel={copy.ready}
          />
          <section className="content-panel">
            <h2>{copy.howToPlay}</h2>
            <ul>
              {game.howToPlay.map((item) => (
                <li key={item.en}>{item[language]}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="play-sidebar">
          <AdSlot className="ad-slot-side" label={copy.sideAd} />
          <section className="content-panel">
            <h2>{copy.recommended}</h2>
            <div className="related-list">
              {relatedGames.map((related) => (
                <a key={related.slug} href={`/play/${related.slug}/`} className="related-game">
                  <span>{related.title}</span>
                  <small>{related.tags.slice(0, 2).map((tag) => tag[language]).join(' · ')}</small>
                </a>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="game-content-grid">
        <article className="content-panel">
          <h2>{copy.about}</h2>
          <p>{game.longDescription[language]}</p>
        </article>
        <article className="content-panel">
          <h2>{copy.controls}</h2>
          <ul>
            {game.controls.map((control) => (
              <li key={control.en}>{control[language]}</li>
            ))}
          </ul>
        </article>
        <article className="content-panel">
          <h2>{copy.tips}</h2>
          <ul>
            {game.tips.map((tip) => (
              <li key={tip.en}>{tip[language]}</li>
            ))}
          </ul>
        </article>
        <article className="content-panel license-panel">
          <h2>{copy.license}</h2>
          <p>
            <strong>{copy.project}:</strong> {game.author ?? game.title}
          </p>
          <p>
            <strong>{copy.licenseLabel}:</strong> {game.license}
          </p>
          <div className="license-links">
            {game.sourceUrl && (
              <a href={game.sourceUrl} target="_blank" rel="noreferrer">
                {copy.sourceLink}
              </a>
            )}
            {game.licenseUrl && (
              <a href={game.licenseUrl} target="_blank" rel="noreferrer">
                {copy.licenseLink}
              </a>
            )}
          </div>
        </article>
      </section>

      <section className="content-panel faq-panel">
        <h2>{copy.faq}</h2>
        {game.faq.map((item) => (
          <details key={item.question.en}>
            <summary>{item.question[language]}</summary>
            <p>{item.answer[language]}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
