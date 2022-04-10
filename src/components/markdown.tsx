import "katex/dist/katex.min.css";

import styled from "styled-components";
import { lighten, hiDPI } from "polished";
import NextImage from "next/image";

import { screen } from "../styles/breakpoints";
import { fluidFont, contentWrapper, absoluteSize } from "../styles";
import Math from "./math";
import Code from "./code";
import Preformatted from "./preformatted";
import Blockquote from "./block-quote";
import Caption from "./caption";
import VideoPlayer from "./youtube-video";
import { darkTheme, lightTheme, themeSelector } from "../styles/colors";

const wrapper = styled.main`
  ${contentWrapper};
  ${fluidFont(17, 19)};
  font-weight: 400;
  line-height: 1.6;
  color: var(--text);
  margin-top: 50px;
  text-align: left;

  @media ${screen.md} {
    margin-top: 80px;
  }
`;

const strong = styled.strong`
  font-weight: 700;
  color: var(--text-obvious);
`;

const h1 = styled.h1`
  ${fluidFont(28, 40)};
  line-height: 1.4;
  font-weight: 600;
  color: var(--heading-obvious);
  margin-top: 80px;
  margin-bottom: 15px;

  @media ${screen.md} {
    margin-top: 130px;
    margin-bottom: 20px;
  }
`;

const h2 = styled.h2`
  ${fluidFont(24, 30)};
  line-height: 1.4;
  font-weight: 600;
  color: var(--heading);
  margin-top: 50px;
  margin-bottom: 8px;

  @media ${screen.md} {
    margin-top: 50px;
    margin-bottom: 15px;
  }
`;

const h3 = styled.h3`
  ${fluidFont(20, 23)};
  line-height: 1.4;
  font-weight: 700;
  color: var(--heading);
  margin-top: 30px;
  margin-bottom: 4px;

  @media ${screen.md} {
    margin-bottom: 8px;
  }
`;

const h4 = styled.h4`
  ${fluidFont(20, 22)};
  line-height: 1.4;
  font-weight: 700;
  color: var(--text);
  margin-top: 30px;
  margin-bottom: 4px;

  @media ${screen.md} {
    margin-bottom: 8px;
  }
`;

function span(props) {
  const { className } = props;

  if (className === "katex-display") {
    return <Math {...props} style={{ marginTop: 50, marginBottom: 50 }} />;
  }

  return <span {...props} />;
}

const Figure = styled.figure`
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${screen.sm} {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const ImageSize = styled.div<{ ratio?: string }>`
  position: relative;
  width: 100%;
  padding-bottom: ${({ ratio }) => ratio ?? "68%"};
  background-color: var(--background);

  :after {
    content: "";
    ${absoluteSize};
    border: 1px solid var(--border-content);
  }
`;

function Image(props) {
  return (
    <Figure>
      <ImageSize ratio={props.ratio}>
        <NextImage alt={props.alt} layout="fill" objectFit="cover" {...props} />
      </ImageSize>
      <Caption>{props.alt}</Caption>
    </Figure>
  );
}

function Video(props) {
  return (
    <Figure>
      <VideoPlayer {...props} />
      {props.alt && <Caption>{props.alt}</Caption>}
    </Figure>
  );
}

const a = styled.a`
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  transition: color opacity 100ms ease-out;

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
`;

const ListNoStyle = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;

  & > input {
    margin-right: 10px;
  }
`;

const ul = styled.ul`
  line-height: 1.2;
  color: var(--text);
  padding-right: 1.25em;
  transform: translateX(1.25em);
  margin-top: 30px;
  margin-bottom: 30px;

  li {
    margin-bottom: 0.35em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const ol = ul.withComponent("ol");

const li = (props) => {
  const { className } = props;

  if (className === "task-list-item") {
    return <ListNoStyle {...props} />;
  }

  return <li {...props} />;
};

const hr = styled.hr`
  display: block;
  height: auto;
  border-bottom: 0;
  border-left: 0;
  border-style: solid;
  border-color: var(--border-divider-solid);
  border-width: 1px;
  margin: 50px 20px;

  @media ${screen.sm} {
    margin: 80px 30px;
  }

  @media ${screen.lg} {
    margin: 130px 50px;
  }
`;

const p = styled.p`
  margin-bottom: 15px;

  @media ${screen.sm} {
    text-align: justify;
  }
`;

const markdownComponents = {
  span,
  Video,
  Image,
  img: Image,
  a,
  blockquote: (props) => <Blockquote style={{ margin: "50px 0" }} {...props} />,
  inlineCode: (props) => <Code variant="inline" {...props} />,
  h1,
  h2,
  h3,
  h4,
  hr,
  ol,
  ul,
  p,
  pre: (props) => <Preformatted style={{ margin: "50px 0" }} {...props} />,
  code: (props) => <Code {...props} />,
  strong,
  li,
  wrapper,
};

export default markdownComponents;
