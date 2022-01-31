import { MDXProvider } from "@mdx-js/react";
import type { PostType } from "../../blog/post";

import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import TitleView from "../../components/title-view";
import Article from "../../blog/jet-fighter/README.md";
import GamePlayer from "../../blog/jet-fighter/player";
import markdownComponents from "../../components/markdown";
import meta from "../../blog/jet-fighter/meta";

export default function JetFighterAI() {
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
        <GamePlayer />
        <MDXProvider components={markdownComponents}>
          <Article />
        </MDXProvider>
      </article>
      <Footer />
    </>
  );
}
