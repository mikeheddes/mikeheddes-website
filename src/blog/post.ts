export type PostType = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  image: {
    url: StaticImageData;
    alt: string;
  };
};

export function getUrlFromSlug(slug: string): string {
  return `/post/${slug}`;
}
