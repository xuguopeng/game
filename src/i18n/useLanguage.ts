'use client';

import { useEffect, useState } from 'react';
import type { Language } from '@/data/games';

const storageKey = 'gamehub-language';
const chineseTimeZones = new Set([
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Taipei',
  'Asia/Macau',
]);

function detectLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const saved = window.localStorage.getItem(storageKey);
  if (saved === 'zh' || saved === 'en') {
    return saved;
  }

  const languages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  if (languages.some((language) => language.toLowerCase().startsWith('zh'))) {
    return 'zh';
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (chineseTimeZones.has(timeZone)) {
    return 'zh';
  }

  return 'en';
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('zh');

  useEffect(() => {
    const detected = detectLanguage();
    setLanguageState(detected);
    document.documentElement.lang = detected === 'zh' ? 'zh-CN' : 'en';
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
    document.documentElement.lang = nextLanguage === 'zh' ? 'zh-CN' : 'en';
  };

  return { language, setLanguage };
}
