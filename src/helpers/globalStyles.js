import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset'

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
    text: paletteColors.primary,
    ...typeColors,
  },
  night: {
    background: paletteColors.primary,
    text: paletteColors.light,
    ...typeColors,
  }
}

export const BaseStyles = createGlobalStyle`
  ${reset}
  html {
    background: var(--background);
    color: var(--text);
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    padding: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul {
    list-style-type: none;
  }
`;

export const Themes = createGlobalStyle`
  ${({theme}) => `
    :root {
      --background: ${baseColors[theme].background};
      --text: ${baseColors[theme].text};

      --front: ${baseColors[theme].front};
      --back: ${baseColors[theme].back};
      --qa: ${baseColors[theme].qa};

      --mtl: ${baseColors[theme].mtl};
      --qc: ${baseColors[theme].qc};
      --home: ${baseColors[theme].home};
    }
  `}
`;