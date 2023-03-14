import styled from "styled-components";

import { ActionBlock, ActionItem } from "../components/action-block";
import GitHub from "../icons/logos/github";
import LinkedIn from "../icons/logos/linkedin";
import Spotify from "../icons/logos/spotify";
import { contentWrapper } from "../styles";
import AppleMusic from "../icons/logos/apple-music";
import GoogleScholar from "../icons/logos/google-scholar";

const Section = styled.section`
  ${contentWrapper};
`;

export default function SocialLinks() {
  return (
    <Section wide>
      <ActionBlock numItems={5}>
        <ActionItem icon={LinkedIn} href="https://linkedin.com/in/mikeheddes/">
          LinkedIn
        </ActionItem>
        <ActionItem icon={GitHub} href="https://github.com/mikeheddes">
          GitHub
        </ActionItem>
        <ActionItem icon={GoogleScholar} href="https://scholar.google.com/citations?user=SZpFJqIAAAAJ">
          Google Scholar
        </ActionItem>
        <ActionItem
          icon={Spotify}
          href="https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U"
        >
          Spotify
        </ActionItem>
        <ActionItem
          icon={AppleMusic}
          href="https://music.apple.com/artist/mike-heddes/1185471953"
        >
          Apple Music
        </ActionItem>
      </ActionBlock>
    </Section>
  );
}
