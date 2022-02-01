import Hero from "../home/hero";
import SocialLinks from "../home/socials";
import Feed from "../home/feed";
import About from "../home/about";
import Footer from "../components/footer";

export default function Landing() {
  return (
    <>
      {/* <MetaTags
        profileImage={profileImage}
        profileImageTwitter={profileImageTwitter}
        siteUrl={siteUrl}
      /> */}
      <Hero />
      <SocialLinks />
      <About />
      <Feed />
      <Footer />
    </>
  );
}
