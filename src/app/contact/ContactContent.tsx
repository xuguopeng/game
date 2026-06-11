'use client';

import SiteFooter from '@/components/SiteFooter';
import StaticPageHeader from '@/components/StaticPageHeader';
import { useLanguage } from '@/i18n/useLanguage';

export default function ContactContent() {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <div className="static-page">
      <StaticPageHeader activeKey="contact" />

      <main className="static-content">
        <h1>{isZh ? '联系我们' : 'Contact Us'}</h1>

        <section className="content-panel">
          <h2>{isZh ? '一般咨询' : 'General Inquiries'}</h2>
          <p>
            {isZh
              ? '如果您对 GameHub Arcade 有任何问题、建议或反馈，欢迎通过以下电子邮件与我们联系。我们会尽快回复您的消息。'
              : 'If you have any questions, suggestions, or feedback about GameHub Arcade, feel free to reach out via the following email. We will respond to your message as soon as possible.'}
          </p>
          <p className="contact-email">
            <strong>Email:</strong>{' '}
            <a href="mailto:contact@xuguopeng.com">contact@xuguopeng.com</a>
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '版权和许可证事宜' : 'Copyright and Licensing'}</h2>
          <p>
            {isZh
              ? '如果您是游戏作者或版权持有者，并且对您的作品在我们网站上的展示有任何疑虑，请通过以下方式联系我们。我们会在收到通知后尽快处理您的请求。'
              : 'If you are a game author or copyright holder and have concerns about the display of your work on our website, please contact us. We will process your request as soon as possible after receiving your notice.'}
          </p>
          <p className="contact-email">
            <strong>Email:</strong>{' '}
            <a href="mailto:copyright@xuguopeng.com">copyright@xuguopeng.com</a>
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '报告问题' : 'Report Issues'}</h2>
          <p>
            {isZh
              ? '如果您发现某个游戏无法正常运行、存在安全漏洞或其他技术问题，请告知我们以下信息，以便我们快速定位和解决问题：'
              : 'If you find that a game is not working properly, has security vulnerabilities, or other technical issues, please provide the following information so we can quickly locate and resolve the problem:'}
          </p>
          <ul>
            <li>
              {isZh ? '游戏名称' : 'Game name'}
            </li>
            <li>
              {isZh ? '问题描述' : 'Problem description'}
            </li>
            <li>
              {isZh ? '您使用的浏览器和设备类型' : 'Your browser and device type'}
            </li>
            <li>
              {isZh ? '问题出现的具体步骤（如适用）' : 'Specific steps to reproduce the issue (if applicable)'}
            </li>
          </ul>
          <p className="contact-email">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@xuguopeng.com">support@xuguopeng.com</a>
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '游戏开发者合作' : 'Game Developer Collaboration'}</h2>
          <p>
            {isZh
              ? '如果您是开源游戏开发者，希望将您的 HTML5 游戏展示在 GameHub Arcade 上，我们非常欢迎！请通过电子邮件与我们联系，并提供以下信息：'
              : 'If you are an open-source game developer and would like to showcase your HTML5 game on GameHub Arcade, we would love to hear from you! Please contact us via email with the following information:'}
          </p>
          <ul>
            <li>
              {isZh ? '游戏名称和简介' : 'Game name and description'}
            </li>
            <li>
              {isZh ? '源码仓库链接' : 'Source code repository link'}
            </li>
            <li>
              {isZh ? '使用的开源许可证类型' : 'Open-source license type'}
            </li>
            <li>
              {isZh ? '在线演示链接（如有）' : 'Online demo link (if available)'}
            </li>
          </ul>
          <p className="contact-email">
            <strong>Email:</strong>{' '}
            <a href="mailto:dev@xuguopeng.com">dev@xuguopeng.com</a>
          </p>
        </section>

        <section className="content-panel">
          <h2>{isZh ? '响应时间' : 'Response Time'}</h2>
          <p>
            {isZh
              ? '我们通常会在 1-3 个工作日内回复您的电子邮件。版权相关的紧急请求会优先处理。感谢您的耐心等待。'
              : 'We typically respond to emails within 1-3 business days. Urgent copyright-related requests are prioritized. Thank you for your patience.'}
          </p>
        </section>
      </main>

      <SiteFooter language={language} />
    </div>
  );
}
