import Hero from "../home/hero";
import SocialLinks from "../home/socials";
import Feed from "../home/feed";
import About from "../home/about";
import Metadata from "../home/metadata";
import Footer from "../components/footer";

export default function Landing() {
  return (
    <>
      <Metadata />
      <Hero />
      <SocialLinks />
      <About />
      <Feed />
      <Footer />
    </>
  );
}
