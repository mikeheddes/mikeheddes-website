import React, { lazy, useState, useContext } from 'react'
import { graphql } from 'gatsby'
import styled, { css, ThemeContext } from 'styled-components'
import { transparentize, darken, lighten } from 'polished'

import { screen } from '../../styles/breakpoints'

import Article from '../index'

import { BLUE, RED } from './jet-fighter'
import Body from './README.md'

const ClientSideOnlyJetFighter = lazy(() => import('./renderer.js'))

const OpponentButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  text-align: center;
  width: 68%;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
`

const OpponentButton = styled.div`
  width: 50%;
  padding: 6px 12px;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.surfaceObvious : BLUE};
  transition: background-color 0.2s ease-in-out;
  cursor: ${({ isActive }) => (isActive ? 'auto' : 'pointer')};
  box-shadow: 0 1px 1px
    ${({ isActive, theme }) =>
      transparentize(
        0.65,
        darken(0.4, isActive ? theme.surfaceObvious : BLUE)
      )};

  ${({ isActive }) =>
    !isActive &&
    css`
      :hover {
        background-color: ${lighten(0.05, BLUE)};
      }

      :active {
        background-color: ${darken(0.05, BLUE)};
      }
    `}
`

const KeyWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;

  @media ${screen.sm} {
    padding-left: 50px;
    padding-right: 50px;
  }
`

const Key = styled.div`
  border-radius: 4px;
  margin-right: 4px;
  color: #ffffff;
  width: 28px;
  height: 26px;
  font-size: 17px;
  font-weight: 500;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px
    ${({ accent }) => transparentize(0.65, darken(0.4, accent))};
  background-color: ${({ accent }) => accent};
  transition: background-color 0.2s ease-in-out;

  &:last-child {
    margin-right: 0;
  }
`

const GameWrapper = styled.div`
  padding-top: 20px;
  background-color: var(--surface-subtle);

  @media ${screen.sm} {
    padding-top: 30px;
  }

  @media ${screen.md} {
    padding-top: 50px;
  }
`

const Post = ({ data: { postYaml, site, dqnFile } }) => {
  const isSSR = typeof window === 'undefined'
  const [isMultiplayer, setIsMultiplayer] = useState(false)

  const theme = useContext(ThemeContext)

  return (
    <Article
      {...postYaml}
      siteUrl={site.siteMetadata.siteUrl}
      slug={postYaml.fields.slug}
      imageSquare={postYaml.imageSquare.light.childImageSharp.resize.src}
      imageWide={postYaml.imageWide.light.childImageSharp.resize.src}
    >
      <GameWrapper>
        <div
          style={{
            width: '100%',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <OpponentButtonWrapper>
            <OpponentButton
              onClick={() => setIsMultiplayer(false)}
              isActive={!isMultiplayer}
            >
              AI Opponent
            </OpponentButton>
            <OpponentButton
              onClick={() => setIsMultiplayer(true)}
              isActive={isMultiplayer}
            >
              Multiplayer
            </OpponentButton>
          </OpponentButtonWrapper>
          {!isSSR && (
            <React.Suspense
              fallback={
                <div
                  style={{
                    backgroundColor: '#000000',
                    width: '100%',
                    paddingBottom: '75%',
                  }}
                />
              }
            >
              <ClientSideOnlyJetFighter
                dqnFileURL={dqnFile.publicURL}
                isMultiplayer={isMultiplayer}
              />
            </React.Suspense>
          )}
          <KeyWrapper>
            <Key
              accent={isMultiplayer ? BLUE : theme.surfaceObvious}
              css="margin-top: 8px;"
            >
              a
            </Key>
            <Key accent={isMultiplayer ? BLUE : theme.surfaceObvious}>w</Key>
            <Key
              accent={isMultiplayer ? BLUE : theme.surfaceObvious}
              css=" margin-top: 8px;"
            >
              d
            </Key>
            <div css="flex-grow: 1;" />
            <Key accent={RED} css=" margin-top: 8px;">
              ←
            </Key>
            <Key accent={RED}>↑</Key>
            <Key accent={RED} css="margin-top: 8px;">
              →
            </Key>
          </KeyWrapper>
        </div>
      </GameWrapper>
      <Body />
    </Article>
  )
}

export default Post

export const pageQuery = graphql`
  query jetFighterData($id: String!) {
    postYaml(id: { eq: $id }) {
      title
      description
      date
      genre
      fields {
        slug
      }
      imageSquare: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 1080) {
              src
            }
          }
        }
      }
      imageWide: cover {
        light {
          childImageSharp {
            resize(height: 1080, width: 2160) {
              src
            }
          }
        }
      }
    }
    dqnFile: file(relativePath: { eq: "jet-fighter/dqn.onnx" }) {
      publicURL
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
