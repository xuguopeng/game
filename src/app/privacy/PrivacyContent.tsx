'use client';

import SiteFooter from '@/components/SiteFooter';
import StaticPageHeader from '@/components/StaticPageHeader';
import { useLanguage } from '@/i18n/useLanguage';

export default function PrivacyContent() {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="static-page">
      <StaticPageHeader activeKey="privacy" />

      <main className="static-content">
        <h1>{isZh ? '隐私政策' : 'Privacy Policy'}</h1>
        <p className="policy-updated">
          {isZh ? '最后更新日期：2026 年 6 月' : 'Last updated: June 2026'}
        </p>

        <section className="content-panel">
          <h2>{isZh ? '1. 概述' : '1. Overview'}</h2>
          <p>
            {isZh
              ? 'GameHub Arcade（以下简称"我们"）重视您的隐私。本隐私政策说明了我们在您访问和使用 game-blb.pages.dev 网站（以下简称"本站"）时，如何收集、使用和保护您的个人信息。使用本站即表示您同意本隐私政策中描述的做法。'
              : 'GameHub Arcade ("we") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit and use our website at game-blb.pages.dev (the "Site"). By using the Site, you agree to the practices described in this Privacy Policy.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '2. 我们收集的信息' : '2. Information We Collect'}</h2>
          <p>
            {isZh
              ? '我们收集的信息非常有限，主要包括：'
              : 'We collect very limited information, primarily:'}
          </p>
          <ul>
            <li>
              <strong>{isZh ? '访问数据' : 'Usage Data'}:</strong>{' '}
              {isZh
                ? '我们使用自建的访问统计工具收集匿名的页面浏览数据，包括访问时间、页面路径、浏览器类型和屏幕分辨率。这些数据不包含任何个人身份信息。'
                : 'We use a self-hosted analytics tool to collect anonymous page view data, including visit time, page path, browser type, and screen resolution. This data does not contain any personally identifiable information.'}
            </li>
            <li>
              <strong>{isZh ? '语言偏好' : 'Language Preference'}:</strong>{' '}
              {isZh
                ? '我们将您选择的语言偏好（中文/英文）存储在浏览器的本地存储（localStorage）中，以便在后续访问时自动应用。此数据仅存储在您的设备上，不会发送到我们的服务器。'
                : 'We store your language preference (Chinese/English) in your browser\'s local storage to apply it automatically on subsequent visits. This data is stored only on your device and is not sent to our servers.'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '3. 第三方服务' : '3. Third-Party Services'}</h2>
          <p>
            {isZh
              ? '本站可能使用以下第三方服务：'
              : 'This site may use the following third-party services:'}
          </p>
          <ul>
            <li>
              <strong>Google AdSense:</strong>{' '}
              {isZh
                ? '我们使用 Google AdSense 展示广告。Google 可能使用 Cookie 和类似技术来展示与您兴趣相关的广告。您可以访问 Google 的广告设置页面来管理您的广告偏好。Google 的隐私政策请参阅 https://policies.google.com/privacy。'
                : 'We use Google AdSense to display advertisements. Google may use cookies and similar technologies to show ads based on your interests. You can manage your ad preferences at Google\'s Ads Settings. See Google\'s privacy policy at https://policies.google.com/privacy.'}
            </li>
            <li>
              <strong>{isZh ? '自建统计服务' : 'Self-hosted Analytics'}:</strong>{' '}
              {isZh
                ? '我们使用自建的访问统计服务（visit.xuguopeng.com），该服务不使用 Cookie，不收集个人身份信息，不进行跨站追踪。'
                : 'We use a self-hosted analytics service (visit.xuguopeng.com) that does not use cookies, does not collect personal identity information, and does not track across sites.'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '4. Cookie 政策' : '4. Cookie Policy'}</h2>
          <p>
            {isZh
              ? '本站自身不设置 Cookie。但第三方服务（如 Google AdSense）可能会设置它们自己的 Cookie。具体来说：'
              : 'This site itself does not set cookies. However, third-party services (such as Google AdSense) may set their own cookies. Specifically:'}
          </p>
          <ul>
            <li>
              {isZh
                ? 'Google AdSense 可能会设置 Cookie 来展示个性化广告'
                : 'Google AdSense may set cookies to display personalized ads'}
            </li>
            <li>
              {isZh
                ? '您可以通过浏览器设置管理或禁用 Cookie'
                : 'You can manage or disable cookies through your browser settings'}
            </li>
            <li>
              {isZh
                ? '禁用 Cookie 可能会影响广告展示效果，但不会影响游戏的正常使用'
                : 'Disabling cookies may affect ad display but will not affect normal game usage'}
            </li>
          </ul>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '5. 数据安全' : '5. Data Security'}</h2>
          <p>
            {isZh
              ? '我们采取合理的技术措施来保护我们收集的信息。由于我们收集的信息非常有限且主要是匿名数据，风险较低。我们的网站使用 HTTPS 加密传输，部署在 Cloudflare 的安全基础设施上。'
              : 'We take reasonable technical measures to protect the information we collect. Since we collect very limited and primarily anonymous data, the risk is low. Our website uses HTTPS encrypted transport and is deployed on Cloudflare\'s secure infrastructure.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '6. 儿童隐私' : '6. Children\'s Privacy'}</h2>
          <p>
            {isZh
              ? '本站上的游戏适合所有年龄段。我们不会故意收集 13 岁以下儿童的个人信息。如果您认为我们无意中收集了儿童的信息，请通过联系页面告知我们，我们将立即删除相关数据。'
              : 'The games on this site are suitable for all ages. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child, please let us know through our contact page and we will promptly delete the relevant data.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '7. 政策更新' : '7. Policy Updates'}</h2>
          <p>
            {isZh
              ? '我们可能会不时更新本隐私政策。任何变更将在此页面上发布，并更新"最后更新日期"。建议您定期查看本政策以了解最新信息。'
              : 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We recommend reviewing this policy periodically for the latest information.'}
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '8. 联系我们' : '8. Contact Us'}</h2>
          <p>
            {isZh
              ? '如果您对本隐私政策有任何疑问，请访问我们的'
              : 'If you have any questions about this Privacy Policy, please visit our'}{' '}
            <a href="/contact/">{isZh ? '联系页面' : 'Contact page'}</a>
            {isZh ? '。' : '.'}
          </p>
        </section>
      </main>

      <SiteFooter language={language} />
    </div>
  );
}
