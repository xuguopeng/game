import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GameHub Arcade - 在线小游戏 | Free Browser Games',
  description:
    '精选许可证友好的开源 HTML5 小游戏站。益智、射击、赛车、策略、棋类一应俱全，打开浏览器就能玩。支持中英文双语。',
  keywords:
    '在线游戏,免费游戏,HTML5游戏,网页游戏,小游戏,browser games,free games,HTML5 games,arcade games,2048,space shooter,sudoku,tetris,racing',
  authors: [{ name: 'GameHub Arcade' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'GameHub Arcade - 在线小游戏 | Free Browser Games',
    description:
      '精选许可证友好的开源 HTML5 小游戏，打开浏览器就能玩。',
    siteName: 'GameHub Arcade',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameHub Arcade - Free Browser Games',
    description: 'Retro HTML5 games you can play instantly.',
  },
  alternates: {
    canonical: 'https://game-blb.pages.dev/',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GameHub Arcade',
  alternateName: 'GameHub Arcade - 在线小游戏',
  url: 'https://game-blb.pages.dev/',
  description:
    '精选许可证友好的开源 HTML5 小游戏站。提供 2048、俄罗斯方块、数独、太空射击、街机赛车等多种类型的浏览器游戏。',
  inLanguage: ['zh-CN', 'en'],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://game-blb.pages.dev/?search={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GameHub Arcade',
  url: 'https://game-blb.pages.dev/',
  logo: 'https://game-blb.pages.dev/favicon.ico',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@xuguopeng.com',
    contactType: 'customer support',
    availableLanguage: ['Chinese', 'English'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5387922073151504"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <script
          defer
          src="https://visit.xuguopeng.com/tracker.min.js"
          data-website-id="gamehub"
        />
      </body>
    </html>
  );
}
