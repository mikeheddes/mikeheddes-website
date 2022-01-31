import { MDXProvider } from "@mdx-js/react";

import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import TitleView from "../../components/title-view";
import Caption from "../../components/caption";
import Article from "../../blog/spacex-grid-fin-design/README.md";
import Animation from "../../blog/spacex-grid-fin-design/animation";
import markdownComponents from "../../components/markdown";
import meta from "../../blog/spacex-grid-fin-design/meta";

export default function SpaceXGridFinDesign() {
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
          <Caption>3D model by Jon Ross</Caption>
        </figure>
        <MDXProvider components={markdownComponents}>
          <Article />
        </MDXProvider>
      </article>
      <Footer />
    </>
  );
}
