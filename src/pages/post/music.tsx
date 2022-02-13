import { MDXProvider } from "@mdx-js/react";
import type { PostType } from "../../blog/post";

import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import TitleView from "../../components/title-view";
import meta from "../../blog/music/meta";
import Carousel from '../../blog/music/carousel'

export default function Music() {
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
          <Carousel priority />
        </figure>
      </article>
      <Footer />
    </>
  );
}
