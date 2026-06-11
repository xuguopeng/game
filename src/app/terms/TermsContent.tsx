'use client';

import LanguageToggle from '@/components/LanguageToggle';
import SiteFooter from '@/components/SiteFooter';
import { useLanguage } from '@/i18n/useLanguage';

export default function TermsContent() {
  const { language, setLanguage } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="static-page">
      <nav className="game-topbar">
        <a href="/" className="brand-link">
          GameHub Arcade
        </a>
        <div className="topbar-actions">
          <a href="/" className="topbar-link">
            {isZh ? '首页' : 'Home'}
          </a>
          <LanguageToggle language={language} onChange={setLanguage} />
        </div>
      </nav>

      <main className="static-content">
        <h1>{isZh ? '服务条款' : 'Terms of Service'}</h1>
        <p className="policy-updated">
          {isZh ? '最后更新日期：2026 年 6 月' : 'Last updated: June 2026'}
        </p>

        <section className="content-panel">
          <h2>{isZh ? '1. 接受条款' : '1. Acceptance of Terms'}</h2>
          <p>
            {isZh
              ? '通过访问和使用 GameHub Arcade 网站（game-blb.pages.dev），您表示已阅读、理解并同意受本服务条款的约束。如果您不同意这些条款，请不要使用本网站。'
              : 'By accessing and using the GameHub Arcade website (game-blb.pages.dev), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use this website.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '2. 服务描述' : '2. Service Description'}</h2>
          <p>
            {isZh
              ? 'GameHub Arcade 是一个免费的在线 HTML5 游戏平台，提供经过精选和适配的浏览器游戏。所有游戏均可在现代浏览器中直接运行，无需下载或安装。我们保留随时修改、暂停或终止服务（或其任何部分）的权利，恕不另行通知。'
              : 'GameHub Arcade is a free online HTML5 gaming platform that provides curated and adapted browser games. All games run directly in modern browsers without downloading or installation. We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any time without notice.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '3. 使用规则' : '3. Usage Rules'}</h2>
          <p>{isZh ? '使用本网站时，您同意：' : 'When using this website, you agree to:'}</p>
          <ul>
            <li>
              {isZh
                ? '仅将本网站用于合法的娱乐目的'
                : 'Use this website only for lawful entertainment purposes'}
            </li>
            <li>
              {isZh
                ? '不尝试破坏、修改或干扰网站的正常运行'
                : 'Not attempt to disrupt, modify, or interfere with the normal operation of the website'}
            </li>
            <li>
              {isZh
                ? '不使用自动化工具（如爬虫、机器人）大量访问本站'
                : 'Not use automated tools (such as crawlers, bots) to access the site in bulk'}
            </li>
            <li>
              {isZh
                ? '不试图获取未经授权的系统访问权限'
                : 'Not attempt to gain unauthorized system access'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '4. 知识产权' : '4. Intellectual Property'}</h2>
          <p>
            {isZh
              ? '本网站的原创内容（包括但不限于页面设计、文案、代码架构）受版权保护。网站上展示的游戏分别由各自的原作者拥有，并采用各自的开源许可证发布。每个游戏页面都标注了原作者、许可证类型和源码链接。'
              : 'The original content of this website (including but not limited to page design, copy, and code architecture) is copyrighted. The games displayed on the site are owned by their respective original authors and released under their own open-source licenses. Each game page credits the original author, license type, and source code link.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '5. 游戏许可证归属' : '5. Game License Attribution'}</h2>
          <p>
            {isZh
              ? 'GameHub Arcade 上展示的所有游戏均采用商用友好的开源许可证。我们不声称拥有这些游戏的所有权，而是作为展示平台。具体的许可证信息在每个游戏页面底部清晰标注，包括：'
              : 'All games displayed on GameHub Arcade use commercial-friendly open-source licenses. We do not claim ownership of these games; rather, we serve as a showcase platform. Specific license information is clearly displayed at the bottom of each game page, including:'}
          </p>
          <ul>
            <li>
              {isZh ? '原游戏作者/项目名称' : 'Original game author/project name'}
            </li>
            <li>
              {isZh ? '开源许可证类型（如 MIT、BSD 等）' : 'Open-source license type (e.g., MIT, BSD)'}
            </li>
            <li>
              {isZh ? '原项目源码链接' : 'Original project source code link'}
            </li>
            <li>
              {isZh ? '许可证全文链接' : 'Link to the full license text'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '6. 免责声明' : '6. Disclaimer of Warranties'}</h2>
          <p>
            {isZh
              ? '本网站按"现状"和"现有"基础提供，不做任何明示或暗示的保证。我们不保证：'
              : 'This website is provided on an "as is" and "as available" basis without any warranties, express or implied. We do not guarantee that:'}
          </p>
          <ul>
            <li>
              {isZh
                ? '网站将不间断、安全或无错误地运行'
                : 'The website will operate uninterrupted, secure, or error-free'}
            </li>
            <li>
              {isZh
                ? '网站上的游戏在所有设备或浏览器上都能完美运行'
                : 'Games on the website will run perfectly on all devices or browsers'}
            </li>
            <li>
              {isZh
                ? '网站内容完全准确、可靠或完整'
                : 'Website content is completely accurate, reliable, or complete'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '7. 责任限制' : '7. Limitation of Liability'}</h2>
          <p>
            {isZh
              ? '在适用法律允许的最大范围内，GameHub Arcade 不对因使用或无法使用本网站而产生的任何直接、间接、附带、特殊或后果性损害承担责任。'
              : 'To the maximum extent permitted by applicable law, GameHub Arcade shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use this website.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '8. 条款变更' : '8. Changes to Terms'}</h2>
          <p>
            {isZh
              ? '我们保留随时修改本服务条款的权利。变更将在此页面上发布，并更新"最后更新日期"。继续使用本网站即表示您接受修改后的条款。'
              : 'We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the website constitutes acceptance of the modified terms.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '9. 联系我们' : '9. Contact Us'}</h2>
          <p>
            {isZh
              ? '如果您对本服务条款有任何疑问，请访问我们的'
              : 'If you have any questions about these Terms of Service, please visit our'}{' '}
            <a href="/contact/">{isZh ? '联系页面' : 'Contact page'}</a>
            {isZh ? '。' : '.'}
          </p>
        </section>
      </main>

      <SiteFooter language={language} />
    </div>
  );
}
