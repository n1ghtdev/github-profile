import { css } from 'styled-components';

const FONT_SIZE = 16;

export const breakpoints: breakpointsType = {
  small: 576,
  medium: 768,
  large: 992,
  xl: 1280,
};

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emBreakpoint = `${breakpoints[label] / FONT_SIZE}em`;

  accumulator[label] = (...args) => css`
    @media (min-width: ${emBreakpoint}) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export default media;
