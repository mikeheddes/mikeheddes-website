import React from 'react';
import PropTypes from 'prop-types';
import { contentTypes } from 'actions/content';

import {
  Artist,
  BadgeDesktop,
  Link,
  Title,
  Wrapper,
} from './textBoxComponents';

const TextBox = (props) => {
  const {
    actionTitle,
    artist,
    contentType,
    eyebrow,
    externalActionTitle,
    externalUrls,
    title,
    url,
  } = props;
  return (
    <Wrapper>
      <BadgeDesktop
        fillType="fade"
        size="l"
        marginRight="auto"
        marginBottom="m"
      >
        {eyebrow}
      </BadgeDesktop>
      <Title
        marginBottom={contentType === 'articles'}
        lineClamp={contentType === 'articles' ? 5 : 2}
      >
        {title}
      </Title>
      {
        contentType === 'music' && (
          <Artist>
            {artist}
          </Artist>
        )
      }
      <Link to={url}>
        {actionTitle}
      </Link>
      {
        externalActionTitle && externalUrls.length > 0 && (
          <Link to={externalUrls[0].url}>
            {`${externalActionTitle} ${externalUrls[0].service}`}
          </Link>
        )
      }
    </Wrapper>
  );
};

TextBox.propTypes = {
  actionTitle: PropTypes.node.isRequired,
  artist: PropTypes.string,
  contentType: PropTypes.oneOf(contentTypes).isRequired,
  eyebrow: PropTypes.string.isRequired,
  externalActionTitle: PropTypes.string,
  externalUrls: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  title: PropTypes.string,
  url: PropTypes.string,
};

TextBox.defaultProps = {
  artist: undefined,
  externalActionTitle: undefined,
  externalUrls: [],
  title: undefined,
  url: '#',
};

export default TextBox;
