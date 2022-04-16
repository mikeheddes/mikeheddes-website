import styled from "styled-components";
import { graphql } from "gatsby";

import { screen } from "../styles/breakpoints";
import Cover from "./cover";
import { PlayPauseButton, ProgressIndicator, usePlayer } from "./player";
import MetaTags from "./meta-tags";
import ActionBlock, { ActionItem } from "../shared/action-block";
import Footer from "../shared/footer";
import Navigation from "../posts/navigation";
import TitleView from "../posts/title-view";
import SoundCloud from "../icons/logos/soundcloud";
import AppleMusic from "../icons/logos/apple-music";
import YouTube from "../icons/logos/youtube";
import Spotify from "../icons/logos/spotify";

const Wrapper = styled.div`
  max-width: 460px;
  text-align: center;
  margin: 0 auto;
`;

const PlayPauseButtonWrapper = styled.div`
  margin: 20px 0;

  @media ${screen.md} {
    margin: 30px 0;
  }
`;

const PlayerWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  background-color: var(--surface-subtle);

  @media ${screen.sm} {
    padding-top: 30px;
    padding-bottom: 50px;
  }

  @media ${screen.md} {
    padding-top: 50px;
  }
`;

const getIconByService = (service) => {
  const serviceKey = service.toLowerCase();

  if (serviceKey === "spotify") return Spotify;
  if (serviceKey === "apple music") return AppleMusic;
  if (serviceKey === "youtube") return YouTube;
  if (serviceKey === "soundcloud") return SoundCloud;
};

const Music = ({ data: { musicYaml, site } }) => {
  const { album, date, cover, genre, tracks, sameAs } = musicYaml;

  const { bind, play, pause, fraction, durationMs, isPlaying, seekFraction } =
    usePlayer();

  return (
    <>
      <MetaTags
        siteUrl={site.siteMetadata.siteUrl}
        album={album}
        date={date}
        genre={genre}
        tracks={tracks}
        upc={musicYaml.upc}
        sameAs={sameAs}
        slug={musicYaml.fields.slug}
        cover={musicYaml.cover.childImageSharp.fluid.src}
        imageWide={musicYaml.imageWide.childImageSharp.resize.src}
        imageSquare={musicYaml.imageSquare.childImageSharp.resize.src}
      />

      <Navigation />
      <main>
        <TitleView title={album} date={date} genre={genre} />
        <PlayerWrapper>
          <Wrapper>
            <Cover image={cover} isPlaying={isPlaying} />
            <PlayPauseButtonWrapper>
              <PlayPauseButton
                isPlaying={isPlaying}
                play={play}
                pause={pause}
              />
            </PlayPauseButtonWrapper>
            <ProgressIndicator
              fraction={fraction}
              durationMs={durationMs}
              seekFraction={seekFraction}
              isPlaying={isPlaying}
              play={play}
            />
            <audio
              {...bind}
              src={tracks[0].file}
              css="display: none;"
              preload="auto"
            />
          </Wrapper>
        </PlayerWrapper>
        {sameAs && (
          <div>
            <ActionBlock css="padding-bottom: 0;" title="Available on">
              {sameAs.map(({ service, url }) => (
                <ActionItem
                  key={url}
                  icon={getIconByService(service)}
                  href={url}
                >
                  {service}
                </ActionItem>
              ))}
            </ActionBlock>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Music;

export const pageQuery = graphql`
  query musicData($id: String!) {
    musicYaml(id: { eq: $id }) {
      album
      date
      cover {
        childImageSharp {
          fluid(maxHeight: 460) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        colors {
          ...GatsbyImageColors
        }
      }
      imageWide: wallpaper {
        childImageSharp {
          resize(height: 1080, width: 2160) {
            src
          }
        }
      }
      imageSquare: wallpaper {
        childImageSharp {
          resize(height: 1080, width: 1080) {
            src
          }
        }
      }
      genre
      upc
      tracks {
        title
        duration
        isrc
        file
      }
      sameAs {
        service
        url
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
