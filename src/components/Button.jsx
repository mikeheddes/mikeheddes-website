import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, transparentize as fade } from 'polished';
import Image from 'components/Image';
import { radius, space } from 'style';
import { media, fluidText } from 'utils/mixins';

const defaultStyle = css`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.link};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.surface)};
  }
`;

const primaryStyle = css`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.link};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.link)};
  }
`;

const warningStyle = css`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.orange)};
  }
`;

const deleteStyle = css`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.red)};
  }
`;

const actionStyle = css`
  padding: 4px 15px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.link};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.surface)};
  }
`;


const subtleStyle = css`
  padding: 10px 20px;
  background-color: ${({ theme }) => fade(1, theme.title)};
  color: ${({ theme }) => theme.textSubtle};

  &:hover {
    background-color: ${({ theme }) => fade(0.95, theme.title)};
  }
`;

const subtleLinkStyle = css`
  color: ${({ theme }) => theme.textSubtle};

  &:hover {
    text-decoration: underline;
  }
`;

const linkStyle = css`
  color: ${({ theme }) => theme.link};

  &:hover {
    text-decoration: underline;
  }
`;

const disableStyle = css`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => fade(0.7, theme.textSubtle)};
  cursor: not-allowed;

  &:active {
    opacity: 1;
  }
`;

const Button = styled.button.attrs({
  disabled: ({ variation }) => variation === 'disabled' && variation,
})`
  display: ${({ display }) => display};
  font-size: 17px;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  border-radius: ${radius.r}px;
  background-color: transparent;
  transition: opacity 150ms cubic-bezier(0.19, 1, 0.22, 1),
    background-color 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:active {
    opacity: 0.5;
  }

  ${({ variation }) => {
    switch (variation) {
      case 'primary':
        return primaryStyle;
      case 'link':
        return linkStyle;
      case 'subtle':
        return subtleStyle;
      case 'subtleLink':
        return subtleLinkStyle;
      case 'disabled':
        return disableStyle;
      case 'warning':
        return warningStyle;
      case 'delete':
        return deleteStyle;
      case 'action':
        return actionStyle;
      default:
        return defaultStyle;
    }
  }};
`;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variation: PropTypes.oneOf([
    'primary',
    'default',
    'action',
    'link',
    'subtle',
    'subtleLink',
    'disabled',
    'warning',
    'delete',
  ]),
  display: PropTypes.oneOf(['block', 'inline-block']),
};

Button.defaultProps = {
  type: 'button',
  variation: 'default',
  display: 'inline-block',
};

export default Button;
