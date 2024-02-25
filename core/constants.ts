import { PageType, RobotsContent, MetaTags } from '../interfaces/meta-tags';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: MetaTags = {
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description: 'Eshkon Sample',
  image: 'https://marketplace.canva.com/EAFasgWgUyE/6/0/1600w/canva-neon-blue-and-black-gamer-badge-logo-eKEXSFkIoq0.jpg',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'Eshkon Sample',
  type: PageType.website
};
 