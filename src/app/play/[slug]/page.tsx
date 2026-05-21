import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GamePageContent from '@/components/GamePageContent';
import { getGameBySlug, publicGames } from '@/data/games';

interface GamePageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return publicGames.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: GamePageProps): Metadata {
  const game = getGameBySlug(params.slug);

  if (!game) {
    return {
      title: 'Game not found | GameHub Arcade',
    };
  }

  return {
    title: `${game.title} 在线玩 | Play Online | GameHub Arcade`,
    description: `${game.description.zh} ${game.description.en}`,
    alternates: {
      canonical: `/play/${game.slug}/`,
    },
    openGraph: {
      title: `${game.title} 在线玩 | Play Online`,
      description: game.description.en,
      type: 'website',
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  return <GamePageContent game={game} />;
}
