/*
 * @Author: 新西兰的肉夹馍
 * @Date: 2026-06-11 22:55:00
 * @LastEditTime: 2026-06-11 22:55:01
 * @FilePath: /小游戏网站/gamesite/src/app/terms/page.tsx
 * @Description: 
 * 在这个虚拟的空间里，我试图捕捉真实的自我，与世界分享。
 */
import type { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: '服务条款 - GameHub Arcade | Terms of Service',
  description:
    'GameHub Arcade 服务条款：了解使用本网站时的权利、义务和相关条款。',
  alternates: { canonical: 'https://game-blb.pages.dev/terms/' },
};

export default function TermsPage() {
  return <TermsContent />;
}
