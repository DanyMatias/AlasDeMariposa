import Index from './pages/index.astro';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Información',
      links: [

        {
          text: 'Proceso',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Día mundial de la Fibromialgia',
          href: getPermalink('/diamundial'),
        },
      ],
    },
    {
      text: 'Principal',
      links: [
        {
          text: 'Preguntas frecuentes',
          href: getPermalink('/#features'),
        },
        {
          text: 'Términos y condiciones',
          href: getPermalink('/terms'),
        },

      ],
    },
    
    {
      text: 'Resultados',
      links: [
        {
          text: 'Lista de resultados',
          href: getBlogPermalink(),
        },
        
      ],
    },
    
    {
      text: 'Inicio',
      href: getPermalink(),

    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Páginas principales',
      links: [
        { text: 'Inicio', href: getPermalink() },
        { text: 'Preguntas', href: '#features' },
      ],
    },

    {
      title: 'Sección relevante',
      links: [
        { text: 'Resultados', href: getBlogPermalink()},
        
      ],
    },

    
    {
      title: 'Accesibilidad',
      links: [
        { text: 'Docs', href: '#' },
      ],
    },

       
    {
      title: 'Fibromialgia',
      links: [
        { text: 'Florence Nightingale', href: getPermalink('/diamundial') },
      ],
    },
    
  ],
  secondaryLinks: [
    { text: 'Términos y condiciones', href: getPermalink('/terms') },
    
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/images/flie.png" alt="fibromialgia logo" loading="lazy"></img>
    Copyright 2024 <a class="text-blue-600 underline dark:text-muted"> </a> · Todos los derechos reservados.
  `,
};
