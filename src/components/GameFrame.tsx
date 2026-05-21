'use client';

import { useRef } from 'react';

interface GameFrameProps {
  title: string;
  playUrl: string;
  fullscreenLabel: string;
  newWindowLabel: string;
  readyLabel: string;
}

export default function GameFrame({
  title,
  playUrl,
  fullscreenLabel,
  newWindowLabel,
  readyLabel,
}: GameFrameProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  const requestFullscreen = () => {
    const frame = frameRef.current;
    if (frame?.requestFullscreen) {
      void frame.requestFullscreen();
    }
  };

  return (
    <section className="game-player" aria-label={`${title} player`}>
      <div className="game-player-toolbar">
        <span className="game-player-status">{readyLabel}</span>
        <div className="game-player-actions">
          <button type="button" onClick={requestFullscreen} className="arcade-button">
            {fullscreenLabel}
          </button>
          <a href={playUrl} target="_blank" rel="noreferrer" className="arcade-button">
            {newWindowLabel}
          </a>
        </div>
      </div>
      <iframe
        ref={frameRef}
        src={playUrl}
        title={title}
        className="game-frame"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
}
