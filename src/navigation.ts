import { nav, footer } from './i18n/translations';

const hrefs = [
  'https://insait.ai/',
  'https://huggingface.co/collections/INSAIT-Institute/bggpt-gemma-2-673b972fe9902749ac90f6fe',
];

export const headerData = {
  links: nav.en.links.map((text, i) => ({
    text,
    href: hrefs[i],
    i18nKey: `nav.${i}`,
  })),
  actions: [{ text: nav.en.cta, href: 'mailto:bggpt@insait.ai', i18nKey: 'nav.cta' }],
};

const huggingFaceHref =
  'https://huggingface.co/collections/INSAIT-Institute/bggpt-gemma-2-673b972fe9902749ac90f6fe';

export const footerDataEn = {
  links: [
    {
      title: footer.en.resources,
      links: [{ text: footer.en.huggingFaceModels, href: huggingFaceHref }],
    },
    {
      title: footer.en.insait,
      links: [
        { text: footer.en.aboutInsait, href: 'https://insait.ai' },
        { text: footer.en.contact, href: 'mailto:bggpt@insait.ai' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/insaitinstitute' },
    { ariaLabel: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/INSAIT.institute/' },
    { ariaLabel: 'HuggingFace', icon: 'custom:huggingface', href: 'https://huggingface.co/INSAIT-Institute' },
  ],
  footNote: footer.en.footNote,
};

export const footerDataBg = {
  links: [
    {
      title: footer.bg.resources,
      links: [{ text: footer.bg.huggingFaceModels, href: huggingFaceHref }],
    },
    {
      title: footer.bg.insait,
      links: [
        { text: footer.bg.aboutInsait, href: 'https://insait.ai' },
        { text: footer.bg.contact, href: 'mailto:bggpt@insait.ai' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'simple-icons:linkedin', href: 'https://www.linkedin.com/company/insaitinstitute' },
    { ariaLabel: 'Facebook', icon: 'simple-icons:facebook', href: 'https://www.facebook.com/INSAIT.institute/' },
    { ariaLabel: 'HuggingFace', icon: 'custom:huggingface', href: 'https://huggingface.co/INSAIT-Institute' },
  ],
  footNote: footer.bg.footNote,
};
