import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: '关于我们 - GameHub Arcade | About Us',
  description:
    '了解 GameHub Arcade：一个精选的在线 HTML5 小游戏平台，专注于提供许可证清晰、可商用的优质浏览器游戏。',
  alternates: { canonical: 'https://game-blb.pages.dev/about/' },
};

export default function AboutPage() {
  return <AboutContent />;
}
