import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken, transparentize as fade } from 'polished';
import { radius, space } from 'style';
// import { media, fluidText } from 'utils/mixins';

const buttonPadding = css`
  padding: ${space.r}px ${space.m}px;
`;

export const defaultStyle = css`
  ${buttonPadding};
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.link};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.surface)};
  }

  ${({ onSurface }) => onSurface
    && css`
      background-color: ${({ theme }) => darken(0.03, theme.surface)};

      &:hover {
        background-color: ${({ theme }) => darken(0.06, theme.surface)};
      }
    `};
`;

export const primaryStyle = css`
  ${buttonPadding};
  background-color: ${({ theme }) => theme.link};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.link)};
  }
`;

const warningStyle = css`
  ${buttonPadding};
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.orange)};
  }
`;

const deleteStyle = css`
  ${buttonPadding};
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => darken(0.03, theme.red)};
  }
`;

export const actionStyle = css`
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

export const subtleStyle = css`
  ${buttonPadding};
  background-color: ${({ theme }) => fade(1, theme.title)};
  color: ${({ theme }) => theme.textSubtle};

  &:hover {
    background-color: ${({ theme }) => fade(0.95, theme.title)};
  }
`;

export const subtleLinkStyle = css`
  color: ${({ theme }) => theme.textSubtle};

  &:hover {
    text-decoration: underline;
  }
`;

export const linkStyle = css`
  color: ${({ theme }) => theme.link};

  &:hover {
    text-decoration: underline;
  }
`;

const disableStyle = css`
  ${buttonPadding};
  background-color: ${({ theme }) => theme.surface};
  color: ${({ theme }) => fade(0.7, theme.textSubtle)};
  cursor: not-allowed;

  &:active {
    opacity: 1;
  }
`;

export const basicStyle = css`
  font-size: 17px;
  text-align: ${({ textAlign }) => textAlign};
  ${({ display }) => display
    && css`
      display: ${display};
    `};
  font-weight: 500;
  border: 0;
  cursor: pointer;
  border-radius: ${radius.xr}px;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 150ms cubic-bezier(0.19, 1, 0.22, 1),
    background-color 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:active {
    opacity: 0.6;
  }
`;

const Button = styled.button.attrs({
  disabled: ({ variation }) => variation === 'disabled' && variation,
})`
  ${basicStyle};

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
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
};

Button.defaultProps = {
  type: 'button',
  variation: 'default',
  display: 'inline-block',
  textAlign: 'center',
};

export default Button;
