import { StaticImageData } from "next/image"

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

export function getURLFromSlug(slug: string): string {
  if (isExternalURL(slug)) {
    return slug;
  }

  return `/post/${slug}`;
}

export function isExternalURL(slug: string): boolean {
  return slug.startsWith("http://") || slug.startsWith("https://");
}
