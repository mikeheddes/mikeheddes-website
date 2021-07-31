import React, { useMemo, useRef, useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { transparentize, darken } from 'polished'

import Article from '../index'

import {
  JetFighter,
  useJetFighterUserController,
  BLUE,
  RED,
} from './jet-fighter'
import Body from './README.md'

const WIDTH = 240
const HEIGHT = 180

const KeyWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: row;
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

  &:last-child {
    margin-right: 0;
  }
`

const Post = ({ data: { postYaml, site } }) => {
  const game = useMemo(() => new JetFighter(WIDTH, HEIGHT), [])
  const [gameScore, setGameScore] = useState(game.score)
  const canvasRef = useRef(null)
  const getUser1Action = useJetFighterUserController('a', 'd', 'w')
  const getUser2Action = useJetFighterUserController(
    'arrowleft',
    'arrowright',
    'arrowup'
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = WIDTH
    canvas.height = HEIGHT

    game.onscorechange = (score) => setGameScore(score)

    let animationRequest

    function gameLoop() {
      const user1Action = getUser1Action()
      const user2Action = getUser2Action()

      // Get actions from AI and player
      const actions = [user1Action, user2Action]
      game.step(actions)
      game.draw(ctx)

      animationRequest = window.requestAnimationFrame(gameLoop)
    }

    animationRequest = window.requestAnimationFrame(gameLoop)

    return () => {
      window.cancelAnimationFrame(animationRequest)
    }
  }, [game, getUser1Action, getUser2Action])

  return (
    <Article
      {...postYaml}
      siteUrl={site.siteMetadata.siteUrl}
      slug={postYaml.fields.slug}
      imageSquare={postYaml.imageSquare.light.childImageSharp.resize.src}
      imageWide={postYaml.imageWide.light.childImageSharp.resize.src}
    >
      <div css="padding-top: 50px; background-color: var(--surface)">
        <div
          style={{
            width: '100%',
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              backgroundColor: '#000000',
              width: '100%',
              imageRendering: 'pixelated',
            }}
          />
          <KeyWrapper>
            <Key accent={BLUE} css="margin-top: 8px;">
              a
            </Key>
            <Key accent={BLUE}>w</Key>
            <Key accent={BLUE} css=" margin-top: 8px;">
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
      </div>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
