export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Jonak',
  description:
    'Beautifully designed website where you can watch anime, drama, movies and tv shows for free.',
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
    twitter: 'https://twitter.com/aantarip',
    github: 'https://github.com/aantarip',
    enjoytown: '/',
  },
};
