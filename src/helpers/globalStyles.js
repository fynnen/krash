import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset'

import { BREAKPOINTS as bp } from "../constants";
import { mediaMinMax } from  "../helpers/mediaQuery";

export const paletteColors = {
  primary: "#222831",
  secondary: "#393E46",
  title: "#d65a31",
  light: "#eeeeee",
}

const typeColors = {
  front: 'red',
  back: 'cyan',
  qa: 'green',
  mtl: 'orange',
  qc: 'pink',
  home: 'grey',
}

const baseColors = {
  day: {
    background: paletteColors.light,
    button:paletteColors.secondary,
    text: paletteColors.primary,
    textInverted: paletteColors.light,
    ...typeColors,
  },
  night: {
    background: paletteColors.secondary,
    button: paletteColors.light,
    text: paletteColors.light,
    textInverted: paletteColors.primary,
    ...typeColors,
  }
}

export const BaseStyles = createGlobalStyle`
  ${reset}
  html * {
    box-sizing: border-box;
  }
  html {
    background: var(--background);
    color: var(--text);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button,
  input {
    border: none;
    cursor: pointer;
    height: 48px;
    padding: 0;
  }

  ul{
    display: grid;
    grid-template-rows: auto;

    ${mediaMinMax(bp.XS.min, bp.XS.max, `
      grid-template-columns: 1fr;
    `)}
    ${mediaMinMax(bp.SM.min, bp.SM.max, `
      grid-template-columns: repeat(2, 1fr);
    `)}
    ${mediaMinMax(bp.MD.min, bp.MD.max, `
      grid-template-columns: repeat(3, 1fr);
    `)}
    ${mediaMinMax(bp.LG.min, bp.LG.max, `
      grid-template-columns: repeat(4, 1fr);
    `)}
  }
`;

export const Themes = createGlobalStyle`
  ${({bodyHeight, theme}) => `
    :root {
      --contentHeight: ${bodyHeight}px;
      --background: ${baseColors[theme].background};
      --button: ${baseColors[theme].button};
      --text: ${baseColors[theme].text};
      --textInverted: ${baseColors[theme].textInverted};

      --front: ${baseColors[theme].front};
      --back: ${baseColors[theme].back};
      --qa: ${baseColors[theme].qa};

      --mtl: ${baseColors[theme].mtl};
      --qc: ${baseColors[theme].qc};
      --home: ${baseColors[theme].home};
    }
  `}
`;