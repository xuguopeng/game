import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GameHub Arcade - 在线小游戏 | Free Browser Games',
  description: '怀旧街机风 HTML5 小游戏站。Play license-safe retro browser games online with Chinese and English language switching.',
  keywords: '在线游戏,免费游戏,HTML5游戏,网页游戏,小游戏,browser games,free games,HTML5 games,arcade games,2048,space shooter,sudoku',
  authors: [{ name: 'GameHub Arcade' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'GameHub Arcade - 在线小游戏 | Free Browser Games',
    description: '怀旧街机风 HTML5 小游戏，打开浏览器就能玩。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameHub Arcade - Free Browser Games',
    description: 'Retro HTML5 games you can play instantly.',
  },
  alternates: {
    canonical: 'https://yourusername.github.io/gamesite/',
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
