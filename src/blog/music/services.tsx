import styled from "styled-components";

import { ActionBlock, ActionItem } from "../../components/action-block";
import YouTube from "../../icons/logos/youtube";
import SoundCloud from "../../icons/logos/soundcloud";
import Spotify from "../../icons/logos/spotify";
import { contentWrapper, fluidFont } from "../../styles";
import { screen } from "../../styles/breakpoints";
import AppleMusic from "../../icons/logos/apple-music";

const Section = styled.section<{ $wide?: boolean }>`
  ${contentWrapper};
`;

const Header = styled.h2`
  color: var(--heading);
  ${fluidFont(18, 24)};
  font-weight: 600;
  margin-bottom: -10px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  @media ${screen.sm} {
    margin-top: 50px;
    margin-bottom: -20px;
    max-width: none;
  }
`;

export default function Services() {
  return (
    <Section>
      <Header>Listen on</Header>
      <ActionBlock numItems={4}>
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
        <ActionItem icon={YouTube} href="https://youtube.com/mikeheddes">
          YouTube
        </ActionItem>
        <ActionItem icon={SoundCloud} href="https://soundcloud.com/mikeheddes">
          SoundCloud
        </ActionItem>
      </ActionBlock>
    </Section>
  );
}
