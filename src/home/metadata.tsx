import Head from "next/head";

import profileImage from "./profile.jpg";
import StructuredData from "../components/structured-data";

const SITE_URL = "https://www.mikeheddes.nl";
const TITLE = "Mike Heddes — Research Software Engineer at Google";
const DESCRIPTION =
  "Mike Heddes is a Research Software Engineer at Google specializing in efficient model architectures, multi-agent systems, and randomized algorithms.";

export default function Metadata() {
  return (
    <>
      <Head>
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={SITE_URL + profileImage.src} />

        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SITE_URL + profileImage.src} />
        <meta
          name="keywords"
          content="Mike Heddes, artificial intelligence, machine learning, randomized algorithms, sketching algorithms, foundation models, Google, UC Irvine, computer science"
        />
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <StructuredData>
        {{
          "@context": "http://schema.org",
          "@type": "WebSite",
          name: "Mike Heddes",
          url: SITE_URL,
        }}
      </StructuredData>
      <StructuredData>
        {{
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Mike Heddes",
          honorificSuffix: "Ph.D.",
          url: SITE_URL,
          image: SITE_URL + profileImage.src,
          jobTitle: "Research Software Engineer",
          description: DESCRIPTION,
          nationality: "Dutch",
          affiliation: {
            "@type": "Organization",
            name: "Google",
            location: "Mountain View, California",
            sameAs: [
              "https://google.com",
              "https://en.wikipedia.org/wiki/Google",
            ],
          },
          alumniOf: [
            {
              "@type": "CollegeOrUniversity",
              name: "University of California, Irvine",
              sameAs: [
                "https://uci.edu",
                "https://www.ics.uci.edu",
                "https://en.wikipedia.org/wiki/University_of_California,_Irvine",
              ],
            },
            {
              "@type": "CollegeOrUniversity",
              name: "Amsterdam University of Applied Sciences",
              sameAs: [
                "https://www.amsterdamuas.com",
                "https://www.hva.nl",
                "https://en.wikipedia.org/wiki/Hogeschool_van_Amsterdam",
              ],
            },
          ],
          sameAs: [
            "https://scholar.google.com/citations?user=SZpFJqIAAAAJ",
            "https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U",
            "https://itunes.apple.com/artist/mike-heddes/1185471953",
            "https://linkedin.com/in/mikeheddes/",
            "https://github.com/mikeheddes",
            "https://soundcloud.com/mikeheddes",
            "https://youtube.com/mikeheddes",
            "https://twitter.com/mikeheddes",
            "https://instagram.com/mikeheddes/",
          ],
        }}
      </StructuredData>
    </>
  );
}
