export type Lang = 'en' | 'bg';

export const nav = {
  en: {
    links: ['About INSAIT', 'HuggingFace Models'],
    cta: 'Contact Us',
  },
  bg: {
    links: ['За INSAIT', 'HuggingFace модели'],
    cta: 'Свържете се',
  },
};

export const footer = {
  en: {
    resources: 'Resources',
    huggingFaceModels: 'HuggingFace Models',
    insait: 'INSAIT',
    aboutInsait: 'About INSAIT',
    contact: 'Contact',
    footNote:
      '&copy; <a class="text-primary underline" href="https://insait.ai">INSAIT</a> 2026. All rights reserved.<br />Synergy Tower, 111P Tsarigradsko Shose Blvd, 1784 Sofia, Bulgaria',
  },
  bg: {
    resources: 'Ресурси',
    huggingFaceModels: 'HuggingFace модели',
    insait: 'INSAIT',
    aboutInsait: 'За INSAIT',
    contact: 'Контакт',
    footNote:
      '&copy; <a class="text-primary underline" href="https://insait.ai">INSAIT</a> 2026. Всички права запазени.<br />Synergy Tower, бул. Цариградско шосе 111Р, 1784 София, България',
  },
};

export const hero = {
  en: {
    title: 'Expect the new version of<br /><span class="text-primary">BgGPT</span> within hours!',
    cta: 'Contact Us',
    ctaSecondary: 'HuggingFace Models',
  },
  bg: {
    title: 'Очаквайте новата версия на<br /><span class="text-primary">BgGPT</span> до часове!',
    cta: 'Свържете се',
    ctaSecondary: 'HuggingFace модели',
  },
};

// Client-side translations map for nav and UI elements with data-i18n attributes
export const clientTranslations: Record<string, Record<string, string>> = {
  en: {
    ...nav.en.links.reduce((acc, text, i) => ({ ...acc, [`nav.${i}`]: text }), {}),
    'nav.cta': nav.en.cta,
  },
  bg: {
    ...nav.bg.links.reduce((acc, text, i) => ({ ...acc, [`nav.${i}`]: text }), {}),
    'nav.cta': nav.bg.cta,
  },
};
