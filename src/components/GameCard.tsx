'use client';

import { Game } from '@/data/games';
import type { Language } from '@/data/games';

interface GameCardProps {
  game: Game;
  language: Language;
}

export default function GameCard({ game, language }: GameCardProps) {
  return (
    <a href={`/play/${game.slug}/`} className="game-card" data-categories={game.category.join(' ')}>
      <div className="game-thumbnail">
        {game.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={game.thumbnail} alt={game.title} loading="lazy" />
        ) : (
          <div className="emoji-fallback">{game.emoji}</div>
        )}
      </div>
      <div className="game-info">
        <div className="game-title">{game.title}</div>
        <div className="game-desc">{game.description[language]}</div>
        <div className="game-tags">
          {game.tags.map((tag) => (
            <span key={tag.en} className={`game-tag ${game.category.includes('action') || game.category.includes('shooting') ? 'action' : game.category.includes('strategy') ? 'strategy' : ''}`}>
              {tag[language]}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
