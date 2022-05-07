import Head from "next/head";

import profileImage from "./profile.jpg"
import StructuredData from "../components/structured-data";

const SITE_URL = "https://www.mikeheddes.nl";
const TITLE = "Mike Heddes' personal website";
const DESCRIPTION =
  "I am Mike Heddes, a Computer Science PhD student researching Machine Learning at the University of California, Irvine with a background in Mechanical Engineering. I enjoy tackling hard problems in an interdisciplinary setting. My work focuses on the intersection of Machine Learning and Embedded Systems. My ambition is to add to the inspiring achievements of humanity and to ensure our longevity. I'm captivated by everything space related in addition to meticulous design and engineering.";

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
          content="Mike Heddes, machine learning, research, artificial intelligence, science, coding, design, technology, programming"
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
          url: SITE_URL,
          image: SITE_URL + profileImage.src,
          jobTitle: "Machine Learning Researcher",
          description: "Computer Science PhD student researching Machine Learning at the University of California, Irvine",
          nationality: "Dutch",
          affiliation: {
            "@type": "Organization",
            name: "University of California, Irvine",
            location: "Irvine, California",
            department: {
              "@type": "Organization",
              name: "Computer Science",
              sameAs: "https://www.ics.uci.edu",
            },
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
            "https://github.com/mikheddes",
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
