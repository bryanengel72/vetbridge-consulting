/* One config per page the build emits. The homepage speaks for the firm
   (both markets, KC phone); a city page speaks for its market and carries
   its own number. Page-level SEO (title, meta, JSON-LD) lives in that
   page's HTML file, not here. */
export interface CityConfig {
  /* After "VetBridge Consulting · " in the hero label. */
  place: string;
  phone: string;
  phoneHref: string;
  /* The reassurance line under the hero CTAs. */
  heroMeta: string;
  /* Footer link to the other market's page. */
  crossLink: { name: string; href: string };
}

export const HOME: CityConfig = {
  place: 'Kansas City · San Diego',
  phone: '(816) 394-8980',
  phoneHref: 'tel:+18163948980',
  heroMeta: 'About an hour on a call. You get a written summary either way.',
  crossLink: { name: 'San Diego', href: '/san-diego' },
};

export const SAN_DIEGO: CityConfig = {
  place: 'San Diego, California',
  phone: '(858) 260-9949',
  phoneHref: 'tel:+18582609949',
  heroMeta: 'Now serving San Diego County. About an hour on a call — written summary either way.',
  crossLink: { name: 'Kansas City', href: '/' },
};
