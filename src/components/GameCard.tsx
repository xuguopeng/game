'use client';

import { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <a href={game.url} className="game-card" data-categories={game.category.join(' ')}>
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
        <div className="game-desc">{game.description}</div>
        <div className="game-tags">
          {game.tags.map((tag) => (
            <span key={tag} className={`game-tag ${game.category.includes('action') || game.category.includes('shooting') ? 'action' : game.category.includes('strategy') ? 'strategy' : ''}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
