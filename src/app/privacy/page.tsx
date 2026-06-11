import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: '隐私政策 - GameHub Arcade | Privacy Policy',
  description:
    'GameHub Arcade 隐私政策：了解我们如何收集、使用和保护您的个人信息。',
  alternates: { canonical: 'https://game-blb.pages.dev/privacy/' },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
