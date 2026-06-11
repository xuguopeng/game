import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: '联系我们 - GameHub Arcade | Contact Us',
  description:
    '联系 GameHub Arcade：如有任何问题、建议或版权相关事宜，欢迎通过以下方式与我们取得联系。',
  alternates: { canonical: 'https://game-blb.pages.dev/contact/' },
};

export default function ContactPage() {
  return <ContactContent />;
}
