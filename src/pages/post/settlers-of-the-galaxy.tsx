import { MDXProvider } from "@mdx-js/react";

import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import TitleView from "../../components/title-view";
import Caption from "../../components/caption";
import Article from "../../blog/settlers-of-the-galaxy/README.md";
import Animation from "../../blog/settlers-of-the-galaxy/animation";
import markdownComponents from "../../components/markdown";
import meta from "../../blog/settlers-of-the-galaxy/meta";

export default function SettlersOfTheGalaxy() {
  return (
    <>
      {/* <MetaTags
        siteUrl={siteUrl}
        title={title}
        genre={genre}
        date={date}
        description={description}
        imageSquare={imageSquare}
        imageWide={imageWide}
        slug={slug}
      /> */}
      <Navigation />
      <article>
        <TitleView
          title={meta.title}
          date={meta.date}
          subtitle={meta.subtitle}
        />
        <figure>
          <Animation />
          <Caption>Data by the Jet Propulsion Laboratory</Caption>
        </figure>
        <MDXProvider components={markdownComponents}>
          <Article />
        </MDXProvider>
      </article>
      <Footer />
    </>
  );
}
