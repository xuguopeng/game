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

function buildGameJsonLd(slug: string) {
  const game = getGameBySlug(slug);
  if (!game) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description.en,
    gamePlatform: ['Web Browser', 'HTML5'],
    applicationCategory: 'Game',
    operatingSystem: 'Any (modern browser)',
    genre: game.tags.map((tag) => tag.en).join(', '),
    playMode: 'SinglePlayer',
    image: `https://game-blb.pages.dev${game.thumbnail ?? ''}`,
    url: `https://game-blb.pages.dev/play/${game.slug}/`,
    author: {
      '@type': 'Person',
      name: game.author ?? game.title,
    },
    license: game.licenseUrl ?? game.license,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage: ['zh-CN', 'en'],
  };
}

function buildBreadcrumbJsonLd(slug: string, title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://game-blb.pages.dev/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'All Games',
        item: 'https://game-blb.pages.dev/#games',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://game-blb.pages.dev/play/${slug}/`,
      },
    ],
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.slug);

  if (!game) {
    notFound();
  }

  const jsonLd = buildGameJsonLd(params.slug);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(game.slug, game.title);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GamePageContent game={game} />
    </>
  );
}
