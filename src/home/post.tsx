import Link from "next/link";
import styled, { css } from "styled-components";
import { lighten } from "polished";

import { fluidFont } from "../styles";
import { screen } from "../styles/breakpoints";
import { darkTheme, lightTheme, themeSelector } from "../styles/colors";

const Post = styled.div`
  margin-top: 30px;

  @media ${screen.sm} {
    margin-top: 50px;
  }

  :first-child {
    margin-top: 0;
  }
`;

const Title = styled.h4`
  color: var(--heading);
  font-weight: 600;
  ${fluidFont(18, 21)};
  clear: right;
  margin: 0;
  line-height: 1.3em;
`;

const SubTitle = styled.h5`
  color: var(--text);
  font-weight: 500;
  ${fluidFont(16, 18)};
  margin-top: 4px;
  line-height: 1.4em;
`;

const Description = styled.p`
  color: var(--text-subtle);
  font-weight: 400;
  ${fluidFont(15, 17)};
  margin-top: 8px;
  line-height: 1.55em;

  @media ${screen.sm} {
    text-align: justify;
  }
`;

const Mention = styled.div`
  ${fluidFont(13, 14)};
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--orange);
`;

type ActionProps = {
  disabled?: boolean;
};

const Action = styled(Link)<ActionProps>`
  display: inline-block;
  color: ${({ disabled }) =>
    disabled ? "var(--text-subtle)" : "var(--primary)"};
  ${fluidFont(15, 17)};
  font-weight: 500;
  text-decoration: none;
  transition: color opacity 100ms ease-out;
  margin-top: 15px;
  margin-right: 30px;

  :last-of-type {
    margin-right: 0;
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;

      :hover {
        color: ${lighten(0.1, lightTheme.primary)};
      }

      :active {
        color: var(--primary);
        opacity: 0.5;
      }

      @media ${themeSelector.dark} {
        :hover {
          color: ${lighten(0.1, darkTheme.primary)};
        }
      }
    `}
