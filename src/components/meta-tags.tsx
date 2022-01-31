import Head from "next/head";

import StructuredData from "./structured-data";

const SITE_URL = "https://mikeheddes.nl";

type Props = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  keywords: string[];
  genre: string;
};

function MetaTags({
  title,
  subtitle,
  genre,
  date,
  description,
  keywords,
  slug,
}: Props) {
  const isoString = new Date(date).toISOString();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />

        <meta name="keywords" content={keywords.join(", ")} />

        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="description" content={description} />

        <meta property="og:url" content={SITE_URL + slug} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={isoString} />
        <meta property="article:author" content="Mike Heddes" />
        <meta property="article:section" content={genre} />

        {/* <meta name="image" content={SITE_URL + imageSquare} />
        <meta property="og:image" content={SITE_URL + imageSquare} />
        <meta name="twitter:image" content={SITE_URL + imageWide} /> */}
      </Head>
      <StructuredData>
        {{
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          // image: SITE_URL + imageWide,
          url: SITE_URL + slug,
          headline: title,
          alternativeHeadline: description,
          dateCreated: isoString,
          datePublished: isoString,
          inLanguage: "en-US",
          isFamilyFriendly: "true",
          copyrightYear: new Date().getFullYear().toString(),
          copyrightHolder: "Mike Heddes",
          author: {
            "@type": "Person",
            name: "Mike Heddes",
            url: SITE_URL,
          },
          creator: {
            "@type": "Person",
            name: "Mike Heddes",
            url: SITE_URL,
          },
          mainEntityOfPage: "True",
          keywords: keywords,
          genre: [genre],
        }}
      </StructuredData>
    </>
  );
}

export default MetaTags;
