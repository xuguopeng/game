'use client';

import type { Language } from '@/data/games';

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
}

export default function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label={language === 'zh' ? '语言切换' : 'Language switcher'}>
      <button
        type="button"
        className={language === 'zh' ? 'active' : ''}
        onClick={() => onChange('zh')}
        aria-pressed={language === 'zh'}
      >
        中文
      </button>
      <button
        type="button"
        className={language === 'en' ? 'active' : ''}
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  );
}
