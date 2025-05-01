export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Jonak',
  description:
    'Beautifully designed website where you can watch anime, drama, movies and tv shows for free. Built with Next.JS and shadcn/ui.',
  mainNav: [
    {
      title: 'Movie',
      href: '/movie',
    },
    {
      title: 'Anime',
      href: '/anime',
    },
    {
      title: 'TV',
      href: '/tv',
    },
  ],
  links: {
    twitter: 'https://twitter.com/avalynndev',
    github: 'https://github.com/avalynndev/enjoytown',
    enjoytown: '/',
  },
};