`;

export function HDCJournal() {
  return (
    <Post>
      <Title>
        Hyperdimensional Computing: A Framework for Stochastic Computation and
        Symbolic AI
      </Title>
      <SubTitle>Published in the Journal of Big Data 2024</SubTitle>
      <Description>
        In this manuscript, we provide an approachable, yet thorough, survey of
        the components of Hyperdimensional Computing (HDC). HDC is a
        neuro-inspired computing framework that exploits high-dimensional random
        vector spaces. We highlight the dual use of HDC, used for its learning
        capabilities, and more generally, as a probabilistic model for
        computation.
      </Description>
      <Action href="https://link.springer.com/article/10.1186/s40537-024-01010-8">
        View publication →
      </Action>
    </Post>
  );
}

export function FastMultiJoinSketch() {
  return (
    <Post>
      <Title>
        Convolution and Cross-Correlation of Count Sketches Enables Fast
        Cardinality Estimation of Multi-Join Queries
      </Title>
      <SubTitle>
        Published at the International Conference on Management of Data (SIGMOD)
        2024
      </SubTitle>
      <Description>
        Estimating join cardinality is crucial for efficient database queries.
        This paper proposes a solution to a decades old problem using a novel
        sketching method that maintains fast updates even for multi-join queries
        by leveraging Count sketches. Our method significantly improves the
        efficiency and estimation accuracy over previous methods.
      </Description>
      <Action href="https://arxiv.org/abs/2402.15953">
        View publication →
      </Action>
      <Action href="https://github.com/mikeheddes/fast-multi-join-sketch">
        View code →
      </Action>
    </Post>
  );
}

export function GuidedStochasticExploration() {
  return (
    <Post>
      <Title>
        Always-Sparse Training by Growing Connections with Guided Stochastic
        Exploration
      </Title>
      <Description>
        The excessive computational requirements of modern deep learning are
        posing limitations on the machines that can run it. We propose an
        efficient, always-sparse training algorithm with excellent scaling to
        larger and sparser models. Moreover, our algorithm improves over the
        accuracy of previous sparse training methods.
      </Description>
      <Action href="https://arxiv.org/abs/2401.06898">View preprint →</Action>
      <Action href="https://github.com/mikeheddes/guided-stochastic-exploration">
        View code →
      </Action>
    </Post>
  );
}

export function DotHash() {
  return (
    <Post>
      <Title>
        DotHash: Estimating Set Similarity Metrics for Link Prediction and
        Document Deduplication
      </Title>
      <SubTitle>
        Published at the International Conference on Knowledge Discovery and
        Data Mining (KDD) 2023
      </SubTitle>
      <Description>
        Metrics for set similarity are a core aspect of several data mining
        tasks. We propose DotHash, an unbiased estimator for the intersection
        size of two sets. DotHash can be used to estimate the Jaccard index and,
        to the best of our knowledge, is the first method that can also estimate
        the Adamic-Adar index and a family of related metrics.
      </Description>
      <Action href="https://arxiv.org/abs/2305.17310">
        View publication →
      </Action>
      <Action href="https://github.com/mikeheddes/dothash">View code →</Action>
    </Post>
  );
}

export function Torchhd() {
  return (
    <Post>
      <Title>
        Torchhd: An Open Source Python Library to Support Research on
        Hyperdimensional Computing and Vector Symbolic Architectures
      </Title>
      <SubTitle>
        Published at the Journal of Machine Learning Research (JMLR) 2023
      </SubTitle>
      <Description>
        We present Torchhd, a high-performance open-source Python library for
        Hypderdimensional Computing and Vector Symbolic Architectures (HD/VSA).
        Torchhd seeks to make HD/VSA more accessible and serves as an efficient
        foundation for further research and application development.
      </Description>
      <Action href="https://arxiv.org/abs/2205.09208">
        View publication →
      </Action>
      <Action href="https://github.com/hyperdimensional-computing/torchhd">
        View project →
      </Action>
    </Post>
  );
}

export function CircularHV() {
  return (
    <Post>
      <Title>
        An Extension to Basis-Hypervectors for Learning from Circular Data in
        Hyperdimensional Computing
      </Title>
      <SubTitle>
        Published at the Design Automation Conference (DAC) 2023
      </SubTitle>
      <Description>
        We present a detailed study on basis-hypervector sets, which leads to
        practical contributions to Hyperdimensional Computing (HDC) in general:
        1) an improvement for level-hypervectors, used to encode real numbers;
        2) a method to learn from circular data, an important type of
        information never before addressed in machine learning with HDC.
      </Description>
      <Action href="https://arxiv.org/abs/2205.07920">
        View publication →
      </Action>
    </Post>
  );
}

export function Hashing() {
  return (
    <Post>
      <Title>
        Hyperdimensional Hashing: An Efficient and Robust Dynamic Hash Table
      </Title>
      <SubTitle>
        Published at the Design Automation Conference (DAC) 2022
      </SubTitle>
      <Description>
        Most cloud services and distributed applications rely on hashing
        algorithms that allow dynamic scaling of a robust and efficient hash
        table. Examples include AWS, Google Cloud and BitTorrent. We propose
        Hyperdimensional (HD) hashing and show that it has the efficiency to be
        deployed in large systems.
      </Description>
      <Action href="https://arxiv.org/abs/2205.07850">
        View publication →
      </Action>
    </Post>
  );
}

export function GraphHD() {
  return (
    <Post>
      <Mention>Nominated for Best Paper</Mention>
      <Title>
        GraphHD: Efficient Graph Classification using Hyperdimensional Computing
      </Title>
      <SubTitle>
        Published at the Design, Automation and Test in Europe Conference (DATE)
        2022
      </SubTitle>
      <Description>
        Graphs are among the most important forms of information representation,
        yet, to this day, Hyperdimensional Computing algorithms have not been
        applied to the graph learning problem in a general sense. In this paper,
        we present GraphHD — a baseline approach for graph classification with
        HDC.
      </Description>
      <Action href="https://arxiv.org/abs/2205.07826">
        View publication →
      </Action>
    </Post>
  );
}

export function EdgeAvatar() {
  return (
    <Post>
      <Title>
        EdgeAvatar: An Edge Computing System for Building Virtual Beings
      </Title>
      <SubTitle>Published in Electronics 2021</SubTitle>
      <Description>
        We describe EdgeAvatar, a system based on Edge Computing principles for
        the creation of virtual beings. The objective is to provide a
        streamlined and modular framework for virtual being applications that
        are to be deployed in public settings. EdgeAvatar can be adapted to fit
        different approaches for AI powered conversations.
      </Description>
      <Action href="https://doi.org/10.3390/electronics10030229">
        View publication →
      </Action>
      <Action href="https://sysarch-uci.gitlab.io/celan-web/">
        View project →
      </Action>
    </Post>
  );
}

export function SpOC() {
  return (
    <Post>
      <Title>Space Optimization Competition Platform</Title>
      <SubTitle>Project at the European Space Agency 2019</SubTitle>
      <Description>
        SpOC (Space optimization Competition) is an optimization challenge,
        hosted on the European Space Agency&apos;s Optimize platform, that has
        experts around the world compete to solve three complex optimization
        problems wrapped up in a stimulating and exotic space mission scenario.
      </Description>
      <Action href="https://optimize.esa.int/challenges">View project →</Action>
    </Post>
  );
}

export function JetFighterAi() {
  return (
    <Post>
      <Title>Jet Fighter Ai</Title>
      <SubTitle>Personal project in Reinforcement Learning, 2021</SubTitle>
      <Description>
        A Reinforcement Learning agent learns to play the two-player Atari game
        Jet Fighter. Visitors can play against the agent in an Atari-style
        simulator on the project page.
      </Description>
      <Action href="/post/jet-fighter-ai">View project →</Action>
    </Post>
  );
}

export function SettlersOfTheGalaxy() {
  return (
    <Post>
      <Mention>Featured in a BBC documentary</Mention>
      <Title>Settlers of the Galaxy</Title>
      <SubTitle>Personal project in Animation & Interaction, 2019</SubTitle>
      <Description>
        Interactive animation of the Milky Way galaxy that includes our Solar
        System. Based on data from the GTOC X trajectory optimization challenge
        proposed by NASA&apos;s Jet Propulsion Laboratory (JPL).
      </Description>
      <Action href="/post/settlers-of-the-galaxy">View project →</Action>
    </Post>
  );
}

export function DCGP() {
  return (
    <Post>
      <Mention>Bachelor Thesis</Mention>
      <Title>Differentiable Cartesian Genetic Programming Interface</Title>
      <SubTitle>Project at the European Space Agency, 2019</SubTitle>
      <Description>
        Differentiable Genetic Cartesian Programming (dCGP) is a Machine
        Learning tool for symbolic regression. DCGP generates explicit formulas
        that can be understood and studied. Our software thus provides a form of
        explainable AI, which can be applied to any supervised learning task.
      </Description>
      <Action href="https://esa.github.io/dcgp-web">View project →</Action>
      <Action href="/bachelor-thesis.pdf">View thesis →</Action>
    </Post>
  );
}

export function SpaceXGridFin() {
  return (
    <Post>
      <Title>SpaceX Grid Fin Design</Title>
      <SubTitle>Personal project in Animation & Interaction, 2018</SubTitle>
      <Description>
        Interactive 3D model of the second generation Space X grid fin as flown
        on the Falcon 9 rocket. The grid fins are made from titanium so that
        they can be reused.
      </Description>
      <Action href="/post/spacex-grid-fin-design">View project →</Action>
    </Post>
  );
}

export function MusicProduction() {
  return (
    <Post>
      <Title>Music Production</Title>
      <Description>
        During high school and college I dreamed of becoming an electronic dance
        music producer like Martin Garrix, the Swedish House Mafia, or Avicii.
        Over the years my dream of being a music producer faded away while my
        interest in science grew. Making music is now a hobby of mine.
      </Description>
      <Action href="https://open.spotify.com/artist/4kQdT4uFc2e0zHL755qJ0U">
        Listen on Spotify →
      </Action>
      <Action href="https://music.apple.com/artist/mike-heddes/1185471953">
        Listen on Apple Music →
      </Action>
      <Action href="https://youtube.com/mikeheddes">Listen on YouTube →</Action>
    </Post>
  );
}
