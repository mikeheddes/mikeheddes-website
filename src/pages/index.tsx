import Hero from "../home/hero";
import Feed from "../home/feed";
import About from "../home/about";
import Metadata from "../home/metadata";
import Footer from "../components/footer";

export default function Landing() {
  return (
    <>
      <Metadata />
      <Hero />
      <main>
        <About />
        <Feed />
      </main>
      <Footer />
    </>
  );
}
