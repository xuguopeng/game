import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - 页面未找到 | Page Not Found | GameHub Arcade',
  description: '您访问的页面不存在。返回首页继续浏览 GameHub Arcade 的精彩小游戏。',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <div className="static-page">
      <nav className="game-topbar">
        <Link href="/" className="brand-link">
          GameHub Arcade
        </Link>
      </nav>
      <main className="static-content" style={{ textAlign: 'center', paddingTop: 80 }}>
        <p
          style={{
            fontSize: 96,
            fontWeight: 900,
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-pink))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1 style={{ fontSize: 32, marginTop: 16 }}>页面未找到 / Page Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginTop: 14, lineHeight: 1.7 }}>
          抱歉，您访问的页面不存在。
          <br />
          Sorry, the page you are looking for does not exist.
        </p>
        <div style={{ marginTop: 30, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            className="hero-play-button"
            style={{ display: 'inline-flex' }}
          >
            返回首页 / Back to Home
          </Link>
          <Link
            href="/about/"
            className="topbar-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 18px',
              border: '1px solid var(--border-color)',
              borderRadius: 8,
              color: 'var(--accent-cyan)',
            }}
          >
            关于我们 / About
          </Link>
        </div>
      </main>
    </div>
  );
}
