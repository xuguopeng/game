'use client';

import SiteFooter from '@/components/SiteFooter';
import StaticPageHeader from '@/components/StaticPageHeader';
import { useLanguage } from '@/i18n/useLanguage';

export default function AboutContent() {
  const { language } = useLanguage();

  const isZh = language === 'zh';

  return (
    <div className="static-page">
      <StaticPageHeader activeKey="about" />

      <main className="static-content">
        <h1>{isZh ? '关于 GameHub Arcade' : 'About GameHub Arcade'}</h1>

        <section className="content-panel">
          <h2>{isZh ? '我们是谁' : 'Who We Are'}</h2>
          <p>
            {isZh
              ? 'GameHub Arcade 是一个精心策划的在线 HTML5 小游戏平台。我们致力于为玩家提供高质量的浏览器游戏体验——无需下载、无需安装，打开网页即可畅玩。'
              : 'GameHub Arcade is a carefully curated online HTML5 gaming platform. We are dedicated to providing players with high-quality browser gaming experiences — no downloads, no installations, just open and play.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '我们的使命' : 'Our Mission'}</h2>
          <p>
            {isZh
              ? '在互联网上有大量优秀的开源浏览器游戏，但它们往往散落在 GitHub 的各个角落，普通玩家很难发现和体验它们。GameHub Arcade 的使命就是发现这些优质游戏，经过精心测试和适配后，呈现给广大玩家。'
              : 'There are many excellent open-source browser games scattered across GitHub and the internet, but they are hard for ordinary players to discover. Our mission is to find these quality games, test and adapt them, and present them to a wider audience.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '版权合规' : 'Copyright Compliance'}</h2>
          <p>
            {isZh
              ? '我们非常重视版权和许可证合规。GameHub Arcade 上展示的每一个游戏都经过了许可证审核，确保其使用的是商用友好的开源许可证（如 MIT、BSD 等）。每个游戏页面都会清晰标注：原作者信息、开源许可证类型、项目源码链接。如果您发现任何许可证标注错误，请通过联系页面告知我们。'
              : 'We take copyright and license compliance very seriously. Every game on GameHub Arcade has been reviewed to ensure it uses a commercial-friendly open-source license (such as MIT, BSD, etc.). Each game page clearly displays: original author information, open-source license type, and source code link. If you find any license attribution errors, please let us know through our contact page.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '游戏类型' : 'Game Categories'}</h2>
          <p>
            {isZh
              ? '我们提供多种类型的游戏，满足不同玩家的喜好：'
              : 'We offer various game categories to suit different player preferences:'}
          </p>
          <ul>
            <li>
              <strong>{isZh ? '益智游戏' : 'Puzzle Games'}</strong>
              {isZh
                ? '：如 2048、俄罗斯方块（Blockrain）、数独（Sudoku）、扫雷（Pop Pop Win），锻炼逻辑思维和策略规划能力。'
                : ': Such as 2048, Blockrain, Sudoku, and Pop Pop Win — train your logical thinking and strategic planning.'}
            </li>
            <li>
              <strong>{isZh ? '射击游戏' : 'Shooting Games'}</strong>
              {isZh
                ? '：如 Space Shooter、Asteroids、Alien Invasion，体验经典街机射击的快感。'
                : ': Such as Space Shooter, Asteroids, and Alien Invasion — experience classic arcade shooting thrills.'}
            </li>
            <li>
              <strong>{isZh ? '赛车游戏' : 'Racing Games'}</strong>
              {isZh
                ? '：如 HexGL，感受 WebGL 带来的科幻竞速体验。'
                : ': Such as HexGL — enjoy a futuristic WebGL racing experience.'}
            </li>
            <li>
              <strong>{isZh ? '策略游戏' : 'Strategy Games'}</strong>
              {isZh
                ? '：如 Tower Defense，考验你的战术布局和资源管理能力。'
                : ': Such as Tower Defense — test your tactical placement and resource management.'}
            </li>
            <li>
              <strong>{isZh ? '棋类游戏' : 'Board Games'}</strong>
              {isZh
                ? '：如 Connect Four（四子连珠），简单规则下的深度策略对抗。'
                : ': Such as Connect Four — deep strategic play with simple rules.'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '技术特点' : 'Technical Features'}</h2>
          <ul>
            <li>
              {isZh
                ? '所有游戏基于 HTML5 技术，无需安装 Flash 或其他插件'
                : 'All games are built with HTML5 technology — no Flash or plugins required'}
            </li>
            <li>
              {isZh
                ? '支持中英文双语界面，自动根据浏览器语言切换'
                : 'Bilingual interface (Chinese and English) with automatic language detection'}
            </li>
            <li>
              {isZh
                ? '响应式设计，适配桌面和移动设备'
                : 'Responsive design that adapts to desktop and mobile devices'}
            </li>
            <li>
              {isZh
                ? '静态化部署在全球 CDN，确保快速加载'
                : 'Static deployment on global CDN for fast loading'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '持续更新' : 'Continuous Updates'}</h2>
          <p>
            {isZh
              ? '我们持续寻找和审核新的优质浏览器游戏，定期更新游戏库。如果您是游戏开发者并希望将您的开源游戏展示在我们的平台上，欢迎通过联系页面与我们取得联系。'
              : 'We continuously seek and review new quality browser games, updating our library regularly. If you are a game developer and would like to showcase your open-source game on our platform, feel free to reach out through our contact page.'}
          </p>
        </section>
      </main>

      <SiteFooter language={language} />
    </div>
  );
}
