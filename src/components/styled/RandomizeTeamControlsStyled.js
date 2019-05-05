import styled from "styled-components";

import { BREAKPOINTS as bp } from "../../constants";
import { paletteColors } from "../../helpers/globalStyles";
import { mediaMin, mediaMinMax } from  "../../helpers/mediaQuery";

export const RandomizeTeamControlsStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  ${mediaMin(bp.SM.min, `
    flex-direction: row;
  `)}

  button {
    background: var(--button);
    border: none;
    border-radius: 1px;
    color: var(--textInverted);
    cursor: pointer;
    font-size: 12px;
    height: 48px;
    margin-right: 10px;
    min-width: 60px;

    ${mediaMinMax(bp.XS.min, bp.XS.max, `
      margin-bottom: 15px;
      max-width: 280px;
      width: 100%;
    `)}

    &:active,
    &:focus {
      box-shadow: 3px 3px 10px ${paletteColors.secondary};
    }
  }
  label {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    max-width: 280px;

    ${mediaMin(bp.SM.min, `
      margin-right: 15px;
    `)}
  }
  input {
    font-size: 20px;
    margin-left: 15px;
    text-align: center;
    width: 48px;
  }
`;

export default RandomizeTeamControlsStyled;