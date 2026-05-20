import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GameHub - 免费在线小游戏 | 无需下载 点开即玩',
  description: '在线免费小游戏合集 - 无需下载，点开即玩。精选15+款开源HTML5小游戏，涵盖益智、动作、射击、策略等多种类型。',
  keywords: '在线游戏,免费游戏,HTML5游戏,网页游戏,小游戏,益智游戏,射击游戏,动作游戏,策略游戏,无需下载,浏览器游戏,2048,俄罗斯方块,太空射击,赛车',
  authors: [{ name: 'GameHub' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'GameHub - 免费在线小游戏合集 | 15+款精选HTML5游戏',
    description: '精选开源HTML5小游戏，无需下载，点开即玩。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GameHub - 免费在线小游戏合集',
    description: '精选开源HTML5小游戏，无需下载，点开即玩。',
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
