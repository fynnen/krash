import {createGlobalStyle} from "styled-components";

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
      background: 'white',
      text: 'black',
      ...typeColors,
    },
    night: {
      background: 'black',
      text: 'white',
      ...typeColors,
    }
  }


export const BaseStyles = createGlobalStyle`
  html,
  body {
    background: var(--background);
    color: var(--text);
  }
  .inverted {
    background: var(--text);
    color: var(--background);
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